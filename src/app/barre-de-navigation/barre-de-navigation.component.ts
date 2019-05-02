import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-de-navigation',
  templateUrl: './barre-de-navigation.component.html',
  styleUrls: ['./barre-de-navigation.component.css']
})
export class BarreDeNavigationComponent implements OnInit {

  siteTitle:string = "Appli Blog";
  inscription:string = " Inscription";
  connexion:string = " Connexion";

  constructor() { }

  ngOnInit() {
  }

}
