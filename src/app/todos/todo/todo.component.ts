import { Component, OnInit} from '@angular/core';
import { TodoService } from '../todo.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.posts$.pipe(
      map((res: number[]) => {
        console.log(res);
        //res = ['uno', 'dos', 'tres']
        return res.filter(num => num > 3);
      }),
      //nos sirve para saber que devuelve el util operador map
      tap(res => {
        console.log('desde el tap:',res);

      })
    )
    .subscribe(res => {
      console.log('nueva data:', res);

    })
  }

}
