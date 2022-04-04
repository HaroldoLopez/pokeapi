export class Characteristics {
    HP: String;
    attack: String;
    defense: String;
    specialAttack: String;
    specialDefense: String;
    velocity: String;
    image: String;

    constructor(HP:String="", attack:String="", defense:String="", specialAttack:String="", specialDefense:String="", velocity:String="", image:String=""){
        this.HP = HP;
        this.attack = attack;
        this.defense = defense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.velocity = velocity;
        this.image = image

    }
}

export interface PokeList {
    name: String,
    url: String
}

export class Poke {
    id: String;
    name: String;

    characteristics:Characteristics;

    constructor(id:String="", name:String="", characteristics: Characteristics=new Characteristics()) {
        this.id = id;
        this.name = name;
        this.characteristics = characteristics
    }

}