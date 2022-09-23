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
  
  productos:any;
  constructor(private servicio:CrudService) { 
  }
 
  ngOnInit() {
    this.getProductos();
  };
  
  getProductos(){
    this.servicio.recuperarTodos().subscribe((resultado)=>{this.productos=resultado;});
  };
}
