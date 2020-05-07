/***************************
 * Chapter: 1
 ***************************/


/*
//Problem 1
let str = "Bangladesh is a Beutiful Country";
 
function wordCount(str) {
    var count = 0;
    for(let i = 0; i < str.length; i++) {
        
        if(str[i] == " " && str[i-1] != " ") {
            count++;
        }
    }
    return count + 1;
}

let count = wordCount(str)
//console.log(count);
*/


/*
//Problem 2
function sentenceCount(boktrita) { 
    var count = 0;
    
    for(var i = 0; i < boktrita.length; i++) {
        if(boktrita[i] == '.' || boktrita[i] == '?' || boktrita[i] == '!' && boktrita[i-1] != '!') {
        count++;
        }
    }
    return count;
}
    
let x = sentenceCount("agami eid er por andolon hobe. rajpath gorom hobe! songram hobe hove naki? jodi hoy!!!!");
console.log(x);
*/


/***************************
 * Chapter: 2
 ***************************/

/*
let names = ['alu', 'balu', 'alu', 'delu', 'balu', 'kalu', 'kalu', 'molu', 'delu', 'tulu'];
let num = [1, 2, 3, 4, 2, 3, 1, 4, 5, 8, 9, 5, 6, 9, 8, 6, 7, 7]

function removeDuplicate(names) {
    let selected = [];

    for(let i = 0; i < names.length; i++) {
        let name = names[i];

        if(selected.indexOf(name) == -1) {
            selected.push(name);
        }
    }
    return selected;
}

let result = removeDuplicate(num);

console.log(result);
*/



/*
let str = 'Bangladesh is a Beutiful Country. I love My Country';

function removeDuplicate() {
    let selectedStr = "";

    for(let i = 0; i < str.length; i++) {
        if(selectedStr.indexOf(str[i]) == -1) {
            selectedStr += str[i];
        }
    }
    return selectedStr;
}
let result = removeDuplicate(str);
console.log(result);
*/



/*
let names = ['alu', 'balu', 'alu', 'delu', 'balu', 'kalu', 'kalu', 'molu', 'delu', 'tulu'];

function removeDouble(names) {
    let selected = [];

    for(let i = 0; i < names.length; i++) {
        let name = names[i];

        if(names.indexOf(name) == names.lastIndexOf(name)) {
            selected.push(name)
        }
    }
    return selected;
}

let result = removeDouble(names);

console.log(result);
*/


/*
let names = ['alu', 'balu', 'delu', 'balu', 'kalu', 'balu', 'balu', 'alu', 'kalu', 'bulu', 'alu', 'kalu', 'molu', 'delu', 'tulu'];

function getOddTimesRepeated(names){
    var uniqueNames = [ ];
    var output = [];
    var nameCount = {};

    for(var i = 0; i < names.length; i++){
            var name = names[i];
            if(uniqueNames.indexOf(name) == -1){
                uniqueNames.push(NamedNodeMap);
                nameCount[name] = 1;
            } 
            else{
                nameCount[names[i]] = nameCount[name] +1;
            } 
    }
    console.log(nameCount);
    console.log(uniqueNames);
    
    for(var i = 0; i < uniqueNames.length; i++){
        var name = names[ i ];
        if(nameCount[name]%2!=0){
            output.push(name);
        }
    }
    return output;
}
let result = getOddTimesRepeated(names);


console.log(result);
*/


/*
let arr = [5, 1, 15, -5, 16, 12, 14];
function selectionSort(arr){
    var minIdx;
      var temp;
  
    for(var i = 0; i < arr.length; i++){
      minIdx = i;
      for(var  j = i+1; j < arr.length; j++){
         if(arr[j] < arr[minIdx]){
            minIdx = j;
         }
      }
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    return arr;
  }

let res = selectionSort(arr)

console.log(arr);
*/






/***************************
 * Chapter: 3
 ***************************/
/*
let word = "adhara amin Bangladesh";

function reverse(word) {
    let reverseWord = "";

    for(let i = word.length-1; i >= 0; i--) {
        let letter = word[i];
        reverseWord += letter;
    }

    return reverseWord;
}
let res = reverse(word);
console.log(res);
*/

/*
let isPalindrom = function(word) {
    if(word[0] === word[word.length-1] && word[1] === word[word.length-2]) {
        return '"' + word + '"' + " is Palindrom";
    } else {
        return word + " is not Palindrom";
    }
}

let result = isPalindrom("rotator");
console.log(result);
*/



/*
let palindrom = function(word) {
    let reverse = "";
    for(let i = word.length-1; i >= 0; i--) {
        reverse += word[i];
    }
    if(reverse === word) {
        return `"${word}" is palindrom`;
    } else {
        return `"${word}" is not palindrom`;
    }
}
let result2 = palindrom("civic");
console.log(result2);
*/


/*
let palindrom3 = function(word) {
    let reverse = word.split("").reverse().join("");
    console.log(reverse);
    
    if(reverse === word) {
        return `"${word}" is palindrom`;
    } else {
        return `"${word}" is not palindrom`;
    }
}
let result3 = palindrom3("civic");
console.log(result3);

console.log(reverse("momota"));
*/

