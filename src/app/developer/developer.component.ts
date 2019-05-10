import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer';
import { Skill } from '../common/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer;
  public skillArray: Skill[] =
  [new Skill('Angular', 'https://angular.io/assets/images/logos/angular/angular.svg', 'https://angular.io/'),
  new Skill('Github', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', 'https://github.com/')];

  constructor() { }

  ngOnInit() {
    this.developer = new Developer('Spennato', 'Mickael', 31, 'masculin', 'En formation à la Wild', this.skillArray);
  }

}
