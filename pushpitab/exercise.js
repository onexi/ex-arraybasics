var exercise = {};

exercise.change = function() {

    var fruits = ['Apple', 'Banana', 'Pear', 'Orange'];

    // change the first element 'Apple' to 'Mango'
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	
    fruits[0]='Mango';
    console.log("change "+ fruits);
    return fruits;

};

exercise.length = function() {

    var fruits = ['Apple', 'Banana', 'Pear', 'Orange'];
    var length = fruits.length;
    console.log("Length : "+length);

    // get the length of the fruits array
    // assign length to "length" variable
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	

    return length;
};

exercise.concatenate = function() {
    var list = ['It', 'was', 'the', 'best', 'of', 'times', 'it', 'was', 'the', 'worst', 'of', 'times'];
    //var text = '';
    var text = list.join(" ");
    console.log("text"+text);
    // contatenate list of words
    // assign contatenated text to "text" variable
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	

    return text;
};


exercise.addToEnd = function() {

    var fruits = ['Banana', 'Pear', 'Orange'];

    // add "Mango" to the end of the fruits array
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	
    fruits.push('Mango');
    console.log("Push : "+fruits);
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
    fruits.pop();
    console.log("pop "+fruits);
    return fruits;
};

exercise.deleteFirst = function() {

    var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];

    // delete the first element of an array 'Banana'
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	
    //fruits.shift();
    delete fruits[0];
    console.log("shift "+fruits);
    return fruits;
};

exercise.insert = function() {

    var fruits = ['Banana', 'Orange', 'Mango'];

    // insert an element 'Pear' after the first element 'Banana' in an array
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	

    return fruits;
};

exercise.concat = function() {

    var fruit1 = ['Banana', 'Pear'];
    var fruit2 = ['Orange', 'Mango'];

    var fruits=fruit1.concat(fruit2);
    // concat two arrays fruit1 and fruit2 int array fruits
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------	
    console.log("concat  "+fruits);
    return fruits;
};

exercise.sortAlphabetically = function() {

    var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];

    // sort an array alphabetically
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------
    fruits.sort();
    console.log(" Alphabetic sort  "+fruits);
    return fruits;
};

exercise.reverseSort = function() {

    var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];

    // sort an array in a reversed alphabetical order
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------
    fruits.sort();            // Sorts the elements of fruits 
    fruits.reverse();         // Reverses the order of the elements
    return fruits;
};

// share work
module.exports = exercise;
