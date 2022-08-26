const name = 'rakib';
const prof = 'bekaar';
const age = 24;

// without template string (``)
const sentence = "amer name" + name + "\n boyos" + age + "\n ami bekar " + prof;
console.log(sentence);

// with template literal (``) & placeholder ${}
const sentence2 = `amer name ${name}
amer boyos ${age}
ami bekar ${prof}`

console.log(sentence2)