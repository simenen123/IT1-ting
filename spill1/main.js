random_sentences_list = ["Everyone was busy, so I went to the movie alone.",
"25 years later, she still regretted that specific moment.",
"I'm not a party animal, but I do like animal parties.",
"The urgent care center was flooded with patients after the news of a new deadly virus was made public.",
"I'm worried by the fact that my daughter looks to the local carpet seller as a role model.",
"She couldn't decide of the glass was half empty or half full so she drank it.",
"She had the gift of being able to paint songs.",
"I am never at home on Sundays.",
"I caught my squirrel rustling through my gym bag.",
"She had a difficult time owning up to her own crazy self.",
"Dan took the deep dive down the rabbit hole.",]

function get_random_sentence(){
    let random_index = Math.floor(Math.random() * 10);
    document.getElementById("random_sentence").innerHTML = random_sentences_list[random_index]
}

get_random_sentence()

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);