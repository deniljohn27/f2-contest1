/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(element){
    if(element.marks>50){
      console.log(element);
    } 
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(element){
    if(element.marks>50){
      console.log(element);
    } 
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  console.log(arr.filter(function(element){
    return element.marks>=50;
  }));
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "rossi", age: "18", marks: 85 },
    { id: 6, name: "michale", age: "20", marks: 75 },
    { id: 7, name: "owen", age: "19", marks: 90 },
  ];
  console.log(arr.concat(newArr));
}
