import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  sent = false;

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;


  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    this.disableElements(nameField, mailField, messageField, sendButton);
    let formData = new FormData();
    this.appendFormdata(formData, nameField, mailField, messageField);
    await this.sendToURL(formData);
    this.enableElements(nameField, mailField, messageField, sendButton);
    this.resetValue(nameField, mailField, messageField);
    setTimeout(() => {
      this.sent = false;
    }, 3000);
  }


  disableElements(nameField: any, mailField: any, messageField: any, sendButton: any) {
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }


  appendFormdata(formData: any, nameField: any, mailField: any, messageField: any) {
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);
    formData.append('email', mailField.value);
  }


  async sendToURL(formData: any) {
    await fetch('https://daniela-fehlmann.developerakademie.net/send_mail.php',
    {
      method: 'POST',
      body: formData
    }
  );
  this.sent = true;
  }


  enableElements(nameField: any, mailField: any, messageField: any, sendButton: any) {
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }


  resetValue(nameField: any, mailField: any, messageField: any) {
    nameField.value = '';
    messageField.value = '';
    mailField.value = '';
  }
}
