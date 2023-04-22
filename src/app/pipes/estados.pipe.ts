import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  //lo que se ejecutara cuando llamemos a nuestro pipe
  transform(value: unknown, ...args: unknown[]): unknown {
    const text = value === 0 ? "Pendiente" : "Registrado";
    return text;
  }

}
