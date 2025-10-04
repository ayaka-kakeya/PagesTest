function buttonClick(){
    const messages =["大吉", "中吉", "小吉", "凶"];
    const messageNo = Math.floor(Math.random() * messages.length);
    alert(messages[messageNo]);
}

let button = document.getElementById("button");
button.addEventListener("click",buttonClick);