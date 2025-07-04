let chocolates = 1079;
let students = 25;

let chocolatesPerStudent = Math.floor(chocolates/students); 

let chocolatesLeft = chocolates%students

console.log("1인당 받는 초콜릿: " +  chocolatesPerStudent + "개");
console.log("남은 초콜릿: " +  chocolatesLeft  + "개");

if ( chocolatesLeft > 0) {
	console.log("학생들에게 제공된 초콜릿: " + (chocolates - chocolatesLeft) + "개") 
  console.log("남은 초콜릿이 있습니다.");
}