/*

let word = "i am a good boy";

let reverseWord = "";
let words = word.split(" ");


for(let i = words.length-1; i >= 0; i--) {
    let letter = words[i];
    console.log(letter);

    reverseWord += " " + letter;
}
console.log(reverseWord);
*/

/* 
let str = "i am a good boy";
let words = str.split(" ");
let store = "";

for(let i = 0; i < words.length; i++) {
    let word = words[i];
    store += reverse(word) + " "; 
}

console.log(store);



function reverse(word) {
    let reversed = "";
    for(let i = word.length-1; i >= 0; i--) {
        reversed += word[i]
    }
    return reversed;
}
console.log(reverse("word"));
*/




/***************************
 * Chapter: 7
 ***************************/
/*
    ****** Singly Linked list ******

class Node {
    constructor(value) {
        this.value = value;
        this.next;
    }
}

class Lindeklist {
    constructor(head) {
        this.head = head;
    }
    add(newNode) {
        var currentNode = this.head;
        while(currentNode.next != undefined) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        
    }
}

var head = new Node("Kottipokkho");
var manobbondon = new Lindeklist(head);

var amader = new Node("Amader");
    manobbondon.add(amader);

var pant = new Node("Pant");
    manobbondon.add(pant);

var dila = new Node("Dila");
    manobbondon.add(dila);

var kano = new Node("Kano?");
    manobbondon.add(kano);

console.log(manobbondon);
*/




/*
    ****** Doubly Linked list ******

class Node {
    constructor(value) {
        this.value = value;
        this.next;
        this.prev;
    }
}

class DoublyLindekList {
    constructor(head) {
        this.head = head;
    }

    add(newNode) {
        var head = this.head;
        var current = head;
        var prev = head;

        while(current.next != undefined) {
            prev = current;
            current = current.next;
        }
        current.next = newNode;
        current.prev = prev;
    }
}

var head = new Node("Kottipokkho");
var double = new DoublyLindekList(head);

var amader = new Node("Amader");
double.add(amader);

var pant = new Node("Pant");
double.add(pant);

var dila = new Node("Dila");
double.add(dila);

var kano = new Node("Kano?");
double.add(kano);

console.log(double);
  
*/




/***************************
 * Chapter: 
 ***************************/
/*

    ****** Inheritance ******

class Vehicle {
    constructor(driver, wheels) {
        this.driver = driver;
        this.wheels = wheels;
    }
}

class Bus extends Vehicle {
    constructor(driver, wheels, seat) {
        super(driver, wheels);
        this.seat =seat;
    }
}

class Truck extends Vehicle {
    constructor(driver, wheels, capacity) {
        super(driver, wheels);
        this.capacity = capacity;
    }
    print() {
        return this.driver + " is a Truck Driver";
    }
}


let res = new Vehicle("salammod", 6);
console.log(res);

let res2 = new Bus("salammod", 6, 50);
console.log(res2);

let res3 = new Truck("Salammod", 8, 25 + "Ton");
console.log(res3);

let res4 = res3.print();
console.log(res4);
*/




/*

    ****** *** ******

   class Bird{
    constructor(age) {
   }
   sing(){
            console.log("pakhi gaan gai");
   }
}


class Crow extends Bird{
    constructor(age) {
            super();
   }
   sing(){
            console.log("Ka Ka Ka");
   }
}

class Cukkoo extends Bird{
    constructor(age) {
            super();
   }
   sing(){
            console.log("Ku Ku Ku");
   }
}

class Parrot extends Bird{
    constructor(age) {
            super();
   }
}


var birds = [];

var kak = new Crow();
birds.push(kak);

var kokil = new Cukkoo();
birds.push(kokil);

var tiya = new Parrot();
birds.push(tiya);

for(var i = 0; i < birds.length; i++){
  var bird = birds[i];
  bird.sing();
}
 */


/*
class Store {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.prices = {};
    }

    isItemAvailable(name) {
        let itemIndex = this.items.indexOf(name);
        if(itemIndex == -1) {
            return false;
        } else {
            return true;
        }
    }

    getPrice(name) {
        let isAvailable = this.isItemAvailable(name);
        if(isAvailable == true) {
            let itemPrice = this.prices[name];
            return itemPrice;
        } else {
            return `${name} is Not Available`
        }
    }

    additems(name, price) {
        this.items.push(name);
        this.prices[name] = price;
    }
}




let habluStore = new Store("Hablu Fashion House");
    habluStore.additems("Shirt", 300);
    habluStore.additems("Pant", 200);

console.log(habluStore);
console.log(habluStore.prices.Shirt);
console.log(habluStore.getPrice("Shirt"));

console.log(habluStore.isItemAvailable("Shirt"));



*/



let obj = {};
function oop(name, price) {
    obj[name] = price;
}

oop("alu", 30);
oop("bagun", 40);

console.log(obj);






















