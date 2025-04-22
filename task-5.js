const users = [
    { name: "Samir", age: 17, height: 181},
    { name: "Dima", age: 18, height: 182},
    { name: "Kostek", age: 17, height: 168},
];
    
const getAllPropValues = (arr, prop) => {
    const newArr = [];
    for (const obj of arr) {
        if (obj.hasOwnProperty(prop)) {
            newArr.push(obj[prop]);
        }
    }
    return newArr;
}
console.log(getAllPropValues(users, "name"));
console.log(getAllPropValues(users, "age"));
console.log(getAllPropValues(users, "height"));