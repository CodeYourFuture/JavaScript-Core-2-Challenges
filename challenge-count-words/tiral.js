let teacher = {
  name: "Hadiyah Lawal",
  teaching: ["HTML", "CSS"],
  sayHello: function () {
    let msg = this.name + " teaches ";
    this.teaching.map(function (course) {
      msg += course + " ";
    });
    return msg;
  },
};

//console.log(teacher.sayHello());

let body = {
  head: "big",
  eyes: 2,
  sex: "male",
  thinLips: true,
};

//console.log("Legs in body?", 'legs' in body);
let bodyParts = [];
for (let part in body) {
  bodyParts.push(part);
}
// console.log(bodyParts)

// console.log(Object.keys(body));

let sentence = "The big brown fox jumped over the brown high fence";

//console.log(arrOfWords);

function countWords(sentence) {
    if(wordCount === "") {
        return wordCount;
    }
  let arrOfWords = sentence.split(" ");
  let wordCount = {};
  arrOfWords.forEach((word) => {
    if (!wordCount.hasOwnProperty(word)) {
      wordCount[word] = 1;
    } else {
      wordCount[word] += 1;
    }
  });
 // console.log(wordCount);
  return wordCount;
}

//console.log(countWords(sentence));
let punctuations = /[!\",;:.']/g;
let senString =
  "While DeGeneres! herself has: not bee'n personally; accused of mistreating staff, she said in a statement that, as the, face of the show, she took “full responsibility” for the situation.";
let newString = senString.replace(punctuations, "");
console.log(newString);
