import { Component } from '@angular/core';
import { DynamicPage } from '../dynamic/dynamic';
import { GamePage } from '../game/game';
import { AppPage } from '../app/app';
import { PersonalPage } from '../personal/personal';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabDynamic = DynamicPage;
  tabGame = GamePage;
  tabApp = AppPage;
  tabPersonal = PersonalPage

  constructor() {

  }
}
