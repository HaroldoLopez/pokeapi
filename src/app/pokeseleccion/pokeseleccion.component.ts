import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pokeseleccion',
  templateUrl: './pokeseleccion.component.html',
  styleUrls: ['./pokeseleccion.component.css']
})
export class PokeseleccionComponent implements OnInit {

  pokemonsRepo:any[] = [
    {"number":"#001","name":"Bolbasour 1"},
    {"number":"#002","name":"Bolbasour 2"},
    {"number":"#003","name":"Bolbasour 3"},
    {"number":"#004","name":"Bolbasour 4"},
    {"number":"#005","name":"Bolbasour 5"},
    {"number":"#006","name":"Bolbasour 6"},
    {"number":"#007","name":"Bolbasour 7"},
    {"number":"#008","name":"Bolbasour 8"},
    {"number":"#009","name":"Bolbasour 9"},
  ]

  pokemons:any[] = []

  constructor() { }

  ngOnInit(): void {}

  addPoke(event:any, poke:string) {

    const pokeSelected = this.pokemons.length

    if(event.target.parentNode.children[1].classList[1] == undefined &&  pokeSelected < 3) {
      const pokeTmp = this.pokemonsRepo.find(p => p.number == poke)
      this.pokemons.push({
        "number":pokeTmp.number,
        "name":pokeTmp.name
      })
      event.target.parentNode.children[1].classList.add("poke-active")
    } else if(pokeSelected <= 3) {
      this.pokemons = this.pokemons.filter(p => p.number !== poke)
      event.target.parentNode.children[1].classList.remove("poke-active")
    }

    console.log(this.pokemons);
  }


}
