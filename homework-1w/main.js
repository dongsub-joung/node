const readline = require('readline');

class Creature {
    constructor(hp, attack) {
        this.hp= hp;
        this.attack= attack;
        this.saikoro= this.getSaikoro();
    }

    getSaikoro(){
        return Math.floor(Math.random() * 100);
    }

    setNewSaikoro(){
        this.saikoro= this.getSaikoro();
    }
}

class Action {
    fight(human_obj, monster_obj){
        if(human_obj.saikoro < monster_obj.saikoro){
            console.log(`주사위 ${monster.saikoro} vs ${human_obj.saikoro}로 몬스터가 이겼습니다.`);
            human_obj.hp=- monster_obj.attack;
        }else if(human_obj.saikoro == monster_obj.saikoro){
            console.log(`주사위 ${monster.saikoro} vs ${human_obj.saikoro}로 무승무, 공격력이 높은 쪽이 이깁니다..`);
            if(human_obj.attack < monster_obj.attack){
                human_obj.hp=- monster_obj.attack
            }else {
                monster_obj.hp=- human_obj.attack
            }
        }else{
            console.log(`주사위 ${monster.saikoro} vs ${human_obj.saikoro}로 인간이 이겼습니다.`);
            monster_obj.hp=- human_obj.attack;
        }

        return 0;
    }

    runAway(human_obj, monster_obj){
        if(human_obj.getSaikoro() >= monster_obj.getSaikoro()){
            console.log("플레이어의 주사위가 높아 도망에 성공하였습니다.");
        }else{
            console.log("플레이어의 주사위가 낮아 도망에 실패하였습니다.");
        }
    }
}


// Init
const HUMAN_HP= 1000;
const HUMAN_ATTACK= 50;
let human= new Creature(HUMAN_HP, HUMAN_ATTACK);

const MONSTER_HP= 500;
const MONSTER_ATTACK= 200;
let monster= new Creature(MONSTER_HP, MONSTER_ATTACK);

let n= 0;
while (true) {
    let action= new Action();
    
    console.error("0. 싸움");
    console.error("0. 도망감");
    
    const choice = prompt("Chose this one");

    switch (choice) {
        case 0:
            action.fight(human, monster);
            break;
        case 1:
            action.runAway();
        default:
            continue;
    }

    if(human.hp<= 0){
        console.log(`GAME OVER`);
        break;
    }else{
        console.log(`${n++}회 반복했습니다.`);
        human.setNewSaikoro();
        monster.setNewSaikoro();
        continue;
    }
}