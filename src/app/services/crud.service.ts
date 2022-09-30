import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { BehaviorSubject, catchError, observable, Observable, retry, throwError } from 'rxjs';
// import { Dhli } from './dhli';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //myData: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  //url='https://development.sicnova3d.com/test/proyect/classes/'; // disponer url de su servidor que tiene las páginas PHP
  url = "https://prueba.sicnova3d.com/CRUD/";
  data:any;
  constructor(private http: HttpClient) { }
  
  recuperarUno(id:any, uri:any){
    return this.http.get(`${this.url}callProducto.php?id=${id}&uri=${uri}`);
  }
  
  recuperarTodos(direccion:string){
    let salida;
    //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    //return this.http.get(`${this.url}callProducto.php`,{headers, responseType:'text' });
    switch (direccion) {
      case "tienda":
          salida = this.http.get(`${this.url}callProducto.php?uri=tienda`);
        break;
      case "distribuidor":
          salida = this.http.get(`${this.url}callProducto.php?uri=distribuidor`);
        break;
      case "latam":
          salida = this.http.get(`${this.url}callProducto.php?uri=latam`);
        break;
      default:
          salida = this.http.get(`${this.url}callProducto.php?uri=error`);
        break;
    }
    return salida;
    //return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(articulo:any) {
    return this.http.post(`${this.url}test.php`, JSON.stringify(articulo));
  }

  // baja(codigo:number) {
  //   return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  // }

  // seleccionar(codigo:number) {
  //   return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  // }

  // modificacion(articulo:any) {
  //   return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
  // }


}
