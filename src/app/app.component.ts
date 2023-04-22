import { Component } from '@angular/core';

//decoradores para saber como esta ligado y como funciona este componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'miprimerproyecto';
  constructor(){
    localStorage.setItem('id', '1234');
  }
}
