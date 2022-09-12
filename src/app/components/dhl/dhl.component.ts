import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { __param } from 'tslib';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-dhl',
  templateUrl: './dhl.component.html',
  styleUrls: ['./dhl.component.css']
})
export class DhlComponent implements OnInit {
  formDhl:FormGroup;


  aduanas = 10;
  costPallet = 185;
  extraFuel = 0.34;
  pallet = 0;
  transport = 0;
  fuel = 0;
  risk = 0;
  overheight = 0;
  emergency = 0;
  totIva = 0;
  desglose = 0;
  totReal = 0;
  price = 0;
  articulo ='DHL';
  origen = 'JAEN';


  constructor( public formulario:FormBuilder, private altaServicios:CrudService) {

      this.formDhl = this.formulario.group({
        pallet: [''],
        transport: [''],
        fuel: [''],
        risk: [''],
        overheight: [''],
        emergency: ['']

      })



  }

  Operacion (){
    this.pallet = this.formDhl.value.pallet;
    this.transport = this.formDhl.value.transport;
    this.fuel = this.formDhl.value.fuel;
    this.risk = this.formDhl.value.risk;
    this.overheight = this.formDhl.value.overheight;
    this.emergency = this.formDhl.value.emergency;

    this.totIva = this.formDhl.value.transport + this.formDhl.value.fuel + this.formDhl.value.risk + this.formDhl.value.overheight + this.formDhl.value.emergency;
    this.desglose = this.transport + this.risk + this.overheight + this.emergency + (this.pallet * this.costPallet) + this.aduanas;
    this.totReal = this.desglose + this.fuel + (this.fuel * this.extraFuel );

    if (this.totReal < 500) {
      this.price = this.totReal * 1.12;
    }
    else if (this.totReal < 1000) {
        this.price  = this.totReal * 1.1;
    }
    else if (this.totReal < 1500) {
        this.price  = this.totReal * 1;
    }
    else {
        this.price  = this.totReal * 0.5;
    }


  }


  enviarDatos():any{

    console.log ("EL tipo de pallet es:",typeof this.pallet, this.formDhl.value.pallet);
    console.log ("El tipo de risk es: ",typeof this.risk, this.formDhl.value.risk);
    console.log ("El tipo de valor sobrepeso: ", typeof this.overheight, this.formDhl.value.overheight );
    console.log ("El tipo de emergencia es :", typeof this.overheight, this.formDhl.value.emergency);

    console.log ("El tipo transport 1: ",typeof this.transport, this.formDhl.value.transport);
    console.log ("EL tipo de fuel 1: ", typeof this.fuel, this.formDhl.value.fuel);
    console.log("El valor de Iva Total 1 es: ",this.transport + this.fuel);
    console.log("El valor de Iva Total 2 es: ",this.formDhl.value.tranport + this.formDhl.value.fuel );

  }

  alta() {
    console.log ("Presionado boton para enviar solo empresa y origen")
    this.altaServicios.alta(this.articulo).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      }
    });
  }

  ngOnInit(): void {

  }
}


