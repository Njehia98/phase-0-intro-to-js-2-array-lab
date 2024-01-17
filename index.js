// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
 cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCatsArray = [...cats, name];
    return newCatsArray;
}

function prependCat(name) {
    const firstCatsArray = [name, ...cats]
    return firstCatsArray
}

function removeLastCat() {
    const removingLastCat = cats.slice(0, -1)
    return removingLastCat
}

function removeFirstCat() {
    const removingFirstCat = cats.slice(1)
    return removingFirstCat
}