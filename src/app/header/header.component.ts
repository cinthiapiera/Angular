import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  //indica como se llamara el componente
  templateUrl: './header.component.html',
  //indica el elemento externo html que se va a renderizar en este caso el header.html
  styleUrls: ['./header.component.scss']
  //indica estilo que se dara al html anterior
})
//onInit es la primera funcion que se ejecuta una vez que el html ya se cargo
export class HeaderComponent implements OnInit{

  //en agunlar no es necesario declarar un variable e inicializaro en el OnInit()
  //*1 es por ello que se necesita especificar el tipo de dato, en nuestro caso le damos la opcion que piede ser null o date
  currentDate: Date | null = null;

  resultado: number = 20;

  constructor(){}

  //ngOnInit es un funcion
  //angular esta muy ligado a typescript(lenguaje de fuerte tipado) *1
  ngOnInit() {
    this.currentDate = new Date();
    console.log(this.currentDate);

    const myname = "Cinthia";
    console.log(`Hola me llamo ${myname}`);

    //console.log("la suma es:",this.sumar(1,2));
  }

  //en angular no es necesario colocar function, se declara de la suigente manera:
  //en la ultimas versiones tambien se tiene que mencionar que tipo de dato se recibira
  sumar(a: number,b: number){
    //return a + b;
    this.resultado = a + b ;
  }

}
