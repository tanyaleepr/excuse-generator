var NumberOfWords = 50;
var words = new BuildArray(NumberOfWords);

// Use the following variables to 
// define your random words:
words[1] = "I went to a family reunion and my cousin tested positive for covid"
words[2] = "My daughter is pregnant 🤰"
words[3] = "I have Karate competition in 'All-Valley'"
words[4] = "I have to replace Alfred"
words[5] = "The psychic told me that my grandmother was dying that same day"
words[6] = "A firecracker blew up my neighbor's buttocks and I'm taking care of him in the hospital"
words[7] = "At last Jacinto let go of my cow and I'm going to pick her up"
words[8] = "I have to beat Cobra Kai 🥋"
words[9] = "I'll be right back, my beans are burning"
words[10] = "Life is short ⌛"
words[11] = "With this economy? Hmmm, I pass"
words[12] = "Gas prices are way too high for this"
words[13] = "Crime is so high that it stole my energy to go work"
words[14] = "I have to take my parents to the airport and wait there till they return"
words[15] = "I have to babysit my cousin because my aunt's friend died"
words[16] = "I have to walk my dishes"
words[17] = "I received a call from Ariel, something about a fork..."
words[18] = "I cannot make it, I- I died. I'm in my coffin as we speak"
words[19] = "Baby grandma told me not to"
words[20] = "I can't make it, my car dehydrated"
words[21] = "I have food poisoning"
words[22] = "My grandmother just passed away"
words[23] = "I have a family emergency"
words[24] = "My mom is giving birth"
words[25] = "My mom told me that my only duty for today is to walk the fish"
words[26] = "My grandpa is not feeling well, and I'm the only one taking care of him"
words[27] = "My cousin is getting baptized and my mom want us all there"
words[28] = "I woke up in Nigeria"
words[29] = "I can't find my eyeglasses"
words[30] = "I can't find my phone"
words[31] = "My hamster died"
words[32] = "Oh, was that tonight?"
words[33] = "(Just start crying)"
words[34] = "I can't make it, in my religion, that day/today is a holiday"
words[35] = "Marie Laveau told me to stay at home and do a cleanese"
words[36] = "I have Jury Duty"
words[37] = "My child is sick"
words[38] = "Sorry, my phone died"
words[39] = "My bank blocked my accounts, cannot get money out"
words[40] = "I haven't showered today, there is no water in my place"
words[41] = "I had a nightmare about that day, I rather stay home and be safe"
words[42] = ""
words[43] = ""
words[44] = ""
words[45] = ""
words[46] = ""
words[47] = ""
words[48] = ""
words[49] = ""
words[50] = ""



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