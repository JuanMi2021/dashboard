import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iban',
  templateUrl: './iban.component.html',
  styleUrls: ['./iban.component.css']
})
export class IbanComponent implements OnInit {

  myGroup = new FormGroup({
    Empresas: new FormGroup({
      IBAN: new FormControl(),
      NIF: new FormControl(),
      empresa: new FormControl()
    })
  })
  constructor() { }

  ngOnInit(): void {
  }

}
