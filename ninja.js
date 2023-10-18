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
        console.log('Nombre: ', this.name);
        console.log('Salud: ', this.salud);
        console.log('Velocidad: ', this.velocidad);
        console.log('Fuerza: ', this.fuerza);
    }

    drinkShake() {
        this.salud += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
        
    }

    speakWisdom() {
        super.drinkShake()
        console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses');
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"