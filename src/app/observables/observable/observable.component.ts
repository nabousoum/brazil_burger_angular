import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscriber,map, elementAt, filter,tap,take, delay } from 'rxjs';
import { Adresse } from 'src/app/models/adresse';
import { MyServiceService } from 'src/app/services/my.service.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  obsArray$ : Observable<Adresse[]>|null = null;
  constructor(private myService:MyServiceService) {

   }
  
  ngOnInit(): void {
   
    this.obsArray$ = this.myService.obsArray$.pipe(
      map(adresses=>{
        return adresses.map(adresse => {
          adresse.ville = "ville de "+adresse.ville
          return adresse
        })
      }),
      take(1),
      tap(adresses => console.log(adresses)),
      filter(adresses=>true),
      delay(2000)

    )
    
    
  }

}
