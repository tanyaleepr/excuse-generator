var NumberOfWords = 9;
var words = new BuildArray(NumberOfWords);

// Use the following variables to 
// define your random words:
words[1] = "Fui a una reunión familiar y mi primo salió positivo a covid."
words[2] = "Mi hija está embarazada 🤰"
words[3] = "Tengo competencia de Karate en 'All-Valley'"
words[4] = "Me toco sustituir a Alfred."
words[5] = "La psíquica me dijo que ese mismo día se me moría mi abuela."
words[6] = "Le reventó un petardo en las nalgas a mi vecino y lo estoy cuidando en el hospital."
words[7] = "Al fin Jacinto soltó mi vaca y la voy a recoger."
words[8] = "Tengo que vencer a Cobra Kai"
words[9] = "vengo ahora, se me queman las habichuelas"
// words[10] = ""
// words[11] = ""
// words[12] = ""


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}