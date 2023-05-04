import { Injectable } from '@angular/core';
import { Formulaire } from '../Models/Formulaire.model'


@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  constructor() { }

  soumettreFormulaire(formulaire: Formulaire ) {
    console.log('Formulaire soumis avec succès.');
    console.log('Nom: ' + formulaire.nom);
    console.log('Email: ' + formulaire.email);
    console.log('Type de carte: ' + formulaire.typeCarte);
    console.log('Numéro de carte: ' + formulaire.numCarte);
    console.log('Date d\'expiration: ' + formulaire.dateExp);
    console.log('Code: ' + formulaire.code);
  }

}
