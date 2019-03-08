/**隱藏元素**/
var uniBody='';
var uniBody = document.querySelector('.universityBody');
uniBody.setAttribute('style', 'display: none;');

var highBody='';
var highBody = document.querySelector('.highSchoolBody');
highBody.setAttribute('style', 'display: none;');

var juniBody='';
var juniBody = document.querySelector('.juniorHighBody');
juniBody.setAttribute('style', 'display: none;');

var elementaryBody='';
var elementaryBody = document.querySelector('.elementaryBody');
elementaryBody.setAttribute('style', 'display: none;');
/**隱藏元素**/
/*顯示元素**/

/*顯示元素**/
/*
var elnb = document.querySelector('.navbar');
var ms = new MenuSpy(elnb);

var ms = new MenuSpy(elnb,{
  menuItemSelector: 'a[href^="#"]',
  activeClass   : 'active',
  threshold     : 15,
  enableLocationHash: true,
  hashTimeout   : 600,
  callback      : null
});
*/

$(window).bind('scroll', function() {
  var currentTop = $(window).scrollTop();
  var elems = $('.scrollspy');
  elems.each(function(index){
    var elemTop 	= $(this).offset().top;
    var elemBottom 	= elemTop + $(this).height();
    if(currentTop >= elemTop && currentTop <= elemBottom){
      var id 		= $(this).attr('id');
      var navElem = $('a[href="#' + id+ '"]');
  navElem.parent().addClass('active').siblings().removeClass( 'active' );
    }
  })
}); 


/**內容動畫效果(personal)**/
$(document).ready(function() {
  
  /* Every time the window is scrolled ... */
  $(window).scroll(function(){
    $('.aboutMove').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({
          'padding-top':'0px',
          'opacity':'1'
        },500); 
      } 
  });
    /* Check the location of each desired element */
    $('.hideLeft').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({
            'margin-left':'0px',
            'opacity':'1'
          },1000); 
        } 
    });
    /* Check the location of each desired element */
    $('.hideRight').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({
          'margin-right':'0px',
          'opacity':'1'
        },1000); 
      } 
  });
  });
});
/**內容動畫效果(personal)**/

/***點擊切換效果****/
var chF=document.getElementById('changeFirst');
var chS=document.getElementById('changeSecond');
chF.addEventListener('click' , changeFirst);
chS.addEventListener('click' , changeSecond);

function changeFirst(){
  var changeText = [    
    "Hi! I'm Duncan.",
    "Constant Learning"
  ];
  var changeImgs = [    
    "imgs/Duncan-2.png",
    "imgs/Duncan-4.png"
  ];
  var elTextFirst = document.getElementById('greetingTextOne');
  var elImgFirst = document.getElementById('mainContainer');
  /**切換文字**/
  if(elTextFirst.textContent === changeText[1]){
    $(elTextFirst).animate({
      opacity:0
    },300,
      function(){
        $(elTextFirst).animate({
          opacity: 1
      },1500);
      elTextFirst.textContent = changeText[0];
    });
    }else{
      elTextFirst.textContent = changeText[0];
    };
    /**切換圖片**/
  if(elImgFirst.style.background = changeImgs[1]){
    $(elImgFirst).animate({
      opacity:0
    },300,
      function(){
        $(elImgFirst).animate({
          opacity:1
      },1500);
      elImgFirst.style.background = "url(" + changeImgs[0] + " )";
      document.getElementById('mainContainer').style.backgroundSize = 'cover';
      document.getElementById('mainContainer').style.backgroundPosition ='center';
    });
    }else{
      elImgFirst.style.background = "url("+ changeImgs[0] + ")";
    };
}

function changeSecond(){
  var changeText = [    
    "Hi! I'm Duncan.",
    "Constant Learning"
  ];
  var changeImgs = [    
    "imgs/Duncan-2.png",
    "imgs/Duncan-4.png"
  ];
  var elTextSecond = document.getElementById('greetingTextOne');
  var elImgSecond = document.getElementById('mainContainer')
  if(elTextSecond.textContent = changeText[0]){
    /**切換文字**/
    $(elTextSecond).animate({
      opacity:0
    },300,
      function(){
        $(elTextSecond).animate({
          opacity: 1
      },1500);
      elTextSecond.textContent = changeText[1];
    });
    }else{
      elTextSecond.textContent = changeText[1];
    }
    /**切換圖片**/
  if(elImgSecond.style.background = changeImgs[0]){
    $(elImgSecond).animate({
      opacity:0
    },300,
      function(){
        $(elImgSecond).animate({
          opacity:1
        },1500);
        elImgSecond.style.background = "url(" + changeImgs[1] + " )";
        document.getElementById('mainContainer').style.backgroundSize = 'cover';
        document.getElementById('mainContainer').style.backgroundPosition ='center';
      });
    }else{
      elImgSecond.style.background = "url("+ changeImgs[1] + ")";
  }
}
/***頁面點擊切換效果****/


/*****切首頁內容*****/
var currentText = 0;
function changeText(){
  var changeText = [    
    "Hi! I'm Duncan.",
    "Constant Learning"
  ];
  currentText++;
  currentText%=2;
  if(currentText===0){
    document.getElementById('greetingTextOne').textContent= changeText[currentText];
  } else{
    document.getElementById('greetingTextOne').textContent= changeText[currentText];
  }
}
setInterval('changeText()' , 10000);

