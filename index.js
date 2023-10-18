const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cats) {
    console.log("destructivelyAppendCat:", cats);
}
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
    const newArray = cats.slice();
    newArray.push(name)
    return newArray
}
function prependCat(name) {
    const newArray = cats.slice();
    newArray.unshift(name)
    return newArray
}
function removeLastCat(name) {
    const cats = [
        'Milo',
        'Otis', 
        'Garfield'
        ];
    const newArray = cats.splice(name);
    newArray.pop(name)
    return newArray
}
function removeFirstCat(name) {
    const cats = [
        'Milo',
        'Otis', 
        'Garfield'
    ];
    const newArray = cats.slice(0, name);
    newArray.shift(name)
    return newArray
}