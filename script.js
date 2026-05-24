function sendMessage(){

  let input = document.getElementById("msg");
  let message = input.value;

  if(message.trim() !== ""){

    let div = document.createElement("div");
    div.innerText = message;

    document.getElementById("messages").appendChild(div);

    input.value = "";
  }
}