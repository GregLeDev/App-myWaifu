import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Instanciation des différentes ressources.
  imagesHeader:string = 'assets/images/fairyTail/lucy/lucy1.jpg';
  imagesFairyTail:string = 'assets/images/fairyTail/lucy1.jpg';
  imagesEdenZero: string = 'assets/images/edenZero/rebecca1.png';
  imagesShingekiNoKyojin:string = 'assets/images/aot/mikasa1.jpg';
  appTitle:string = 'Bienvenue sur Appli Blog !';
  blogTitle:string = 'Lequel préfères tu ?';
  
  // Tableau qui contients les différents articles.
  blogArticles = [
    // Objet 1[0]
    {
      titre : 'Fairy Tail',
      contenu : 'Manga',
      loveIts :  0,
      created_at : new Date()
    },
    // Objet 2[1]
    {
      titre : 'Eden Zero',
      contenu : 'Manga',
      loveIts :  0,
      created_at : new Date()
    },
    // Objet 3[2]
    {
      titre : 'Shingeki no Kyojin',
      contenu : 'Manga',
      loveIts :  0,
      created_at : new Date()
    }
  ]; // Fin tableau d'objet
   
} // EOF class appComponent