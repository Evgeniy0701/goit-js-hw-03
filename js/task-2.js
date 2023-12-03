function makeArray(firstArray, secondArray, maxLength) {
    // Об'єднуємо елементи з обох масивів
    const newArray = firstArray.concat(secondArray);

    // Перевіряємо, чи перевищує довжина нового масиву maxLength
    if (newArray.length > maxLength) {
        // Якщо так, повертаємо копію масиву з довжиною maxLength
        return newArray.slice(0, maxLength);
    }

    // В іншому випадку повертаємо весь новий масив
    return newArray;
}

// Перевірка роботи функції
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []