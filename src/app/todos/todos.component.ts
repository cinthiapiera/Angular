import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{
  //no es la mejor practica de tipado
  todos: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    //getTodos recibira informacion y nos suscribimos y le decirmos que debe hacer con lo obtenido(logica)
    this.todoService.getTodos().subscribe((res: any) => {
      //console.log(res);
      //guardamos nuestra respuesta
      this.todos = res;
      console.log(this.todos);
    });

    this.todoService.getComments(10).subscribe( res => {
      console.log('comments',res);

    })

    this.todoService.getPosts().subscribe((res) => {
      console.log('Posts: ',res);

    })

    // this.todoService.posts$.subscribe(res => {
    //   console.log('nueva data', res);

    // })
  }

  updatePost(){
    // this.todoService.postSource.next('informacion');
    this.todoService.postSource.next([1,2,3,4,5,6]);
  }

}
