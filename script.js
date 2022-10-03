// Output can be seen on the browser as well as on console tool also
// Task 1 is completed 

document.getElementById("output").innerHTML += "<h3>Task 1:</h3><p>It was about downloading VS code and Node Js</p>";

// Here is Task No 2

let name = "muhammad Zohaib mohsin";
console.log("Hello " + name + ",would you like to learn some python today?");
document.getElementById("output").innerHTML += "<h3>Task 2:</h3><p>\"Hello " + name + ",would you like to learn some python today?\"</p>";

// Task No 3


document.getElementById("output").innerHTML += "<h3>Task 3:</h3>";
document.getElementById("output").innerHTML += "<p>Name = muhammad Zohaib mohsin</p>";
console.log(name.toLowerCase());
document.getElementById("output").innerHTML += "<p>In Lower Case : " + name.toLowerCase() + "</p>";
console.log(name.toUpperCase());
document.getElementById("output").innerHTML += "<p>In Upper Case : " + name.toUpperCase() + "</p>";
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(toTitleCase(name));
document.getElementById("output").innerHTML += "<p>In Title Case : " + toTitleCase(name) + "</p>";


// Task No 4


document.getElementById("output").innerHTML += "<h3>Task 4:</h3>";
console.log("Albert Einstein once said, \“A person who never made a mistake never tried anything new.\”");
document.getElementById("output").innerHTML += "<p>Albert Einstein once said, \“A person who never made a mistake never tried anything new.\”</p>";


//   Task No 5


document.getElementById("output").innerHTML += "<h3>Task 5:</h3>";
let famous_person = "Dj";
let message = "\"Something said by the person wisely and is important piece of information for others also\"";
console.log(famous_person + ' once said,' + message);
document.getElementById("output").innerHTML += "<p>" + famous_person + ' once said,' + message + "</p>";


// Task No 6


document.getElementById("output").innerHTML += "<h3>Task 6:</h3>";
let myStr = '      \n\n\n\n\n         Zohaib   \n\n\n\n      ';
document.getElementById("output").innerHTML += "<b>Before:</b>" + "<pre>" + myStr + "</pre>";
let newStr = myStr.trim();
console.log('Before', myStr);
console.log('##############################');
console.log('After', newStr);
document.getElementById("output").innerHTML += "</br>" + "<b>After:</b>" + "<pre>" + newStr + "</pre>";

// Task No 7,8


document.getElementById("output").innerHTML += "<h3>Task 7,8:</h3>";
console.log("console.log('5+3')");
console.log(5 + 3);
var a = 5, b = 3;
document.getElementById("output").innerHTML += "<p style='border-bottom:2px solid grey;'>console.log(5+3)</br>" + (a + b) + "</p>";

console.log("console.log('9-1')");
console.log(9 - 1);
var a = 9, b = 1;
document.getElementById("output").innerHTML += "<p style='border-bottom:2px solid grey;'>console.log(9-1)</br>" + (a - b) + "</p>";

console.log("console.log('4*2')");
console.log(4 * 2);
var a = 4, b = 2;
document.getElementById("output").innerHTML += "<p style='border-bottom:2px solid grey;'>console.log(4*2)</br>" + (a * b) + "</p>";

console.log("console.log('16/2')");
console.log(16 / 2);
var a = 16, b = 2;
document.getElementById("output").innerHTML += "<p style='border-bottom:2px solid grey;'>console.log(16/2)</br>" + (a / b) + "</p>";


// Task No 9


document.getElementById("output").innerHTML += "<h3>Task 9:</h3>";
let fav_num = 123;
console.log("My favourite number is " + fav_num);
document.getElementById("output").innerHTML += "<p>My favourite number is " + fav_num + "</p>";

// Task No 10 of adding comments ..... Already Done
document.getElementById("output").innerHTML += "<h3>Task 10:</h3>";
document.getElementById("output").innerHTML += "<p>Task No 10 of adding comments into code..... Already Done</p>";


