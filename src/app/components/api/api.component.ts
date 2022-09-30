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
  
  url = "https://prueba.sicnova3d.com/CRUD/";
  toggleDscrptn:boolean=true;
  toggleDscrptnshrt:boolean=true;
  toggleLst:boolean=true;
  tienda:boolean=false;
  distri:boolean=false;
  latam:boolean=false;
  productos:any;
  producto:any;
  campos:any;
  vals:any;
  constructor(private servicio:CrudService) { 
  }
 
  ngOnInit() {
    
  };

  getAProduct(iden:string){
    let uri
    if (this.tienda) {
      uri="tienda"
    }
    if (this.distri) {
      uri="distri"
    }
    if (this.latam) {
      uri="latam"
    }
    this.toggleLst=!this.toggleLst;
    this.servicio.recuperarUno(iden,uri).subscribe((resultado)=>{
      this.vals=Object.values(resultado);
      this.campos=Object.keys(resultado);
      this.producto=resultado;
      console.log(this.producto);
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    });
  };

  getProductosTienda(){
    this.tienda=true;
    this.distri=false;
    this.latam=false;
    this.servicio.recuperarTodos("tienda").subscribe((resultado)=>{this.productos=resultado;});
  };


  getProductosDistribuidor(){
    this.tienda=false;
    this.distri=true;
    this.latam=false;
    this.servicio.recuperarTodos("distribuidor").subscribe((resultado)=>{this.productos=resultado;});
  };


  getProductosLatam(){
    this.tienda=false;
    this.distri=false;
    this.latam=true;
    this.servicio.recuperarTodos("latam").subscribe((resultado)=>{this.productos=resultado;});
  };
}
