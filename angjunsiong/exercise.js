var exercise = {};

exercise.change = function() {

    var fruits = ['Apple', 'Banana', 'Pear', 'Orange'];

    // change the first element 'Apple' to 'Mango'
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	

    fruits[0]='Mango';

    return fruits;

};

exercise.length = function() {

    var fruits = ['Apple', 'Banana', 'Pear', 'Orange'];
    var length = 0;

    // get the length of the fruits array
    // assign length to "length" variable
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	

    length = fruits.length

    return length;
};

exercise.concatenate = function() {
    var list = ['It', 'was', 'the', 'best', 'of', 'times', 'it', 'was', 'the', 'worst', 'of', 'times'];
    var text = '';

    // contatenate list of words
    // assign contatenated text to "text" variable
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	

    text = list.join(" ")

    return text;
};


exercise.addToEnd = function() {

    var fruits = ['Banana', 'Pear', 'Orange'];

    // add "Mango" to the end of the fruits array
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	

    fruits.push("Mango");

    return fruits;
};

exercise.addToBegin = function() {

    var fruits = ['Banana', 'Pear', 'Orange'];

    // add 'Mango' to the beginning of an array
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	
    
    fruits.unshift("Mango");

    return fruits;
};

exercise.deleteLast = function() {

    var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];

    // delete the last element of an array 'Mango'
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	
    
    fruits.pop()

    return fruits;
};

exercise.deleteFirst = function() {

    var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];

    // delete the first element of an array 'Banana'
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	

    fruits.shift()

    return fruits;
};

exercise.insert = function() {

    var fruits = ['Banana', 'Orange', 'Mango'];

    // insert an element 'Pear' after the first element 'Banana' in an array
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	

    fruits.splice(1,0,"Pear")

    return fruits;
};

exercise.concat = function() {

    var fruit1 = ['Banana', 'Pear'];
    var fruit2 = ['Orange', 'Mango'];

    var fruits;
    // concat two arrays fruit1 and fruit2 int array fruits
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	
    
    fruits = fruit1.concat(fruit2);

    return fruits;
};

exercise.sortAlphabetically = function() {

    var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];

    // sort an array alphabetically
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------

    fruits.sort();

    return fruits;
};

exercise.reverseSort = function() {

    var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];

    // sort an array in a reversed alphabetical order
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------

    return fruits;
};

// share work
module.exports = exercise;
