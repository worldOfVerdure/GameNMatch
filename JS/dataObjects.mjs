 export class GameData {
  constructor() {
    this.selection = null, //chosen organism type
    this.numOfTiles = 0,
    this.attempts = 0,
    this.matches = 0,
    this.firstCard = null,
    this.secondCard = null,
    this.firstImg = undefined,
    this.secondImg = undefined
  }

  resetCards() {
    this.firstCard = null;
    this.secondCard = null;
  }
};

export class TimerData {
  constructor() {
    this.minutes = 0,
    this.seconds= 0,
    this.miliseconds = 0,
    this.intervalID = 0,
    this.timeArray = ["00", "00", "00"];
  }
  
  calculateTime(start) {
    // debugger;
    let now = new Date().getTime();
    let elasped = now - start;
    this.timeUtility(elasped);
    
    // if (this.miliseconds === 1000) {
    //   ++this.seconds;
    //   secChange = true;
    //   this.miliseconds = 0;
    //   if (this.seconds === 60) {
    //     ++this.minutes;
    //     minChange = true;
    //     this.seconds = 0;
    //   }
    // }
    this.stringifyTime();
  }

  stringifyTime() {
    if (this.miliseconds < 10)
      this.timeArray[0] = `0${this.miliseconds}`;

    else
      this.timeArray[0] = this.miliseconds.toString();

  
    if (this.seconds < 10)
      this.timeArray[1] = `0${this.seconds}`;
    else
      this.timeArray[1] = this.seconds.toString();

    
    if (this.minutes < 10)
      this.timeArray[2] = `0${this.minutes}`;
    else
      this.timeArray[2] = this.minutes.toString();
  }

  timeUtility (elasped) {
    let utilSeconds = elasped / 1000;
    let utilMinutes = utilSeconds / 60;

    this.minutes = Math.floor(utilMinutes);
    let totalSecondsRemain = utilSeconds - this.minutes * 60;
    this.seconds = Math.floor(totalSecondsRemain);
    this.miliseconds = Math.floor((totalSecondsRemain - this.seconds) * 100);
  }
}

export const animalImages = {
  fauna: {
    artiodactyls: ["alpaca", "amazon-river-dolphin", "bactrian-camel", "bison", "boar", "cow",
      "damascus-goat", "giraffe", "hippo", "muntjac", "narwhal", "racka", "red-deer", "saigas",
      "siberian-musk-deer", "Sperm-whale"
    ],
    gastropods: ["abalone", "artic-moonsnail", "banana-slug", "blue-sea-dragon",
      "croatian-cave-snail", "green-snail", "hawaiian-reticulated-cowry", "leopard-slug",
      "ramshorn-snail", "roman-snail", "sea-angel", "sea-hare", "sheep-leaf-sea-slug",
      "sundial-snail", "two-spotted-keyhole-limpet", "white-lined-dirona"
    ]
  },

  flora: {
    asterids: ["basil", "brazil-nut-tree", "chili-peppers", "coffee", "common-daisy", "eggplant",
      "honey-suckle", "lavendar", "lettuce", "lilac", "morning-glory", "petunia", "rhododendron",
      "sesame", "sunflower", "sweet-potato"
    ]
  },

  fungi: {
    agaricomycetes: ["blue-oyster", "button", "chlorophos", "death-cap", "devil-tooth", 
      "earth-star", "earthball", "fly-agaric", "golden-oyster", "lion-mane", "psilocybin",
      "ramaria", "shaggy-mane", "stink-horn", "turkey-tail", "wood-ear"
    ]
  }
}
