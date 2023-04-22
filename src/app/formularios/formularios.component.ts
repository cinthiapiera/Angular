import { Component , OnInit} from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent  implements OnInit{

  //angular viene equipaod con validadores que podemos facilmente utilizarlos
  name = new FormControl('',[Validators.minLength(4), Validators.required]);
  isChecked = new FormControl(false);//o inicializar desde un inicio (true)

  constructor(){}

  ngOnInit(): void {
    //this.name.
  }

}
