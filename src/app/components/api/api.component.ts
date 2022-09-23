import { Attribute, Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { isIdentifier } from '@angular/compiler';
import { toArray } from 'rxjs';


@Component({
  selector: 'app-api',
  templateUrl: `./api.component.html`,
  styleUrls: ['./api.component.css']
})

@Injectable({
  providedIn: 'root'
})




export class ApiComponent implements OnInit {
  
  myGroup=new FormGroup({});

  misProductos = new FormGroup({
    id: new FormControl()
  });

  url = "https://prueba.sicnova3d.com/CRUD/";
  
  prod={
    id:""
  }
  productos:any;
  //myGroup:any;
  data$:any;
  constructor(private servicio:CrudService) { 
    //this.productos={};
    //this.productos=this.servicio.gimmeProductos().subscribe((result)=>{result=this.productos=result;console.log(result)})
  }
  /*
  prodObservable = new Observable((observer) => {
    this.productos = this.getProductos
  });
  */  
 
  ngOnInit() {
    //this.getProductos().subscribe((resultado)=>{this.productos=resultado;console.log(this.productos)});
    //this.productos=this.getProductos()
    //this.servicio.recuperarTodos().subscribe(resultado=>this.productos=resultado)
    this.getProductos();
    //console.log(this.servicio.recuperarTodos());
   /*this.myGroup = new FormGroup({
      ids: new FormControl(this.getProductos())
    });*/
    //this.getProductos().subscribe((result:any)=>{this.productos=result;});
    //this.prodObservable.subscribe()
    //this.getProductos()

    /*
    this.servicio.recuperarTodos().subscribe(() => {
      this.servicio.recuperarTodos().forEach(value=>{this.productos=value; console.log(Object.values(value)[0]["@attributes"]["id"])});
    });/* */
    //this.productos=this.getProductos().subscribe((result:any)=>{console.log(result)});
    //this.productos=this.getProductos().subscribe((result:any) => {this.productos=result});
    //this.http.get(`${this.url}callProducto.php`).forEach(value=>{this.productos=value});
    
  //this.myGroup = new FormGroup({id: new FormControl()});
  };
  getProductos(){
    this.servicio.recuperarTodos().subscribe((resultado)=>{this.productos=resultado;});
    // this.servicio.recuperarTodos().subscribe((resultado)=>{
    //   Object.values(resultado).forEach(element => {
    //     //let temp=[];
    //     //temp.push(new FormControl({id : element["@attributes"]["id"]}));
    //     this.myGroup.addControl("id",new FormControl({id : element["@attributes"]["id"]}))
    //   });
    // });
    /*this.servicio.gimmeProductos().subscribe(
      (result)=>{this.productos=result;console.log(this.productos)}
    );
      /** */
      //this.servicio.recuperarTodos().subscribe((resultado)=>this.productos=resultado)
      //this.productos=this.servicio.recuperarTodos()
    /*const prueba=this.servicio.recuperarTodos()
    prueba.subscribe((result)=>{
      this.productos=result;console.log(this.productos)
    })*/
    /*this.servicio.recuperarTodos().subscribe(
      (result)=>{this.productos=Object.values(result);console.log(this.productos);
        //for (const iterator of Object.values(result)) {console.log(iterator["@attributes"]["id"]);}
      }
    );/**/


    //console.log(this.servicio.recuperarTodos());
    //return this.servicio.recuperarTodos();


    //this.productos=this.servicio.recuperarTodos();
    /*this.servicio.recuperarTodos().subscribe();
    this.servicio.recuperarTodos().forEach(element => {
      this.productos=element;
    });/** */
    // Funciona
    /*
    this.servicio.recuperarTodos().subscribe(() => {
      this.servicio.recuperarTodos().forEach(value=>{this.productos=value; console.log(Object.values(value)[0]["@attributes"]["id"])});
    });/** */
    /* //Funciona
    this.servicio.recuperarTodos().subscribe((result:object) => {this.productos=result});
    this.servicio.recuperarTodos().forEach(value=>{this.productos=value});
    /**/
    /* //Funciona
    this.servicio.recuperarTodos().subscribe((result:any) => {this.productos=result});
    this.servicio.recuperarTodos().forEach(value=>{this.productos=value});
    /**/
    //this.productos=this.servicio.recuperarTodos() // No funciona
  };
}