/**切換首頁內容背景**/
var currentIndex = 0;
function changeBg(){
  var changeImgs = [    
    "imgs/Duncan-2.png",
    "imgs/Duncan-4.png"
  ];
  currentIndex++;
  currentIndex%=2;  
  //主要要把currentIndex的值儲存起來,,,,只有currentIndex%2只是運算式
  //也可以寫成 currentIndex = currentIndex % 2;
  var mainBg='';
  var mainBg = document.getElementById('mainContainer');
  mainBg.style.background = "url(" + changeImgs[currentIndex] + " )";
  /* 這段程式碼無法動作
  mainBg.style.backgroundSize = 'center';
  mainBg.style.backgroundPosition = 'centet';
  */
  document.getElementById('mainContainer').style.backgroundSize = 'cover';
  document.getElementById('mainContainer').style.backgroundPosition ='center';
}
setInterval('changeBg()',10000);

/******************************* 
var currentIndex = 1; 
var changeImgs = [    
  "imgs/Duncan-2.png",
  "imgs/Duncan-3.png",
  "imgs/Duncan-4.png",
  "imgs/Duncan-5.png"
];
function changeBg(){
  var mainBg = document.getElementById('mainContainer');
  mainBg.style.background = "url(" + changeImgs[currentIndex] + ")";
  currentIndex++;
  if(currentIndex >= changeImgs.lenght){
    currentIndex=0;
    mainBg.style.background = "url(" + changeImgs[currentIndex]  + ")";
  }
}
setInterval('changeBg()',1000);
*******************************/

/*這段程式碼因為邏輯不對所以不會執行
function changeBg(){
  var mainBg = document.getElementById('mainContainer'); 
    //取id為mainContainer的元素儲存到變數mainBg
    mainBg.style.background= "url(" + changeImgs[currentIndex] + ")";
    //main的style:background的值 為url(changeImgs[currentIndex])
    currentIndex++;
  if(currentIndex >= changeImgs.lenght-1){  
    currentIndex=0;
  }
}
*/

/********************************* 
var currentIndex = 0;
function changeBg(){
  var backgroundImgs = [
    "imgs/Duncan-2.png",
    "imgs/Duncan-3.png",
    "imgs/Duncan-4.png",
    "imgs/Duncan-5.png"
  ] //長度為4
  if(currentIndex >= backgroundImgs.lenght){
    currentIndex=0;

    var mainBg = document.getElementById('mainContainer');
    mainBg.style.background= "url(" + backgroundImgs[currentIndex] + ")";
    currentIndex++;
  }
}
***********************************/
/**切換首頁內容**/

/**取消預設(大學)**/
document.querySelector('.universityA').addEventListener('click' , function(event){
  event.preventDefault();
},false);
/**事件邦定**/
var uniButton='';
var uniButton = document.querySelector('.universityA');
uniButton.addEventListener('click' , uniDisplay);

function uniDisplay(){
  /*
  var uniButton=document.querySelector('.universityA');//先定義儲存變數
  if(uniButton.style.background ='#f2f3f7'){
    uniButton.style.background ='#2c98f0';
  }else{
    uniButton.style.background ='#f2f3f7';
  }
  */
  var uniBody = document.querySelector('.universityBody');
  if(uniBody.style.display==='none'){
    uniBody.style.display='';
  } else{
    uniBody.style.display='none';
  }
}

/**取消預設(高中)**/
document.querySelector('.highSchoolA').addEventListener('click' , function(event){
  event.preventDefault();
},false);
/**事件邦定**/
var highButton='';
var highButton = document.querySelector('.highSchoolA');
highButton.addEventListener('click' , highDisplay);

function highDisplay(){
  var highBody = document.querySelector('.highSchoolBody');//先定義儲存變數
  if(highBody.style.display==='none'){
    highBody.style.display='';
  } else{
    highBody.style.display='none';
  }
}

/**取消預設(國中)**/
document.querySelector('.juniorHighA').addEventListener('click' , function(event){
  event.preventDefault();
},false);
/**事件邦定**/
var juniButton='';
var juniButton = document.querySelector('.juniorHighA');
juniButton.addEventListener('click' , juniDisplay);

function juniDisplay(){
  /*
  var uniButton=document.querySelector('.universityA');//先定義儲存變數
  if(uniButton.style.background ='#f2f3f7'){
    uniButton.style.background ='#2c98f0';
  }else{
    uniButton.style.background ='#f2f3f7';
  }
  */
  var juniBody = document.querySelector('.juniorHighBody');
  if(juniBody.style.display==='none'){
    juniBody.style.display='';
  } else{
    juniBody.style.display='none';
  }
}

/**取消預設(國小)**/
document.querySelector('.elementaryA').addEventListener('click' , function(event){
  event.preventDefault();
},false);
/**事件邦定**/
var elemButton='';
var elemButton = document.querySelector('.elementaryA');
elemButton.addEventListener('click' , elemDisplay);

function elemDisplay(){
  /*
  var uniButton=document.querySelector('.universityA');//先定義儲存變數
  if(uniButton.style.background ='#f2f3f7'){
    uniButton.style.background ='#2c98f0';
  }else{
    uniButton.style.background ='#f2f3f7';
  }
  */
  var elemBody = document.querySelector('.elementaryBody');
  if(elemBody.style.display==='none'){
    elemBody.style.display='';
  } else{
    elemBody.style.display='none';
  }
}


/*
$(document).ready(function(){
  hidden();
  $("a").click(function(event){
    event.preventDefault();
  });
});

$('.universityA').on('click',function(){
  $('.universityBody').toggle();
});

$('.highSchoolA').on('click',function(){
  $('.highSchoolBody').toggle();
});

function hidden(){
  $('.universityBody').hide();
  $('.highSchoolBody').hide();
}
*/








