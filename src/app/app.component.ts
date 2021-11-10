import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Employee Detail Form';
  bloodGroup = ['O+ve', 'O-ve', 'AB-ve', 'B+ve'];
}
