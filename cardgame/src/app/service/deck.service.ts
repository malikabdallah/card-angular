import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reponse } from '../model/answer.model';
import { Card, Cards } from '../model/cards.model';
import { Hand } from '../model/main.model';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private baseUrl = 'https://opentdb.com/api.php?';


  constructor(private http:HttpClient) { }



  public getDeck():Observable<reponse>{
    return this.http.get<reponse>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  }


  public getCards(deck_id:string):Observable<Cards>{
    return this.http.get<Cards>('https://deckofcardsapi.com/api/deck/'+deck_id+'/draw/?count=52');

  }

  public getResult(cardj1:Card[],cardj2:Card[],common:Card[]):Observable<Hand>{
    console.log("cards 1 "+cardj1);
    console.log("cards 2 "+cardj2);
    console.log("common "+common);


    return this.http.get<Hand>('https://api.pokerapi.dev/v1/winner/texas_holdem?cc='+
    common[0].code+','+common[1].code+','+common[2].code+','+common[3].code+','+common[4].code+'&pc[]='+
    cardj1[0].code+','+cardj1[1].code+'&pc[]='+cardj2[0].code+','+cardj2[1].code);
  }

}
