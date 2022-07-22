import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { filter, Observable, interval, Subscription, UnsubscriptionError, of } from 'rxjs';
import { Adresse } from '../models/adresse';
import { MyServiceService } from '../services/my.service.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  constructor(private myServ:MyServiceService) {

  }
  private subcription:Subscription = new Subscription
  private _test = 0; //typage dynamique
  private _taille : number | null = 0;
  private _nom : string  = "seynabou" ; //typage statique
  private _isBool : boolean = true;

  private _array : Array <number | string> = [1,2,3,"yes"]; //typage generique => collection
  private _array2: (number | string)[] = ["1",2,3]
  private _array3 : [number , string] = [3,"seynabou"]; //tuple

  private _myAny : any = 1; // any types

  private _myUnknow : unknown=true; //dont need inialization(differ to any due to this)
  
  //on met le loader dans le html ng-container setTimeOut dans le fichier ts
 
   adresses:Adresse[] = []

  onInput(value :any){
      //const value = event.target.value;
      // if(value.length >= 4){
      //     const input = this.myServ.adresses.filter(adresse=>adresse.ville == value);
      //     if(input.length>0){
      //       this.adresses = input
      //     }
      // }
      this.myServ.obsArray$.subscribe(
        data=> this.adresses = data
      )
  }

  text : string = "bonjour"
  //onload au chargement de la page 
  ngOnInit(): void {
    this.myServ.obsArray$.subscribe(
      data=> this.adresses = data
    )

  }

  
}
