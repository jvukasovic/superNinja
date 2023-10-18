class Ninja {
    constructor(name, salud){
        this.name = name;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`El nombre del ninja es ${this.name}`);
    }

    showStats() {
        console.log('Los stats del ninja son:');
        console.log('Nombre: ', this.name);
        console.log('Fuerza: ', this.fuerza);
        console.log('Velocidad: ', this.velocidad);
        console.log('Salud: ', this.salud);
    }

    drinkShake() {
        this.salud += 10;
    }
}

let ninja = new Ninja('Javi', 5);

ninja.sayName()
ninja.drinkShake()
ninja.showStats()
