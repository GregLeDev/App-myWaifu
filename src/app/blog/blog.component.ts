import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  // Importations des différentes ressources.
  imagesEdenZero: string = 'assets/images/edenZero/rebecca1.png';
  @Input() blogTitre : string;
  @Input() blogContenu : string;
  @Input() blogLove : number;
  @Input() blogDate : Date;

   // fonction click pour loveIts +1
   onLove() {
    if(this.blogLove >= -9999999) {
       this.blogLove ++;
       
    }
   } // EOF onLove
   
   // Fonction click pour LoveIts -1
   noLove() {
    this.blogLove --;
   } // EOF noLove

   // Colorise les articles en fonction des votes
   colorLove() {
    if(this.blogLove > 0) {
      return 'green';
    } else if(this.blogLove < 0) {
      return 'red';
    }
   } // EOF colorLove
  constructor() { }

  ngOnInit() {
  }

}
