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
    link: 'https://daniela-fehlmann.developerakademie.net/elpolloloco/ ',
    github: 'https://github.com/DanielaFehlmann/elpolloloco',
    type: 'js'
  },
  {
    heading: 'Join',
    subtitle: 'javascript based group work (project management tool)',
    link: 'https://daniela-fehlmann.developerakademie.net/Join/',
    github: 'https://github.com/DanielaFehlmann/Join',
    type: 'js'
  },
  {
    heading: 'Ring of fire',
    subtitle: 'angular based card game',
    link: 'https://ring-of-fire-e6ce7.web.app/',
    github: 'https://github.com/DanielaFehlmann/ringoffire',
    type: 'ang'
  },
  {
    heading: 'Pokedex',
    subtitle: 'javascript based pokedex (worked with APIs)',
    link: 'https://daniela-fehlmann.developerakademie.net/Pokedex/',
    github: 'https://github.com/DanielaFehlmann/pokedex',
    type: 'js'
  }];

  button: number = 0;

}

