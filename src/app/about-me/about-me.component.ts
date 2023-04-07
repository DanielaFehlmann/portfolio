import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  headings = ['MY JOURNEY BEGAN', 'I AM FASCINATED', 'I AM LOOKING', 'MY GOAL'];
  text = [
  'last year when I noticed that my interest in programming is growing. I finally dared to take a step forward and applied for an apprenticeship. This was the best decision I could have made.',
  'by the variety of possibilities in programming. What I like best is the sense of achievement after finishing a project. This and the programming community make working as a frontend developer a real pleasure.',
  'for an oppurtunity to prove my newly acquired skills as a frontend developer.',
  'is to constantly learn and grow. I am very glad that I found my place in the world of programming.'
];
}
