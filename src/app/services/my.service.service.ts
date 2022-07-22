import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Adresse } from '../models/adresse';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  adresses :Adresse[] = [
    {
      ville : "dakar",
      quartier : "ouakam",
      villa: 7
    },
    {
      ville : "thies",
      quartier : "gare",
      villa :2
    }
  ]
  adresses1 :Adresse[] = []
  // observer => obstring , source de donnees => first 1, 
  test:string = ""
  obsString$ = new Observable<string>(
    (subscriber)=>{
      subscriber.next("first 1")
  })
  //mm chose que en haut
  obsArray$ = of(this.adresses)
  
  constructor() { }
}
