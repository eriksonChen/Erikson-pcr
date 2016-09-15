import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies-menu',
  templateUrl: 'hobbies-menu.component.html',
  styleUrls: ['./hobbies-menu.component.scss']
})
export class HobbiesMenuComponent {

  onMenuBtn(btn) {
    gaclick('menuBtn ' + btn);
  }

}
