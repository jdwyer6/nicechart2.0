var jokes = ["Why couldn't the string quartet find their composer? He was Haydn.", 
"What is Beethoven's favourite fruit? 'Ba-na-na-naaaaa'", 
"There are so many jokes about this composer. I could make you a Liszt.",
"Why didn't Handel go shopping? Because he was Baroque.",
"Why didn't the bouncer let the quavers into the bar? Because they were slurring.",
"How do you fix a broken brass instrument? With a tuba glue.",
"What do you get when you drop a piano down a mine shaft? A flat minor.",
"How can you tell if a singer's at your door? They can't find the key and don't know when to come in.",
"What's the difference between a viola and an onion? No one cries when you cut up a viola.",
"Middle C, E flat and G walk into a bar. 'Sorry,' the barman said. 'We don't serve minors.'"
];

function joke() {
    var index = Math.floor(Math.random(jokes.length) * 10);
    console.log(index);
    document.getElementById("joke").innerHTML = jokes[index];
}

joke();