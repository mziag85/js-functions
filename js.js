//1 დავალება: ონლაინ მაღაზიის მადლობის წერილი
 
function sayThanks(){
    let userName = prompt (`დაწერეთ თქვენი სახელი`);
    let text = alert (`${userName}, Thank you for your purchase! We appreciate your business.`)
    console.log(text);
}
sayThanks();

// 2 დავალება: მართკუთხედის ფართობი
 
function rectArea(length,width){
    let area = length * width;
    console.log(area);
    
}
rectArea(5,4);
rectArea(7,6);

ამ დავალებისთვის ვცადე arrow function, მაგრამ არ მუშაობს, რატომ?

let areaFuncion = (length, width) => length * width;
console.log(areaFunction(5,4));

//3 დავალება: საყიდლების სია
function makeShoppingList(item1="milk", 
                          item2="bread",
                          item3 "eggs"){

console.log(item1,item2,item3);

}
makeShoppingList("apples");
   
// 4 დავალება: BMI- კალკულატორი
function bmiCalculator (weight,height){
 let bmi = Math.floor(weight / (height**2));
 console.log(bmi);
  return bmi;

 }
 bmiCalculator(60, 1.65);
 bmiCalculator(80, 1.85);


