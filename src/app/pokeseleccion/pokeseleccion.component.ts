import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommunicationService } from '../services/communication/communication.service';
import { Characteristics, Poke, PokeList } from '../services/poke/Poke.model';
import { PokeService } from '../services/poke/poke.service';

@Component({
  selector: 'app-pokeseleccion',
  templateUrl: './pokeseleccion.component.html',
  styleUrls: ['./pokeseleccion.component.css']
})
export class PokeseleccionComponent implements OnInit {

  enableSave:Boolean=false
  pokemonsRepo:Poke[] = []
  pokemons:Poke[] = []

  @Output() changeViewEvent = new EventEmitter<String>();
  @Output() sendPokesEvent = new EventEmitter<Poke[]>();

  @Input() pasatiempo:String = ""
  @Input() edad:String = ""
  @Input() documento:String = ""

  constructor(private pokeService:PokeService) {
    this.initPokemons()
  }

  ngOnInit(): void {
  }

  initPokemons() {

    this.pokemonsRepo = []

    for(const id of Array(9).keys()){
      const random:Number = Math.floor(Math.random() * (100 - 1)) + 1;

      this.pokeService.getOnePokemon(String(random))

      .subscribe( data => {
        
        const hp = data.stats[0].base_stat
        const attack = data.stats[1].base_stat
        const defense = data.stats[2].base_stat
        const specialAttack = data.stats[3].base_stat
        const specialDefense = data.stats[4].base_stat
        const velocity = data.stats[5].base_stat
        const image = data.sprites.other.home.front_default

        const pokeTmp = data;
        const charact:Characteristics = new Characteristics(hp,attack,defense,specialAttack,specialDefense,velocity,image)
        this.pokemonsRepo = [...this.pokemonsRepo,new Poke(pokeTmp.id,pokeTmp.name,charact)]
    
      })

    }
  }

  addPoke(event:any, poke:String) {

    const pokeSelected = this.pokemons.length

    console.log(pokeSelected);

    if(event.target.parentNode.children[1].classList[1] == undefined &&  pokeSelected < 3) {
      const pokeTmp:Poke = this.pokemonsRepo.find(p => p.id == poke) ?? new Poke()
      this.pokemons = [...this.pokemons, pokeTmp]
      event.target.parentNode.children[1].classList.add("poke-active")
    } else if(pokeSelected <= 3) {
      this.pokemons = this.pokemons.filter(p => p.id != poke)
      event.target.parentNode.children[1].classList.remove("poke-active")
    }

    if(this.pokemons.length == 3)
      this.enableSave = true
    else
      this.enableSave = false

    console.log(event.target.parentNode.children[1].classList[1]);
    console.log(this.pokemons);
  }

  search(event:any) {
    console.log(event.target.value);

    if(event.target.value != ''){
      this.pokeService.getOnePokemon(String(event.target.value))

      .subscribe( data => {
        const hp = data.stats[0].base_stat
        const attack = data.stats[1].base_stat
        const defense = data.stats[2].base_stat
        const specialAttack = data.stats[3].base_stat
        const specialDefense = data.stats[4].base_stat
        const velocity = data.stats[5].base_stat
        const image = data.sprites.other.home.front_default

        const pokeTmp = data;
        const charact:Characteristics = new Characteristics(hp,attack,defense,specialAttack,specialDefense,velocity,image)
        this.pokemonsRepo = [new Poke(pokeTmp.id,pokeTmp.name,charact)]
    
      })
    }else 
      this.initPokemons()
    
  }

  save() {
    console.log("save");
    if(this.enableSave){
      console.log("go to home");
      this.changeViewEvent.emit('home');
      this.sendPokesEvent.emit(this.pokemons)
    }
  }


}
