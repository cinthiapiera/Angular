import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.scss']
})
export class EstructuralComponent implements OnInit{

  isError = false;

  section1 = [
    'introduccion',
    'usos de angular',
    'instalacion del entorno',
    'CLI',
    'conponentes',
  ]
  section2 = [
    { id:1, name: "introduccion", duracion: "10:00"},
    { id:1, name: "usos de angular", duracion: "5:00"},
    { id:1, name: "instalacion del entorno", duracion: "3:00"},
  ]

  section3 = [
    { id:1, name: "CLI", duracion: "10:00"}
  ]

  constructor() {}

  ngOnInit(): void {
  //console.log("inicio")

  //  setTimeout(() => {
  //   this.isError = true;
  //  }, 4000);

    setTimeout(() => {
      this.section3.push({ id:1, name: "componentes", duracion: "5:00"}),
      this.section3.push({ id:1, name: "directivos", duracion: "5:00"})
    },4000 );
  }

  showError(){
    this.isError = true;
  }

}
