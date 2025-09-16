claass Hero{
    #health

    constructor(name,health.attack){
    this.name = name;
    this.#health = health;
    this.attack = attack;
  
}

    getName(){
        return this.name;

    }
    get.Health(){
        return this.#health;
    }
    showStats(){
        console.log("Name:"+ this.name);
        console.log("Heath:"+ this.#health);
        console.log("Attack:"+ this.attack);
        console.log("---------------");

    }
}
class warrior extends Hero{
    useAbility(){
        console.log('${this.name}' used Power strike);

    }
}


const Thorin = new Warrior("Thorin",100,10);

const hero2 = new Hero("Gandalf",100,8);


Thorin.useAbility();


