const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs to nap. Zzz`);
      this.sleep = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired to play`);
        this.sleep();
      } else {
        console.log(`YAY! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "Ferret");
const clover = createPet("Clover", "Rabbit");
const baxter = createPet("Baxter", "Hamster");
const cleo = createPet("Cleo", "Rat");
const francine = createPet("Francine", "Turtle");

//console.log(sora, clover, baxter, cleo, francine);
//clover.sleep();
//baxter.play();
