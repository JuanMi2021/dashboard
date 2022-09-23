import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParamsOptions } from '@angular/common/http';
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
  //data=new Object;
  constructor(private http: HttpClient) { }


  gimmeProductos(): Observable<Object>{
    //return this.http.get<Observable<Object>>(`${this.url}callProducto.php`).pipe(retry(3),catchError((error:HttpErrorResponse)=>{return throwError(()=>{new Error("Ha ocurrido un error")})}));
    return this.http.get<Observable<Object>>(`${this.url}callProducto.php`);
  }
  /*gimmeProductos(){
    this.http.get(`${this.url}callProducto.php`).subscribe(result=>this.data=result);
    return this.data
  }/** */
  /*gimmeProductos(){
    return this.http.get(`${this.url}callProducto.php`);
  }/** */
  recuperarTodos() {
    //return this.http.get(`${this.url}recuperartodos.php`);
    //this.http.get(`${this.url}callProducto.php`).subscribe((result:any)=>{this.myData.next(result)});
    //this.http.get(`${this.url}callProducto.php`).subscribe((result:any)=>{this.data = result});
    //this.data=this.http.get(`${this.url}callProducto.php`);
    //let mas_datos;
    return this.http.get(`${this.url}callProducto.php`);
    /*
    this.http.get(`${this.url}callProducto.php`).subscribe((resultado)=>{mas_datos=resultado;})/*
    const req  = new Observable((observer)=>{
      this.http.get(`${this.url}callProducto.php`).subscribe((resultado)=>{mas_datos=resultado;console.log(mas_datos);console.log(resultado)})
    })*/
    //req.subscribe();
    //return mas_datos;
    
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
