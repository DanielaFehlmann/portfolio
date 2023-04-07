import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {

  works = [{
    heading: 'El Pollo Loco',
    subtitle: 'Javascript based jump and run game',
    link: 'https://daniela-fehlmann.at/elpolloloco/index.html',
    github: 'https://github.com/DanielaFehlmann/elpolloloco',
    type: 'js'
  },
  {
    heading: 'Join',
    subtitle: 'javascript based project management tool (group work)',
    link: 'https://daniela-fehlmann.at/join/',
    github: 'https://github.com/DanielaFehlmann/Join',
    type: 'js'
  },
  {
    heading: 'slack-clone',
    subtitle: 'angular based messaging app (group work)',
    link: 'https://daniela-fehlmann.at/slack-clone',
    github: 'https://github.com/DanielaFehlmann/slack-clone',
    type: 'ang'
  },
  {
    heading: 'Pokedex',
    subtitle: 'javascript based pokedex (worked with APIs)',
    link: 'https://daniela-fehlmann.at/pokedex/index.html',
    github: 'https://github.com/DanielaFehlmann/pokedex',
    type: 'js'
  }];

  button: number = 0;

}

