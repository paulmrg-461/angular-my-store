import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  btnDisabled = true;
  developer = {
    name: 'Paul Realpe',
    age: 26,
    avatar: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  onScroll(event: Event) {
    const element: HTMLElement = event.target as HTMLElement;
    console.log('ScrollTop', element.scrollTop);
  }

  changeName(event: Event) {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    this.developer.name = element.value;
  }
}
