import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent  implements OnInit{

  //diferencia principal entre un ng module(optenemos el valor) y FormControl (controlamos el valor en funcionalidades)
  //angular viene equipaod con validadores que podemos facilmente utilizarlos

  //creacion de un formgroup u sus elementos vendrian a ser objetos
  form = new FormGroup({
    name: new FormControl('',[Validators.minLength(4), Validators.required]),
    isChecked: new FormControl(false),//o inicializar con un true
})

  constructor(){}

  ngOnInit(): void {
    //this.name.
  }

}
