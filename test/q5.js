for(let i=0; i<=15; ++i){
    if (i == 0) {
        continue;
    }
    if(i %3 == 0){
        console.log(i + ": 3의 배수입니다.");
    }else if(i %5 == 0){
        console.log(i + ": 5의 배수입니다.");
    }else if(i %3 == 0 && i % 5 == 0){
        console.log(i + ": 3과 5의 공배수입니다.");
    }
    else{
        console.log(i);
    }

}