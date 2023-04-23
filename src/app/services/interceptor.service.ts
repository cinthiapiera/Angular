import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  //intercepta las peticiones desde nuestro frontend y colocar: un nuevo header, parametros o un logger para saber cuantas peticiones se realizan por dia o visita
  //para aplicar la logica que querramos
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptado!!");
    const newReq = req.clone({
      setHeaders: {
        Authorizacion: "FakeAuth"
      }
    })
    return next.handle(newReq);
    //return next.handle(req);

  }
}
