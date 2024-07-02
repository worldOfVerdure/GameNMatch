 export class GameData {
  constructor() {
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

export const timerData = {
  minutes: 0,
  seconds: 0,
  miliseconds: 0,
  intervalID: 0,
};

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
