const products = [
    { id: 1, name: 'laptop', price: 40000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }
]
products.forEach(product => console.log(product.id))
products.forEach(product => console.log(product.name))
products.forEach(product => console.log(product.price))

products.forEach(product => console.log(product.id, product.name, product.price))

const friends = ["Tom Hanks", "Tom Cruise", "Tom Brady", "Tom Solaiman"];
friends.forEach(friend => console.log(friend));