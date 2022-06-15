import { Component, OnInit } from '@angular/core';
import { Card, Cards } from 'src/app/model/cards.model';
import { DeckService } from 'src/app/service/deck.service';
import {reponse} from 'src/app/model/answer.model';
import { Tour } from 'src/app/model/tour.model';
import { Hand } from 'src/app/model/main.model';
@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {

  public cardsJ1:Card[]=[];
  public cardsJ2:Card[]=[];
  public tour:Tour=Tour.Bide;
  public answer:reponse;
  public cards:Cards;
  public common:Card[]=[];
  public hand:Hand;


  constructor(private service:DeckService) { }

  ngOnInit(): void {
    this.service.getDeck().subscribe(
      data=>{
        this.answer=data;
        this.service.getCards(this.answer.deck_id).subscribe(
          data2=>{
            this.cards=data2;
                      
            this.cardsJ1.push(this.cards.cards[0]);
            this.cardsJ1.push(this.cards.cards[1]);

            this.cardsJ2.push(this.cards.cards[2]);
            this.cardsJ2.push(this.cards.cards[3]);

            this.common.push(this.cards.cards[4]);
            this.common.push(this.cards.cards[5]);
            this.common.push(this.cards.cards[6]);
            this.common.push(this.cards.cards[7]);
            this.common.push(this.cards.cards[8]);


            this.service.getResult(this.cardsJ1,this.cardsJ2,this.common).subscribe(
              data3=>{
                this.hand=data3;
                alert("vous avez "+this.hand.players[0].hand);
                alert("resultat "+this.hand.players[0].result);
              }
            );


          }
        )
      }
    )

 




    
  }

}
