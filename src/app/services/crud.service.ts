import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Dhli } from './dhli';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //myData: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  //url='https://development.sicnova3d.com/test/proyect/classes/'; // disponer url de su servidor que tiene las páginas PHP
  url = "https://prueba.sicnova3d.com/CRUD/";
  data:any;
  //data=new Object;
  constructor(private http: HttpClient) { }


  recuperarTodos() {
    //return this.http.get(`${this.url}recuperartodos.php`);
    // this.http.get(`${this.url}callProducto.php`).subscribe((result:any)=>{this.myData.next(result)});
    //this.http.get(`${this.url}callProducto.php`).subscribe((result:any)=>{this.data = result});
    //this.data=this.http.get(`${this.url}callProducto.php`);
    return this.http.get(`${this.url}callProducto.php`);
    //return this.myData.asObservable();
    //return this.data;
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
