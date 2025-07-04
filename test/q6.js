let age = prompt("나이를 입력하세요:");
age = Number(age);

if (age < 10 ){
    console.log(`"10대 미만입니다. 값을 다시 입력해주세요."`);
}


switch (true) {
  case (age >= 50):
    console.log(`"50대입니다. 인문학 도서를 추천합니다."`);
    break;
  case (age >= 40):
    console.log(`"40대입니다. 자기계발 도서를 추천합니다."`);
    break;
  case (age >= 30):
    console.log(`"30대입니다. 직장 생활 도서를 추천합니다."`);
    break;
  case (age >= 20):
    console.log(`"20대입니다. 금융 지식과 커리어 성장 도서를 추천합니다."`);
    break;
  case (age >= 10):
    console.log(`"10대입니다. 청소년 도서를 추천합니다."`);
    break;
  default:
    console.log(`"건강과 취미 관련 도서를 추천합니다."`);
    break;
}

console.log("프로그램 종료");