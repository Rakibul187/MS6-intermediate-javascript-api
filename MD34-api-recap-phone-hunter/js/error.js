fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))

try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
catch {

}




// console.log(1)
// setTimeout(() => {
//     console.log(5)
// }, 3000);
// console.log(2)