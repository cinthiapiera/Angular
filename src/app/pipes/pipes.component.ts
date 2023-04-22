import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit{

  name = "Cinthia";
  apellido = "MALDONADO";
  // date = '2020-02-20T13.59:31.238Z';
  estado = 0;//estado = 1;

  constructor(){}

  ngOnInit(): void {

  }
  changeState(){
    this.estado = 1
  }
}
