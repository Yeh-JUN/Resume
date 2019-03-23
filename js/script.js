var uniBody        = document.querySelector('.universityBody').setAttribute('style', 'display: none;');
var highBody       = document.querySelector('.highSchoolBody').setAttribute('style', 'display: none;');
var juniBody       = document.querySelector('.juniorHighBody').setAttribute('style', 'display: none;');
var elementaryBody = document.querySelector('.elementaryBody').setAttribute('style', 'display: none;');

var activeId = null;
$(window).bind('scroll', function() {
  var currentTop = $(window).scrollTop();
  var elems = $('.scrollspy');
  elems.each(function(){
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

$(document).ready(function() {
  var elHtml = 0;
  var elCss  = 0;
  var elJs   = 0;
  var elJq   = 0;
  var elGit  = 0;
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

    $('.htmlProgress').each( function(){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object && elHtml === 0 ){
        elHtml = 1;
        $(this).animate({
          'width':'75%'
        },500, function(){
          $('.htmlPro').animate({
            'opacity':'1'
          },100);
        }); 
      }
    });
    
    $('.cssProgress').each( function(){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object && elCss === 0){
        elCss = 1;
        $(this).animate({
          'width':'80%'
        },500 , function(){
          $('.cssPro').animate({
            'opacity':'1'
          },100);
        }); 
      }
    });

    $('.jsProgress').each( function(){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object && elJs === 0){
        elJs = 1;
        $(this).animate({
          'width':'65%'
        },500 , function(){
          $('.jsPro').animate({
            'opacity':'1'
          },100);
        }); 
      }
    });

    $('.jqProgress').each( function(){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object && elJq === 0){
        elJq = 1;
        $(this).animate({
          'width':'60%'
        },500, function(){
          $('.jqPro').animate({
            'opacity':'1'
          },100);
        }); 
      }
    });

    $('.gitProgress').each( function(){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object && elGit === 0){
        elGit = 1;
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

var changeText = [    
  "Hi! I'm Duncan.",
  "Constant Learning"
];

var changeImgs = [    
  "imgs/joshua-earle-1420452-unsplash.jpg",
  "imgs/gaspar-manuel-zaldo-1416277-unsplash.jpg"
];

var changeColor =[
  "#f2f3f7",
  "dodgerblue"
];

var changeTextColor =[
  "#333",
  "#fff"
];
/*
var chF=document.getElementById('changeFirst');
var chS=document.getElementById('changeSecond');
chF.addEventListener('click' , function(event){
  var elText = document.getElementById('greetingTextOne');
  var elImg = document.getElementById('mainContainer');
  var chBtn=document.getElementById('changeFirst');
  event.preventDefault();
  stopCount();
  changeBgText(elText , elImg , chBtn);
});
chS.addEventListener('click' , function(event){
  var elText = document.getElementById('greetingTextOne');
  var elImg = document.getElementById('mainContainer');
  var chBtn=document.getElementById('changeSecond');
  event.preventDefault();
  stopCount();
  changeBgText(elText , elImg , chBtn);
});

function stopCount(){
  clearInterval(chText);
  clearInterval(chBg);
}

function changeBgText(elText , elImg , chBtn){
  if(elText.textContent === changeText[1] && chBtn === changeFirst){
    $('#changeFirst').removeClass('dotActive');
    $('#changeSecond').addClass('dotActive');
    $(elText).animate({
      opacity:0,
    },100,function(){
      $(elText).animate({
        opacity:1,
      },200)
      elText.textContent = changeText[0];
      elImg.style.background = "url(" + changeImgs[0] + " )";
      document.getElementById('mainContainer').style.backgroundSize = 'cover';
      document.getElementById('mainContainer').style.backgroundPosition ='center';
    });
  }else if(elText.textContent === changeText[0] && chBtn === changeSecond){
    $('#changeFirst').addClass('dotActive');
    $('#changeSecond').removeClass('dotActive');
    $(elText).animate({
      opacity:0,
    },100,function(){
      $(elText).animate({
        opacity:1,
      },200)
      elText.textContent = changeText[1];
      elImg.style.background = "url(" + changeImgs[1] + " )";
      document.getElementById('mainContainer').style.backgroundSize = 'cover';
      document.getElementById('mainContainer').style.backgroundPosition ='center';
    });
  }
}
/*
var chF=document.getElementById('changeFirst');
var chS=document.getElementById('changeSecond');
chF.addEventListener('click' , function(){
  stopCount();
  changeFirst();
});
chS.addEventListener('click' , function(){
  stopCount();
  changeSecond();
});

function stopCount(){
  clearInterval(chText);
  clearInterval(chBg);
}
function changeFirst(){
  var elTextFirst = document.getElementById('greetingTextOne');
  var elImgFirst = document.getElementById('mainContainer');
  if(elTextFirst.textContent === changeText[1]){
    $('#changeFirst').removeClass('dotActive');
    $('#changeSecond').addClass('dotActive');
    $(elTextFirst).animate({
      opacity:0
    },100,
      function(){
        $(elTextFirst).animate({
          opacity: 1
      },300);
      elTextFirst.textContent = changeText[0];
    });
    }else{
      elTextFirst.textContent = changeText[0];
    };
  if(elImgFirst.style.background = changeImgs[1]){
      elImgFirst.style.background = "url(" + changeImgs[0] + " )";
      document.getElementById('mainContainer').style.backgroundSize = 'cover';
      document.getElementById('mainContainer').style.backgroundPosition ='center';
    }else{
      elImgFirst.style.background = "url("+ changeImgs[0] + ")";
    };
}

function changeSecond(){
  var elTextSecond = document.getElementById('greetingTextOne');
  var elImgSecond = document.getElementById('mainContainer')
  if(elTextSecond.textContent === changeText[0]){
    $('#changeFirst').addClass('dotActive');
    $('#changeSecond').removeClass('dotActive');
    $(elTextSecond).animate({
      opacity:0
    },100,
      function(){
        $(elTextSecond).animate({
          opacity: 1
      },300);
      elTextSecond.textContent = changeText[1];
    });
    }else{
      elTextSecond.textContent = changeText[1];
    }
  if(elImgSecond.style.background = changeImgs[0]){
      elImgSecond.style.background = "url(" + changeImgs[1] + " )";
      document.getElementById('mainContainer').style.backgroundSize = 'cover';
      document.getElementById('mainContainer').style.backgroundPosition ='center';
    }else{
      elImgSecond.style.background = "url("+ changeImgs[1] + ")";
  }
}
*/
var currentText = 0;
function changeGreeting(){
  currentText++;
  currentText%=2;
  if(currentText===0){
    document.getElementById('greetingTextOne').textContent= changeText[currentText];
    $('#changeFirst').removeClass('dotActive');
    $('#changeSecond').addClass('dotActive');
  } else{
    document.getElementById('greetingTextOne').textContent= changeText[currentText];
    $('#changeFirst').addClass('dotActive');   
    $('#changeSecond').removeClass('dotActive');
  }
}
var chText = setInterval('changeGreeting()',4000);

var currentIndex = 0;
function changeBg(){
  currentIndex++;
  currentIndex%=2;  
  //主要要把currentIndex的值儲存起來,,,,只有currentIndex%2只是運算式
  //也可以寫成 currentIndex = currentIndex % 2;
  var mainBg='';
  var mainBg = document.getElementById('mainContainer');
  mainBg.style.background = "url(" + changeImgs[currentIndex] + " )";
  document.getElementById('mainContainer').style.backgroundSize = 'cover';
  document.getElementById('mainContainer').style.backgroundPosition ='center';
}
var chBg = setInterval('changeBg()',4000);


$('.education-event').on('click' , function(event){
  event.preventDefault();
},false);
var uniButton = document.querySelector('.universityA');
uniButton.addEventListener('click' , function(){
  var eduBg = document.querySelector('.universityA');
  var changeFas = document.getElementById('uniFas');
  var changeBody = document.querySelector('.universityBody');
  Display(eduBg , changeFas , changeBody);
});
var highButton = document.querySelector('.highSchoolA');
highButton.addEventListener('click' , function(){
  var eduBg = document.querySelector('.highSchoolA');
  var changeFas = document.getElementById('highFas');
  var changeBody = document.querySelector('.highSchoolBody');
  Display(eduBg , changeFas , changeBody);
});
var juniButton = document.querySelector('.juniorHighA');
juniButton.addEventListener('click' , function(){
  var eduBg = document.querySelector('.juniorHighA');
  var changeFas = document.getElementById('juniFas');
  var changeBody = document.querySelector('.juniorHighBody');
  Display(eduBg , changeFas , changeBody);
});
var elemButton = document.querySelector('.elementaryA');
elemButton.addEventListener('click' , function(){
  var eduBg = document.querySelector('.elementaryA');
  var changeFas = document.getElementById('elemFas');
  var changeBody = document.querySelector('.elementaryBody');
  Display(eduBg , changeFas , changeBody);
});

function Display(eduBg, changeFas ,changeBody ){
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
  if(changeBody.style.display==='none'){
    changeBody.style.display='';
  } else{
    changeBody.style.display='none';
  }
}




var chF=document.getElementById('changeFirst');
var chS=document.getElementById('changeSecond');
chF.addEventListener('click' , function(event){
  var elText = document.getElementById('greetingTextOne');
  var elImg = document.getElementById('mainContainer');
  var chBtn=document.getElementById('changeFirst');
  console.log(chBtn);
  event.preventDefault();
  stopCount();
  changeBgText(elText , elImg , chBtn);
});
chS.addEventListener('click' , function(event){
  var elText = document.getElementById('greetingTextOne');
  var elImg = document.getElementById('mainContainer');
  var chBtn=document.getElementById('changeSecond');
  console.log(chBtn);
  event.preventDefault();
  stopCount();
  changeBgText(elText , elImg , chBtn);
});

function stopCount(){
  clearInterval(chText);
  clearInterval(chBg);
}

function changeBgText(elText , elImg , chBtn){
  if(elText.textContent === changeText[0] && chBtn === changeFirst){
    $('#changeFirst').removeClass('dotActive');
    $('#changeSecond').addClass('dotActive');
    elText.textContent = changeText[0];
    elImg.style.background = "url(" + changeImgs[0] + " )";
    document.getElementById('mainContainer').style.backgroundSize = 'cover';
    document.getElementById('mainContainer').style.backgroundPosition ='center';
  }else if(elText.textContent === changeText[1] && chBtn === changeFirst){
    $('#changeFirst').removeClass('dotActive');
    $('#changeSecond').addClass('dotActive');
    elText.textContent = changeText[0];
    elImg.style.background = "url(" + changeImgs[0] + " )";
    document.getElementById('mainContainer').style.backgroundSize = 'cover';
    document.getElementById('mainContainer').style.backgroundPosition ='center';
  }else if(elText.textContent === changeText[0] && chBtn === changeSecond){
    $('#changeFirst').removeClass('dotActive');
    $('#changeSecond').addClass('dotActive');
    elText.textContent = changeText[1];
    elImg.style.background = "url(" + changeImgs[1] + " )";
    document.getElementById('mainContainer').style.backgroundSize = 'cover';
    document.getElementById('mainContainer').style.backgroundPosition ='center';
  }else if(elText.textContent === changeText[1] && chBtn === changeSecond){
    $('#changeFirst').removeClass('dotActive');
    $('#changeSecond').addClass('dotActive');
    elText.textContent = changeText[0];
    elImg.style.background = "url(" + changeImgs[0] + " )";
    document.getElementById('mainContainer').style.backgroundSize = 'cover';
    document.getElementById('mainContainer').style.backgroundPosition ='center';
  }
}


/*
$('#changeFirst').removeClass('dotActive');
$('#changeSecond').addClass('dotActive');
elImgFirst.style.background = "url(" + changeImgs[0] + " )";
document.getElementById('mainContainer').style.backgroundSize = 'cover';
document.getElementById('mainContainer').style.backgroundPosition ='center';
*/
