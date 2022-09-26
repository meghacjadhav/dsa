let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define your class here
// your class name should be 'Movie' and method names as 'certify' and 'run'
class Movie {
  cert;
  constructor(lengthInMinutes, numCharacters, language) {
    this.lengthInMinutes = lengthInMinutes;
    this.numCharacters = numCharacters;
    this.language = language;
  }
  run() {
    this.cert = this.certify();
    if (this.cert) {
      return `This is a ${this.language} movie with ${this.numCharacters} characters, is ${this.lengthInMinutes} minutes long and is certified.`;
    } else {
      return `This is a ${this.language} movie with ${this.numCharacters} characters, is ${this.lengthInMinutes} minutes long and is not certified.`;
    }
  }
  certify() {
    if (this.numCharacters >= 2 && this.lengthInMinutes <= 240) {
      return true;
    } else {
      return false;
    }
  }
}
// DO NOT CHANGE ANYTHING BELOW THIS LINE

let language = readLine();
let numCharacters = parseInt(readLine());
let lengthInMinutes = parseInt(readLine());

let movie = new Movie(lengthInMinutes, numCharacters, language);
console.log(movie.run());
