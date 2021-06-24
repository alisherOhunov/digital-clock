var clock = [
    [0, 1, 2, 3, 4, 5],
    [1, 2],
    [0, 1, 6, 4, 3],
    [0, 1, 2, 3, 6],
    [5, 6, 1, 2],
    [0, 5, 6, 2, 3],
    [0, 2, 3, 4, 5, 6],
    [0, 1, 2],
    [0, 1, 2, 3, 4, 5, 6],
    [0, 1, 2, 3, 5, 6]
  ];
  function dayFunction() {
    var d, e;
    d = document.querySelectorAll(".day");
    for (e = 0; e < d.length; e++) {
        d[e].classList.add("offf");
    }
    var day;
    switch (new Date().getDay()) {
      case 0:
        day =  d[0].classList.add("on") ;
        break;
      case 1:
        day =d[1].classList.add("on");
        break;
      case 2:
        day = d[2].classList.add("on");
        break;
      case 3:
        day = d[3].classList.add("on");
        break;
      case 4:
        day = d[4].classList.add("on");
        break;
      case 5:
        day = d[5].classList.add("on");
        break;
      case  6:
        day = d[6].classList.add("on");
    }
}
var dayvar = setInterval(dayFunction, 1000);
  function clock_run(){
      var time = new Date();
      var   hours = time.getHours().toString()
            minutes = time.getMinutes().toString(),
            seconds = time.getSeconds().toString();
      var h  = hours.split("");
      let hours1, hours2;
      if(hours <= 9) {
         hours1 = "0";
         hours2 = parseInt(h[0]);
      } else {
        hours1 = parseInt(h[0]);
        hours2 = parseInt(h[1]);
      }
      var  m  = minutes.split("");
      let minutes1, minutes2;
      if (minutes <=9){
        minutes1 = 0;
        minutes2 = parseInt(m[0]);
      } 
      else{
        minutes1 = parseInt(m[0]);
        minutes2 = parseInt(m[1]);
      }
      var  s = seconds.split("");
      let seconds1, seconds2;
      if (seconds <= 9){
        seconds1 = 0;
        seconds2 = parseInt(s[0]);
      }
      else {
        seconds1 = parseInt(s[0]);
        seconds2 = parseInt(s[1]);
      }

      var lamp, l;
      lamp = document.querySelectorAll(".line");
      for (l = 0; l < lamp.length; l++) {
          lamp[l].classList.add("off");
      
      
          for (i = 0 ; i < 6; i++){
            let  lightsblog1 = document.querySelectorAll('.first-number .line');
            for (let h1 = 0; h1 < clock[hours1].length; h1++){
              lightsblog1[clock[hours1][h1]].classList.remove("off");
            }

            let  lightsblog2 = document.querySelectorAll('.second-number .line');
            for (let h2 = 0; h2 < clock[hours2].length; h2++ ){
              lightsblog2[clock[hours2][h2]].classList.remove("off");
            }

            let lightsblog3 = document.querySelectorAll('.third-number .line');
            for (let m1 = 0; m1 < clock[minutes1].length; m1++){
              lightsblog3[clock[minutes1][m1]].classList.remove("off");
            }

            let lightsblog4 = document.querySelectorAll('.fourth-number .line');
            for (let m2 = 0; m2 < clock[minutes2].length; m2++){
              lightsblog4[clock[minutes2][m2]].classList.remove("off");
            }

            let lightsblog5 = document.querySelectorAll(".fifth-number .line");
            for (let s1 = 0; s1 <clock[seconds1].length; s1++){
                lightsblog5[clock[seconds1][s1]].classList.remove("off");
            }

            let lightsblog6 = document.querySelectorAll(".sixth-number .line");
            for (let s2 = 0; s2 <clock[seconds2].length; s2++){
                lightsblog6[clock[seconds2][s2]].classList.remove("off");
            }
          }
      } 
  }
  var clock_on = setInterval(clock_run, 1000);