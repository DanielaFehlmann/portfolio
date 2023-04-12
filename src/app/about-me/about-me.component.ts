import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  headings = ['MY JOURNEY BEGAN', 'I AM FASCINATED', 'I AM LOOKING', 'MY GOAL'];
  text = [
  `last year when I noticed that I have never been more interested in anything than programming. I didn't want to learn only with books and online tutorials anymore. I wanted professional training - so I finally dared to take a step forward and applied to the Developer Akademie. This was the best decision I could have made.`,
  'by the variety of possibilities in programming. What I like best are building projects from scratch and of course the sense of achievement after finishing them. This and the programming community make working as a frontend developer a real pleasure.',
  'for an oppurtunity to prove my newly acquired skills as a junior frontend developer. I am very glad that i found my place in the world of programming - now I am looking for a place in a great team.',
  `is to constantly learn and grow. I am really motivated as well as excited to master new challenges and to learn from them every day.`
];
}
