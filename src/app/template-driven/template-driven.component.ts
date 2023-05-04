import { Component, OnInit } from '@angular/core';
import { FormulaireService } from '../shared/services/formulaire.service';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {


  formulaire!: FormGroup;
  
  constructor(private formulaireService: FormulaireService,
     private fb: FormBuilder) { }

      //formulaires! : Formulaire[];

     FormGroup!: any;


  ngOnInit(): void {
    this.formulaire = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$')]],
      typeCarte: ['', Validators.required],
      numCarte: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      dateExp: ['', Validators.required],
      code: ['']
    });
  }

  onSubmit() {
    if (this.formulaire) {
  
    }


  }



}
