import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  headings = ['Beginning my journey', 'Pursuing professional training', 'Passion for programming', 'Seeking an opportunity', 'Motivation and goals'];
  text = [
  `Last year I decided I did not want to learn coding only through books and online tutorials anymore. Since then programming became my top priority.`,
  'I knew I wanted to do programming professionally, so I finally applied to the Developer Akademie for professional training. It was the best decision I could have made.',
  'I am fascinated by the variety of possibilities in programming. Building projects from scratch and the sense of achievement after finishing them are one of my favorite aspects.',
  `I am looking for an opportunity to prove my skills as a junior frontend developer. I am very glad to have found my place in the world of programming, now I am seeking a place in a great team.`,
  `My goal is to constantly learn and grow. I am highly motivated and excited to master new challenges and to learn from them every day.`
]; 
}
