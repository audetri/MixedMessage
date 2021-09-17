console.log("Hello");
let time = ['Today', 'Yesterday', 'Tomorrow', 'Next month'];
let verb = ['will be', 'could be', 'may be'];
let compl =['fortunate', 'dangerous', 'promising', 'sad'];

const sentence = {
    S1: time[Math.floor(Math.random()*time.length)],
    S2: verb[Math.floor(Math.random()*verb.length)],
    S3: compl[Math.floor(Math.random()*compl.length)]
};

let phrase = `${sentence.S1} ${sentence.S2} ${sentence.S3}`
 console.log(phrase);