const standardizedInput = (collection) => {
    return (collection.isArray) ? collection.splice() : Object.values(collection);
}

const myEach = (collection, callback) => {
    const newCollection = standardizedInput(collection);
    newCollection.forEach(element => callback(element));
    return collection;
}

const myMap = (collection, callback) => {
    const newCollection = standardizedInput(collection);
    const newArray = [];
    newCollection.forEach(element => newArray.push(callback(element)));
    return newArray;
    }

const myReduce = (collection, callback, accum) => {
    let newCollection = standardizedInput(collection);
    if(!accum) {
        accum = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    newCollection.forEach((element) => {
        accum = callback(accum, element, newCollection);
    })

    return accum;
}

const myFind = (collection, predicate) => {
    let newCollection = standardizedInput(collection);

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            return newCollection[i];
        }
    }

    return undefined;
}

const myFilter = (collection, predicate) => {
    let newCollection = standardizedInput(collection);

    let newArray = [];

    newCollection.forEach((element) => {
        if (predicate(element)) {
            newArray.push(element);
        }
    })

    return newArray;
}

const mySize = collection => {
    let newCollection = standardizedInput(collection);

    return newCollection.length;
}

const myFirst = (array, n) => {
    if (n) {
        return array.slice(0, n);
    }
    return array[0];
}

const myLast = (array, n) => {
    if (n) {
        return array.slice(-n);
    }
    return array[array.length - 1];
}

const mySortBy = (array, callback) => {
    let newArray = Object.assign([], array);
    return newArray.sort((a, b) => {
        if (callback(a) > callback(b)) {
            return 1;
        } else if (callback(b) > callback(a)) {
            return -1;
        } else {
            return 0;
        }
    })
}

const myFlatten = (array, shallow, newArray=[]) => {
    if (shallow) {
        for (const element of array) {
            if (Array.isArray(element)) {
                for (const value of element) {
                    newArray.push(value);
                }
            } else {
                newArray.push(element);
            }
        }
    } else {
        for(const element of array) {
            if (Array.isArray(element)) {
                myFlatten(element, false, newArray);
            } else {
                newArray.push(element);
            }
        }
    }
    return newArray;
}

const myKeys = (object) => {
    const keys = [];
    for (const key in object) {
        keys.push(key);
    }
    return keys;
}

const myValues = (object) => {
    const values = [];
    for (const key in object) {
        values.push(object[key]);
    }
    return values;
}