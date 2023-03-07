import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {

  skills = ['Javascript', 'Angular', 'HTML / CSS', 'SCRUM', 'Git', 'Material Design', 'API', 'Firebase', 'Typescript'];
  
}
