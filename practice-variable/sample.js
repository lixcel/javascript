let user_hand = prompt('じゃんけんの手をグー、チョキ、パーからから選んでください。');

let js_hand = getJShand()

let judge = winLose(user_hand, js_hand)

alert('あなたの選んだ手は' + user_hand + 'です。¥nJavaScriptの選んだ手は' + )

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3);


  if(js_hand_num == 0){
    js_hand = "グー"
  } else if(js_hand_num == 1){
    js_hand = "チョキ"
  } else if(js_hand_num == 2){
    js_hand = "パー"
  }

  return js_hand;
}

alert('あなたの選んだ手は' + user_hand + 'です。')