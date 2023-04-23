import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  //permite que cualquier componente pueda utilizar el servicio de manera global con el providedIn
  providedIn: 'root'
})
export class TodoService {

  //ejemplo: observable(canal de la información) simepre terminan con el signo $
  postSource = new Subject<number[]>();
  //asi el postSource estara conectado con un observable y consumido desde nuestros componentes
  posts$ = this.postSource.asObservable();

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
    //la linea anterior vendria a ser el observable
  }

  getComments(postId: number){
    //si tuvieramos solicitar 10 parametros usamos el params cmo obj
    const params = {
      postId,
    }
    return this.http.get('https://jsonplaceholder.typicode.com/comments',{
      params,
    });
    //return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

  getPosts(){
    const body = {
      id: 1,
      comment: "hola",
      date: "2023-04-22"
    }
    return this.http.post('https://jsonplaceholder.typicode.com/posts', body);
  }
}
