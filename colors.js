var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === '야간모드'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = '주간모드';
    Links.setColor('green');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = '야간모드';
    Links.setColor('green');
  }
}
