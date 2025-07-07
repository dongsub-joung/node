import readlineSync from 'readline-sync';

class Creature {
    constructor(currentHp, attack, maxHp) {
        this.currentHp= currentHp;
        this.attack= attack;
        this.saikoro= this.getSaikoro();
        this.maxHp= maxHp;
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
            console.log(`주사위 ${monster_obj.saikoro} vs ${human_obj.saikoro}로 몬스터가 이겼습니다.\n`);
            human_obj.currentHp=- monster_obj.attack;
            console.log(`데미지: ${monster_obj.attack} / 남아 있는 HP: ${human_obj.currentHp}`);
            
        }else if(human_obj.saikoro == monster_obj.saikoro){
            console.log(`주사위 ${monster.saikoro} vs ${human_obj.saikoro}로 무승무, 공격력이 높은 쪽이 이깁니다.\n`);
            if(human_obj.attack < monster_obj.attack){
                human_obj.currentHp=- monster_obj.attack
                console.log(`데미지: ${monster_obj.attack} / 남아 있는 HP: ${human_obj.currentHp}`);
            }else {
                monster_obj.currentHp=- human_obj.attack
                console.log(`남아 있는 HP: ${human_obj.currentHp}`);
            }
        }else{
            console.log(`주사위 ${monster_obj.saikoro} vs ${human_obj.saikoro}로 인간이 이겼습니다.\n`);
            monster_obj.currentHp=- human_obj.attack;
            console.log(`남아 있는 HP: ${human_obj.currentHp}`);
        }

        return 0;
    }
}


function setAction(){
    const choice = readlineSync.question('Input');
    return choice;
}


function lvlUp(monster_obj){
    monster_obj.currentHp=+ (monster_obj.maxHp*0.5);
    monster_obj.attack=+ (monster_obj.attack * 0.2);
}

function resetStatus(human_obj){
    human_obj.currentHp= human_obj.maxHp;
}


// Init
function main() {
    const HUMAN_HP= 1000;
    const HUMAN_MAXHP= 1000;
    const HUMAN_ATTACK= 50;
    let human= new Creature(HUMAN_HP, HUMAN_ATTACK, HUMAN_MAXHP);
    
    const MONSTER_HP= 500;
    const MONSTER_MAXHP= 500;
    const MONSTER_ATTACK= 200;
    let monster= new Creature(MONSTER_HP, MONSTER_ATTACK, MONSTER_MAXHP);
    
    let n= 0;
    whileRoop: while (true) {
        let action= new Action();
        
        console.log("0. 싸움\n");
        console.log("1. 도망감\n");
    
        let choice= 1;
        inputRoop: while(true){
            let choice= parseInt(setAction());
    
            switch (choice) {
                case 0:
                    action.fight(human, monster);
                    break inputRoop;
                case 1:
                    {
                        if(human.getSaikoro() >= monster.getSaikoro()){
                            console.log("플레이어의 주사위가 높아 도망에 성공하였습니다.\n");
                            break whileRoop;
                        }else{
                            console.log("플레이어의 주사위가 낮아 도망에 실패하였습니다.\n");
                            break inputRoop;
                        }
                    }
                default:
                    continue;
            }
        } 
    
        if(human.currentHp<= 0){
            console.log(`GAME OVER`);
            break whileRoop;
        }else{
            console.log(`${++n}회 반복했습니다.`);
            human.setNewSaikoro();
            monster.setNewSaikoro();
    
            lvlUp(monster);
            resetStatus(human);
            continue;
        }
    }
}

main();