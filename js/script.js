// Write JavaScript here 
var timer1 = 0;
var min = 0;
var sec = 0;


function cntStart() {
  document.timer.elements[2].disabled=true;
  timer1=setInterval("countDown()", 1000);
}

function cntStop() {
  document.timer.elements[2].disabled=false;
  clearInterval(timer1);
}

function countDown() {
  var min=document.timer.elements[0].value;
  var sec=document.timer.elements[1].value;
  
  if( (min=="") && (sec=="") )
    {
      alert("時間を設定してください");
      reSet();
    }
    else 
      {
        if (min=="") min=0;
        min=parseInt(min);
        
        if (sec=="") sec=0;
        sec=parseInt(sec);
        
        tmWrite(min*60+sec-1);
      }
}

function tmWrite(int)
{
  int=parseInt(int);
  
  if (int<=0)
  {
    reSet();
    alert("時間です！");
  }
  else
  {
    //残り分数はintを60で割って切り捨てる
    document.timer.elements[0].value=Math.floor(int/60);
    //残り秒数はintを60で割った余り
    document.timer.elements[1].value=int % 60;
  }
}

//フォームを初期状態に戻す（リセット）関数
function reSet()
{
  document.timer.elements[0].value="0";
  document.timer.elements[1].value="0";
  document.timer.elements[2].disabled=false;
  clearInterval(timer1);
}  

function plus_num(cmd) {
  var cmd;
  document.timer.elements[0].value += cmd;
}

function plus_sec(cmd2) {
  var cmd2;
  document.timer.elements[1].value += cmd2;
}