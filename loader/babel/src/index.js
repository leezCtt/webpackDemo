import "@babel/polyfill"

const arr = [
    new Promise( () => {} ),
    new Promise( () => {} ),
    new Promise( () => {} ),
    new Promise( () => {} ),
    new Promise( () => {} )
]

arr.map(
    i => console.log(i)
)