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


/**導覽列跟隨**/
var activeId = null;
$(window).bind('scroll', function() {
  var currentTop = $(window).scrollTop();
  var elems = $('.scrollspy');
  elems.each(function(index){
    var id = $(this).attr('id');
    var elemTop = $(this).offset().top;
    var elemBottom	= elemTop + $(this).height();
    if(currentTop >= elemTop && currentTop <= elemBottom && activeId !== id){
      activeId = id;
      var navElem = $('a[href="#' + id+ '"]');
      var navElems = $('.navbarItem');
      navElems.removeClass( 'active' );
      navElem.addClass('active');
    }
  })
});
/**導覽列跟隨**/


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
            'left':'0px',
            'opacity':'1'
          },300); 
        } 
    });
    /* Check the location of each desired element */
    $('.hideRight').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({
          'right':'0px',
          'opacity':'1'
        },300); 
      } 
    });
    $('.htmlProgress').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({
          'width':'75%'
        },500, function(){
          $('.htmlPro').animate({
            'opacity':'1'
          },100);
        }); 
      }
    });
    
    $('.cssProgress').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({
          'width':'80%'
        },500 , function(){
          $('.cssPro').animate({
            'opacity':'1'
          },100);
        }); 
      }
    });
    $('.jsProgress').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({
          'width':'65%'
        },500 , function(){
          $('.jsPro').animate({
            'opacity':'1'
          },100);
        }); 
      }
    });
    $('.jqProgress').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({
          'width':'60%'
        },500, function(){
          $('.jqPro').animate({
            'opacity':'1'
          },100);
        }); 
      }
    });
    $('.gitProgress').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({
          'width':'45%'
        },500 , function(){
          $('.gitPro').animate({
            'opacity':'1'
          },100);
        }); 
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

/*****自動切換首頁內容*****/
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
/**自動切換首頁內容背景**/
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
  var changeColor =[
    '#f2f3f7',
    "skyblue"
  ];
  var changeTextColor =[
    "#333",
    "#fff"
  ];

  var eduBg = document.querySelector('.universityA');
  var changeFas = document.getElementById('uniFas');
  if(eduBg.style.background === changeColor[0]){
    eduBg.style.background = changeColor[1];
  } else if(eduBg.style.background === changeColor[1]){
    eduBg.style.background = changeColor[0];
    eduBg.style.color = changeTextColor[0];
    changeFas.setAttribute('class' , ' fas fa-plus');
  } else{
    eduBg.style.background = changeColor[1];
    eduBg.style.color = changeTextColor[1];
    changeFas.setAttribute('class' , ' fas fa-minus');
  }
  
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
  var changeColor =[
    "#f2f3f7",
    "skyblue"
  ];
  var changeTextColor =[
    "#333",
    "#fff"
  ];

  var eduBg='';
  var eduBg = document.querySelector('.highSchoolA');
  var changeFas = document.getElementById('highFas');
  if(eduBg.style.background === changeColor[0]){
    eduBg.style.background = changeColor[1];
  } else if(eduBg.style.background === changeColor[1]){
    eduBg.style.background = changeColor[0];
    eduBg.style.color = changeTextColor[0];
    changeFas.setAttribute('class' , ' fas fa-plus');
  } else{
    eduBg.style.background = changeColor[1];
    eduBg.style.color = changeTextColor[1];
    changeFas.setAttribute('class' , ' fas fa-minus');
  }

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
  var changeColor =[
    "#f2f3f7",
    "skyblue"
  ];
  var changeTextColor =[
    "#333",
    "#fff"
  ];

  var eduBg='';
  var eduBg = document.querySelector('.juniorHighA');
  var changeFas = document.getElementById('juniFas');
  if(eduBg.style.background === changeColor[0]){
    eduBg.style.background = changeColor[1];
  } else if(eduBg.style.background === changeColor[1]){
    eduBg.style.background = changeColor[0];
    eduBg.style.color = changeTextColor[0];
    changeFas.setAttribute('class' , ' fas fa-plus');
  } else{
    eduBg.style.background = changeColor[1];
    eduBg.style.color = changeTextColor[1];
    changeFas.setAttribute('class' , ' fas fa-minus');
  }

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
  var changeColor =[
    "#f2f3f7",
    "skyblue"
  ];
  var changeTextColor =[
    "#333",
    "#fff"
  ];

  var eduBg='';
  var eduBg = document.querySelector('.elementaryA');
  var changeFas = document.getElementById('elemFas');
  if(eduBg.style.background === changeColor[0]){
    eduBg.style.background = changeColor[1];
  } else if(eduBg.style.background === changeColor[1]){
    eduBg.style.background = changeColor[0];
    eduBg.style.color = changeTextColor[0];
    changeFas.setAttribute('class' , ' fas fa-plus');
  } else{
    eduBg.style.background = changeColor[1];
    eduBg.style.color = changeTextColor[1];
    changeFas.setAttribute('class' , ' fas fa-minus');
  }

  var elemBody = document.querySelector('.elementaryBody');
  if(elemBody.style.display==='none'){
    elemBody.style.display='';
  } else{
    elemBody.style.display='none';
  }
}









