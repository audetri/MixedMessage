console.log("Hello");

//declare the compnents of the sentence in sevral arrays
let time = ['Today', 'Yesterday', 'Tomorrow', 'Next month'];
let verb = ['will be', 'could be', 'may be'];
let compl =['fortunate', 'dangerous', 'promising', 'sad'];

//Define an object which keys are made of the different components
const sentence = {
    S1: time[Math.floor(Math.random()*time.length)],
    S2: verb[Math.floor(Math.random()*verb.length)],
    S3: compl[Math.floor(Math.random()*compl.length)]
};

//Define a string taht concatenates the keys of the defined object
let phrase = `${sentence.S1} ${sentence.S2} ${sentence.S3}`
//Print the string 
console.log(phrase);
console.log(`%c ________________________________________
< mooooooooooooooooooooooooooooooooooooo >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")