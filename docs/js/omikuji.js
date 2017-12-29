
const omikuji = () =>{

    document.getElementById("result").innerHTML = "大吉";
    var num = Math.floor(Math.random()*100+1 );
    if(num<=5){
        document.querySelector("#result").innerHTML = "大吉";
        document.querySelector("#result").style.backgroundColor = "yellow";

    }else if(num>=6 && num<=20){
        document.querySelector("#result").innerHTML = "中吉";
        document.querySelector("#result").style.backgroundColor = "orange";

    }else if(num>=21 && num<=50){
        document.querySelector("#result").innerHTML = "小吉";
        document.querySelector("#result").style.backgroundColor = "pink";

    }else if(num>=51 && num<=80){
        document.querySelector("#result").innerHTML = "吉";
        document.querySelector("#result").style.backgroundColor = "lightblue";

    }else if(num>=81 && num<=99){
        document.querySelector("#result").innerHTML = "末吉";
        document.querySelector("#result").style.backgroundColor = "lightgreen";

    }else if(num==100){
        document.querySelector("#result").innerHTML = "凶";
        document.querySelector("#result").style.backgroundColor = "rec";

    }
    document.getElementById("image").src="./images/eto_inu_shinnen_aisatsu.png";
}