
const omikuji = () =>{

    let num = Math.floor(Math.random()*100+1 );
    let resElem = document.getElementById("result");
    if(num<=5){
        resElem.innerHTML = "大吉";
        resElem.style.backgroundColor = "yellow";

    }else if(num>=6 && num<=20){
        resElem.innerHTML = "中吉";
        resElem.style.backgroundColor = "orange";

    }else if(num>=21 && num<=50){
        resElem.innerHTML = "小吉";
        resElem.style.backgroundColor = "pink";

    }else if(num>=51 && num<=80){
        resElem.innerHTML = "吉";
        resElem.style.backgroundColor = "lightblue";

    }else if(num>=81 && num<=97){
        resElem.innerHTML = "末吉";
        resElem.style.backgroundColor = "lightgreen";

    }else if(num>=98){
        resElem.innerHTML = "豊臣秀吉";
        resElem.style.backgroundColor = "red";

    }
    document.getElementById("image").style.visibility = "visible";
}