// Task No 11


document.getElementById("output").innerHTML += "<h3>Task 11:</h3>";
let names = ["Athar", "Shahzaib", "Abdullah", "Usama", "Husnain", "Hammad"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
document.getElementById("output").innerHTML += "Displaying Friends Name";
names.forEach((friend) => {
    document.getElementById("output").innerHTML += "<p>" + friend + "</p>";
});

// Task No 12
document.getElementById("output").innerHTML += "<h3>Task 12:</h3>";
document.getElementById("output").innerHTML += "Displaying Friends Name With Greeting";
function wishGreet() {
    names.forEach((friend) => {
        console.log(friend + " Bro you are my bestie");
        document.getElementById("output").innerHTML += "<p>" + friend + " Bro you are my bestie" + "</p>";
    });
}
wishGreet();

// Task No 13
document.getElementById("output").innerHTML += "<h3>Task 13:</h3>";
let vehicals = ["Car", "Jeep", "Tractor"];
document.getElementById("output").innerHTML += "Displaying Vehicals";
function callVehical() {
    vehicals.forEach((fourwheels) => {
        console.log("I would love to ride " + fourwheels)
        document.getElementById("output").innerHTML += "<p>" + fourwheels + " I would love to ride";
    });
}
callVehical();


// Task No 14


document.getElementById("output").innerHTML += "<h3>Task 14:</h3>";
document.getElementById("output").innerHTML += "<p><b>Before</b></p>";
console.log("Before");
let guests = ["Mr.Zia", "Mr.Danial", "Ma'am Hira"];
document.getElementById("output").innerHTML += "<ul>";
guests.forEach((specials) => {
    console.log("I would love to have a dinner with scholar like u " + specials);
    document.getElementById("output").innerHTML += "<li>I would love to have a dinner with scholar like u " + specials + "</li>";
});
document.getElementById("output").innerHTML += "</ul>";


// Task No 15


document.getElementById("output").innerHTML += "<h3>Task 15:</h3>";
console.log("Mr.Danial is in the center of list difficult to remove i'll try to remove it.");
document.getElementById("output").innerHTML += "Mr.Danial is in the center of list difficult to remove i'll try to remove it and add another name.";
guests.splice(1, 1);
guests.unshift("Mr.Zohaib");
console.log("After");
document.getElementById("output").innerHTML += "<p><b>After</b></p>";
document.getElementById("output").innerHTML += "<ul id='myList'>";
guests.forEach((specials) => {
    console.log("I would love to have a dinner with scholar like u " + specials);
    document.getElementById("output").innerHTML += "<li>I would love to have a dinner with scholar like u " + specials + "</li>";
});
document.getElementById("output").innerHTML += "</ul>";


// Task No 16


document.getElementById("output").innerHTML += "<h3>Task 16:</h3>";
document.getElementById("output").innerHTML += "We can invite few more guests";
guests.unshift("Mr. Abu Bakar");
guests.splice(2, 0, "Mr. Umar");
// document.getElementById("output").getElementsByTagName("ul").appendChild()
// const node = document.createElement("li");
// const textnode = document.createTextNode("Mr. Usman");
// node.appendChild(textnode);
// document.getElementsById("myList").appendChild(node);

document.getElementById("output").innerHTML += "<ul >";
guests.forEach((specials) => {
    console.log("I would love to have a dinner with scholar like u " + specials);
    document.getElementById("output").innerHTML += "<li>I would love to have a dinner with scholar like u " + specials + "</li>";
});
document.getElementById("output").innerHTML += "</ul>";


// Task No 17


document.getElementById("output").innerHTML += "<h3>Task 17:</h3>";
document.getElementById("output").innerHTML += "<ul>";
guests.filter((allies) => {
    if (allies === "Mr. Abu Bakar") {
        return document.getElementById("output").innerHTML += "<li>" + allies + " You are invited</li>";
    }
    if (allies === "Mr. Umar") {
        return document.getElementById("output").innerHTML += "<li>" + allies + " You are invited</li>";
    }
    else {
        return document.getElementById("output").innerHTML += "<li>" + "Sorry " + allies + " You are not invited</li>";
    }
})
document.getElementById("output").innerHTML += "</ul>";
guests.splice(0, guests.length);
document.getElementById("output").innerHTML += "<p>This array is empty now.</p>";
console.log(guests)


// Task No 18


document.getElementById("output").innerHTML += "<h3>Task 18:</h3>";
let places = ['Karachi', 'Peshawar', 'Islamabad', 'Lahore', 'Quetta'];
document.getElementById("output").innerHTML += "<p>Original Array</p>";
document.getElementById("output").innerHTML += "<ul id='second'>";
places.forEach((todo) => {
    document.getElementById("second").innerHTML += "<li>" + todo + "</li>";
})
document.getElementById("output").innerHTML += "</ul>";
let sorted = [...places].sort();
document.getElementById("output").innerHTML += "<p>Sorted Array</p>";
document.getElementById("output").innerHTML += "<ul id='third'>";
sorted.forEach((todo) => {
    document.getElementById("third").innerHTML += "<li>" + todo + "</li>";
})
document.getElementById("output").innerHTML += "</ul>";
document.getElementById("output").innerHTML += "<p>Original Array</p>";
document.getElementById("output").innerHTML += "<ul id='fourth'>";
places.forEach((todo) => {
    document.getElementById("fourth").innerHTML += "<li>" + todo + "</li>";
})
document.getElementById("output").innerHTML += "</ul>";

document.getElementById("output").innerHTML += "</ul>";
let reversed = [...places].reverse();
document.getElementById("output").innerHTML += "<p>Reversed Array</p>";
document.getElementById("output").innerHTML += "<ul id='rev'>";
reversed.forEach((todo) => {
    document.getElementById("rev").innerHTML += "<li>" + todo + "</li>";
})
document.getElementById("output").innerHTML += "</ul>";
document.getElementById("output").innerHTML += "<p>Again Reversed</p>";
document.getElementById("output").innerHTML += "<ul id='original'>";
reversed.reverse();
reversed.forEach((todo) => {
    document.getElementById("original").innerHTML += "<li>" + todo + "</li>";
})
document.getElementById("output").innerHTML += "</ul>";


// Task NO 20


document.getElementById("output").innerHTML += "<h3>Task 20:</h3>";
let favourite = ['Himaliyas', 'Nanga parbat', 'Hindu kush', 'Tirch Mir', 'Gowdon Auston'];


document.getElementById("output").innerHTML += "<ul id='fvList'>";
favourite.forEach((togo) => {
    document.getElementById("fvList").innerHTML += "<li>" + togo + "</li>";
})
document.getElementById("output").innerHTML += "</ul>";


// Task NO 21


document.getElementById("output").innerHTML += "<h3>Task 21:</h3>";
document.getElementById("output").innerHTML += "<p>It was about creating js object Now it's done.</p>";
let obgPrac = {
    favourite: ['Himaliyas', 'Nanga parbat', 'Hindu kush', 'Tirch Mir', 'Gowdon Auston'],
    places: ['Karachi', 'Peshawar', 'Islamabad', 'Lahore', 'Quetta']
}


// Task NO 22


document.getElementById("output").innerHTML += "<h3>Task 22:</h3>";
document.getElementById("output").innerHTML += "<p>It was about getting intensionally error Now it's done.</p>";


// Task NO 23


document.getElementById("output").innerHTML += "<h3>Task 23:</h3>";

// True Conditions

document.getElementById("output").innerHTML += "<h3 style='text-align: center;'>True Conditions</h3>";

var carComp = "toyota";
carComp == 'toyota' ? document.getElementById("output").innerHTML += "<p>It's Toyota which is true</p>" : document.getElementById("output").innerHTML += "<p>It's not toyota which is false</p>";

var carModel = "2022";
carModel == '2022' ? document.getElementById("output").innerHTML += "<p>It's 2022 which is true</p>" : document.getElementById("output").innerHTML += "<p>It's not 2022 which is false</p>";

var carCond = "new";
carCond == 'new' ? document.getElementById("output").innerHTML += "<p>It's new which is true</p>" : document.getElementById("output").innerHTML += "<p>It's not new which is false</p>";

var carCapa = "fiveseat";
carCapa == 'fiveseat' ? document.getElementById("output").innerHTML += "<p>It's five seater which is true</p>" : document.getElementById("output").innerHTML += "<p>It's not five seater which is false</p>";

var carCol = "black";
carCol == 'black' ? document.getElementById("output").innerHTML += "<p>It's black which is true</p>" : document.getElementById("output").innerHTML += "<p>It's not black which is false</p>";

// False Conditions

document.getElementById("output").innerHTML += "<h3 style='text-align: center;'>False Conditions</h3>";
var carComp = "toyota";
carComp == 'tota' ? document.getElementById("output").innerHTML += "<p>It's Toyota which is true</p>" : document.getElementById("output").innerHTML += "<p>It's not toyota which is false</p>";

var carModel = "2022";
carModel == '2021' ? document.getElementById("output").innerHTML += "<p>It's 2022 which is true</p>" : document.getElementById("output").innerHTML += "<p>It's not 2022 which is false</p>";

var carCond = "new";
carCond == 'old' ? document.getElementById("output").innerHTML += "<p>It's new which is true</p>" : document.getElementById("output").innerHTML += "<p>It's not new which is false</p>";

var carCapa = "fivseat";
carCapa == 'fiseat' ? document.getElementById("output").innerHTML += "<p>It's five seater which is true</p>" : document.getElementById("output").innerHTML += "<p>It's not five seater which is false</p>";

var carCol = "black";
carCol == 'red' ? document.getElementById("output").innerHTML += "<p>It's black which is true</p>" : document.getElementById("output").innerHTML += "<p>It's not black which is false</p>";


// Task NO 24


document.getElementById("output").innerHTML += "<h3>Task 24:</h3>";
let str1 = "Hello World";
let str2 = 'Bye World';

str1===str2?document.getElementById("output").innerHTML += "<p>Strings are equal</p>" : document.getElementById("output").innerHTML += "<p>Strings are not equal</p>";

let strInUp = "HELLO WORLD";
let strInLow = 'hello world';

strInLow.toLowerCase()===strInUp.toLowerCase()?document.getElementById("output").innerHTML += "<p>Strings are equal irrespect of case</p>" : document.getElementById("output").innerHTML += "<p>Strings are not equal irrespect of their case</p>";

let numGiven = 40
if(numGiven===50){
    document.getElementById("output").innerHTML += "<p>Number is 50</p>" 
}

if(numGiven>50){
    document.getElementById("output").innerHTML += "<p>Number is greater than 50</p>" 
}

if(numGiven<50){
    document.getElementById("output").innerHTML += "<p>Number is les than 50</p>" 
}

if(numGiven>=50){
    document.getElementById("output").innerHTML += "<p>Number maybe greater than and equal to 50</p>"
}
if(numGiven<=50){
    document.getElementById("output").innerHTML += "<p>Number maybe less than and equal to 50</p>"
}

//  A lot of arrays are declared above i'll use one of them

if(favourite.includes('Himaliyas')){
    document.getElementById("output").innerHTML += "<p>Part of Array</p>"
}
else{
    document.getElementById("output").innerHTML += "<p>Not part of the Array</p>"
}

if(favourite.includes('himaliyas')){
    document.getElementById("output").innerHTML += "<p>Part of Array</p>"
}
else{
    document.getElementById("output").innerHTML += "<p>Not part of the Array</p>"
}

// Part No 25


document.getElementById("output").innerHTML += "<h3>Task 25:</h3>";
var alien_color = 'green';
if(alien_color==="green"){
    document.getElementById("output").innerHTML += "<p>You just earned five points</p>"
}



// Part NO 26


document.getElementById("output").innerHTML += "<h3>Task 26:</h3>";
if(alien_color==="green"){
    document.getElementById("output").innerHTML += "<p>You just earned five points</p>"
}
else{
    document.getElementById("output").innerHTML += "<p>You just earned ten points</p>"
}
var alien_color = 'red';
if(alien_color==="green"){
    document.getElementById("output").innerHTML += "<p>You just earned five points</p>"
}
else{
    document.getElementById("output").innerHTML += "<p>You just earned ten points</p>"
}


// Part NO 27


document.getElementById("output").innerHTML += "<h3>Task 27:</h3>";
var alien_color = 'green';
if(alien_color==="green"){
    document.getElementById("output").innerHTML += "<p>You just earned five points</p>"
}
else if(alien_color == 'yellow'){
    document.getElementById("output").innerHTML += "<p>You just earned ten points</p>"
}
else if(alien_color == 'red'){
    document.getElementById("output").innerHTML += "<p>You just earned fifteen points</p>"
}
var alien_color = 'yellow';
if(alien_color==="green"){
    document.getElementById("output").innerHTML += "<p>You just earned five points</p>"
}
else if(alien_color == 'yellow'){
    document.getElementById("output").innerHTML += "<p>You just earned ten points</p>"
}
else if(alien_color == 'red'){
    document.getElementById("output").innerHTML += "<p>You just earned fifteen points</p>"
}
var alien_color = 'red';
if(alien_color==="green"){
    document.getElementById("output").innerHTML += "<p>You just earned five points</p>"
}
else if(alien_color == 'yellow'){
    document.getElementById("output").innerHTML += "<p>You just earned ten points</p>"
}
else if(alien_color == 'red'){
    document.getElementById("output").innerHTML += "<p>You just earned fifteen points</p>"
}

// Part NO 28


document.getElementById("output").innerHTML += "<h3>Task 27:</h3>";
var ageFinder = 25;

if(ageFinder <2){
    document.getElementById("output").innerHTML += "<p>The person is a baby</p>"
}
if(ageFinder>=2 && ageFinder<4){
    document.getElementById("output").innerHTML += "<p>The person is a Todder</p>"
}
if(ageFinder>=4 && ageFinder<13){
    document.getElementById("output").innerHTML += "<p>The person is a Kid</p>"
}
if(ageFinder>=13 && ageFinder<20){
    document.getElementById("output").innerHTML += "<p>The person is a Teenager</p>"
}
if(ageFinder>=20 && ageFinder<65){
    document.getElementById("output").innerHTML += "<p>The person is an Adult</p>"
}
else{
    document.getElementById("output").innerHTML += "<p>The person is an Elder</p>"
}


// Part NO 29


document.getElementById("output").innerHTML += "<h3>Task 29:</h3>";
let fav_fruits = ['Apple','Mango','Banana'];

if(fav_fruits.includes('Apple')){
    document.getElementById("output").innerHTML += "<p>I love apples</p>"
}
if(fav_fruits.includes('Pineapple')){
    document.getElementById("output").innerHTML += "<p>I love pineapples</p>"
}
if(fav_fruits.includes('Mango')){
    document.getElementById("output").innerHTML += "<p>I love mangoes</p>"
}
if(fav_fruits.includes('Grapes')){
    document.getElementById("output").innerHTML += "<p>I love grapes</p>"
}
if(fav_fruits.includes('Banana')){
    document.getElementById("output").innerHTML += "<p>I love bananas</p>"
}


// Part NO 30


document.getElementById("output").innerHTML += "<h3>Task 30:</h3>";
var listOfUsers = ['Ali','Ahmar','Admin','Ammar'];
listOfUsers.forEach((names)=>{
    if(names==='Admin'){
        document.getElementById("output").innerHTML += "<p>Hello "+ names +", would you like to see a status report.</p>"
    }
    else{
        document.getElementById("output").innerHTML += "<p>Hello "+ names +", Thank you for logging in again.</p>"
    }
})


// Part NO 31


document.getElementById("output").innerHTML += "<h3>Task 31:</h3>";
if(listOfUsers.length === 0){
    document.getElementById("output").innerHTML += "<p>We require users</p>"
}
else{
    document.getElementById("output").innerHTML += "<p>We have the users</p>"
}
listOfUsers.length = 0

document.getElementById("output").innerHTML += "<p><b>After empty an array</b></p>"
if(listOfUsers.length === 0){
    document.getElementById("output").innerHTML += "<p>We require users</p>"
}
else{
    document.getElementById("output").innerHTML += "<p>We have the users</p>"
}


// Part No 32


document.getElementById("output").innerHTML += "<h3>Task 32:</h3>";
let current_users = ['Ali','Ahmar','Amjad','Ammar','Anas'];
let new_users = ['Danish','Ahmar','ammar','danial','daud'];

new_users.forEach((ne)=>{
    var found = false;
      current_users.forEach((curr)=>{
       
         
         if(curr.toLowerCase()===ne.toLowerCase()){
             found = true;
             return;
       }
  
      })
      if(found === true){
        document.getElementById("output").innerHTML += "<p>"+ne+" Username is already in use</p>"
      }
      else{
        document.getElementById("output").innerHTML += "<p>"+ne+" Username is free to use</p>"
      }
      
})


// Part No 33


document.getElementById("output").innerHTML += "<h3>Task 33:</h3>";
let noList = [1,2,3,4,5,6,7,8,9];

noList.forEach((num)=>{
    if(num===1){
        document.getElementById("output").innerHTML += "<p>"+num+"st</p>"
    }
    else if(num===2){
        document.getElementById("output").innerHTML += "<p>"+num+"nd</p>"
    }
    else if(num===3){
        document.getElementById("output").innerHTML += "<p>"+num+"rd</p>"
    }
    else{
        
            document.getElementById("output").innerHTML += "<p>"+num+"th</p>"
       
    }
})


// Part No 34


document.getElementById("output").innerHTML += "<h3>Task 34:</h3>";
let pizzas = ['peproni','fajita','kabab'];
pizzas.forEach((title)=>{
    document.getElementById("output").innerHTML += "<p>"+title+" one of my favourite pizzas.</p>";
})
document.getElementById("output").innerHTML += "<p>Yah good but kinda junk food type instead of using this i would like to prefer healthy food just like fruits juices etc.....";


// Part No 35


document.getElementById("output").innerHTML += "<h3>Task 35:</h3>";
let pets=['dog','horse','buffalo'];
function statmnts(pet){
    if(pet == 'dog'){
        document.getElementById("output").innerHTML += "<p>"+pet+" a loyal pet.</p>";
    }
    else if(pet == 'horse'){
        document.getElementById("output").innerHTML += "<p>"+pet+" shows class.</p>";
    }
    else if(pet == 'buffalo'){
        document.getElementById("output").innerHTML += "<p>"+pet+" much useful.</p>";
    }
    }
pets.forEach(statmnts);


// Part No 36


document.getElementById("output").innerHTML += "<h3>Task 36:</h3>";
function make_shirt(size,msg){
    document.getElementById("output").innerHTML += "<p>"+size+" is the size of shirt."+msg+" is the msg should be printed on it</p>";
}
make_shirt("Large","I love javascript");


// Part No 37


document.getElementById("output").innerHTML += "<h3>Task 37:</h3>";
function make_shirt(msg,size="large"){
    document.getElementById("output").innerHTML += "<p>"+size+" is the size of shirt."+msg+" is the msg should be printed on it</p>";
}
make_shirt("I love javascript");


function make_shirt(size){
    if(size=="Large"){
    document.getElementById("output").innerHTML += "<p>"+size+" is the size of shirt. Love JS</p>";
    }
    else if(size=="Medium"){
        document.getElementById("output").innerHTML += "<p>"+size+" is the size of shirt. Love Python</p>";
        }
    else if(size=="Small"){
            document.getElementById("output").innerHTML += "<p>"+size+" is the size of shirt. Love C#</p>";
            }
}
make_shirt("Small");


// Part No 38


document.getElementById("output").innerHTML += "<h3>Task 38:</h3>";
function describe_cities(city,country="Pakistan"){
    document.getElementById("output").innerHTML += "<p>"+city+" is the city of "+country+"</p>";
}
describe_cities("Lahore");
describe_cities("Layyah");
describe_cities("Dehli","India");


// Part No 39


document.getElementById("output").innerHTML += "<h3>Task 39:</h3>";
function city_country(city,country="Pakistan"){
    document.getElementById("output").innerHTML += "<p>"+city+","+country+"</p>";
}
city_country("Lahore");
city_country("Layyah");
city_country("Dehli","India");


// Part No 40


document.getElementById("output").innerHTML += "<h3>Task 40:</h3>";
function make_album(artist,title,number){
number =number || null;
if(number === null){
    let album_obj = {
        artist_name : artist,
        album_title : title
    }
    return "<p> Artist:"+album_obj.artist_name +"</br>Title: "+album_obj.album_title+"</p>";
}
else{
    let album_obj = {
        artist_name : artist,
        album_title : title,
        album_number : number
    }    
    return "<p> Artist:"+album_obj.artist_name +"</br>Title: "+album_obj.album_title+"<br>Album Number: "+album_obj.album_number+"</p>";  
}


}
document.getElementById("output").innerHTML += "<p>"+make_album("Ali","Nothing",20)+"</p>";
document.getElementById("output").innerHTML += "<p>"+make_album("JOhn","Rock")+"</p>";


// Task NO 41


document.getElementById("output").innerHTML += "<h3>Task 41:</h3>";
let mags=["John",'Peter','Williams',"Aurthur"];
function show_names(show){
show.forEach((name)=>{
    document.getElementById("output").innerHTML += "<p>"+name+"</p>";
})
}
show_names(mags);


// Task NO 42,43


document.getElementById("output").innerHTML += "<h3>Task 42,43:</h3>";
let copies = [];
function make_great(show){

    var i=0;
    show.forEach((name)=>{
        
        copies[i]=name +" The Great";
        i++;
    })
}
make_great(mags);
show_names(copies);
document.getElementById("output").innerHTML += "<p><b>While the original array is unchanged</b></p>";
show_names(mags);


// Task NO 44


document.getElementById("output").innerHTML += "<h3>Task 44:</h3>";
let sandwich = ["Bread","Eggs","Sauces"];
function display(items,num){
    num=num || null
    if(num ===null){
    var sttr=items.toString();
    document.getElementById("output").innerHTML += "<p>"+sttr+" should be added in the sandwich</p>";
    }
    else{
        var sttr=items.toString();
        document.getElementById("output").innerHTML += "<p>"+sttr+" should be added in the sandwich."+num+" will be the num of sandwiches</p>";
        }
}
display(sandwich,5);
display(sandwich);
display(sandwich,10);


// Task NO 45


document.getElementById("output").innerHTML += "<h3>Task 45:</h3>";
function car(man,mod){
    let len = arguments.length;
    let myobj ={
        pos : []
    };
        for(var i=0;i<len;i++){
       myobj.pos[i]=arguments[i];
       console.log(arguments[i])
        }
    
    }
car("Mercedez","Benz",78,null,true,"Bye! World");
document.getElementById("output").innerHTML += "<p>Object can be seen in console Tool.</p>";
// All the assignment is done according to best of my knowledge