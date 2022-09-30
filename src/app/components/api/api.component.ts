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
  productos:any;
  producto:any;
  campos:any;
  vals:any;
  constructor(private servicio:CrudService) { 
  }
 
  ngOnInit() {
    this.getProductos();
  };

  getAProduct(iden:string){
    this.toggleLst=!this.toggleLst;
    this.servicio.recuperarUno(iden).subscribe((resultado)=>{
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

  getProductos(){
    this.servicio.recuperarTodos().subscribe((resultado)=>{this.productos=resultado;});
  };
}
