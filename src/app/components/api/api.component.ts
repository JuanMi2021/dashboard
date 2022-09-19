import { Attribute, Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup } from '@angular/forms';
import { async, Observable, toArray } from 'rxjs';
import { isIdentifier } from '@angular/compiler';


@Component({
  selector: 'app-api',
  templateUrl: `./api.component.html`,
  styleUrls: ['./api.component.css']
})

@Injectable({
  providedIn: 'root'
})


export class ApiComponent implements OnInit {
  myGroup:any

  url = "https://prueba.sicnova3d.com/CRUD/";
  
  prod={
    id:""
  }

  productos:any;
  //myGroup:any;
  data$:any;
  constructor(private servicio:CrudService) { 
    //this.productos={};
  }
/*
  prodObservable = new Observable((observer) => {
      this.productos = this.getProductos
  });
*/  
  ngOnInit() {
    /*this.myGroup = new FormGroup({
      ids: new FormControl(this.getProductos())
    });*/
    //this.getProductos().subscribe((result:any)=>{this.productos=result;});
    //this.prodObservable.subscribe()
    this.getProductos();
    console.log(this.productos);
    //this.productos=this.getProductos().subscribe((result:any)=>{console.log(result)});
    //this.productos=this.getProductos().subscribe((result:any) => {this.productos=result});
    //this.http.get(`${this.url}callProducto.php`).forEach(value=>{this.productos=value});
    
  //this.myGroup = new FormGroup({id: new FormControl()});
  };
  
  getProductos(){
    //return this.servicio.recuperarTodos();
    
    // Funciona
    this.servicio.recuperarTodos().subscribe(() => {
      this.servicio.recuperarTodos().forEach(value=>{this.productos=value; console.log(Object.values(value)[0]["@attributes"]["id"])});
    });
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
