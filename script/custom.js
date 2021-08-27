$(window).load, $(document).ready(function () {
    if ($('#main-container .main1 .sns1 .message').addClass('message-top')) {
        setTimeout(function () {
            $('#main-container .main1 .sns1 .message').addClass(
                'message-on');
            $('#main-container .main1 .sns1 .message-under').css({
                'opacity': '1'
            });
            $('#main-container .main1 .sns1 .message-under').addClass(
                'message-under-on');
        }, 1000);
    }
    $(window).scroll(function () {
        var location = $(window).scrollTop().toFixed(0);
        // let SECTION = $('section');
        // console.log($(window).scrollTop());
        //main
        $('.window-Scroll').text(location);
        if (($(window).scrollTop() <= 900) || ($(window).scrollTop() >= 1500)) {
            $('#main-container .main2 .sns2 .gallery').addClass('gallery-move');
            $('#main-container .main2 .sns2 .gallery-under').addClass(
                'gallery-under-move');
        } else {
            $('#main-container .main2 .sns2 .gallery').removeClass('gallery-move');
            $('#main-container .main2 .sns2 .gallery-under').removeClass(
                'gallery-under-move');
        }

        if (($(window).scrollTop() >= 900) || ($(window).scrollTop() <= 1500)) {
            setTimeout(function () {
                $('#main-container .main2 .sns2 .gallery').removeClass(
                    'gallery-move');
                $('#main-container .main2 .sns2 .gallery-under').removeClass(
                    'gallery-under-move');
                $('#main-container .main2 .sns2 .gallery').addClass(
                    'gallery-on');
                $('#main-container .main2 .sns2 .gallery-under').addClass(
                    'gallery-under-on');
            }, 1000);
        } else {
            $('#main-container .main2 .sns2 .gallery').removeClass('gallery-move');
            $('#main-container .main2 .sns2 .gallery-under').removeClass(
                'gallery-under-move');
        }
        if (($(window).scrollTop() >= 1200)) {
            $('#main-container .icon-nav').css({
                'opacity': '0'
            });
        }
        if (($(window).scrollTop() <= 1200)) {
            $('#main-container .icon-nav').css({
                'opacity': '1'
            });

        }
        if (($(window).scrollTop() <= 5800) || ($(window).scrollTop() >= 8000)) {
            $('.section03 .section03-stuff .chicken').addClass('chicken-move');
        } else {
            $('.section03 .section03-stuff .chicken').removeClass('chicken-move');
        }
        if (($(window).scrollTop() <= 11400)) {
            $('.boss').css({
                'z-index': '99998',
                'transition': '0.2s'
            });
        }
        if (($(window).scrollTop() > 11400)) {
            $('.boss').css({
                'z-index': '-1',
                'transition': '0s'
            });
        }
    });
});
// horizontal-container 수평슬라이드
gsap.registerPlugin(ScrollTrigger);

let Hsection = gsap.utils.toArray('.horizontal-section');
gsap.to(Hsection, {
    xPercent: -100 * (Hsection.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: '#horizontal-container',
        end: () => "+=" + document.querySelector("#horizontal-container").offsetWidth,
        pin: true,
        scrub: 1,
        snap: 1 / (Hsection.length - 1),
    }
});
// ==================================================
let lastScrollTop = 0;
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop < lastScrollTop) {
        $(".boss").css({
            'background': 'no-repeat url(../images/boss_default.gif)'
        });
    } else {
        $(".boss").css({
            'background': 'no-repeat url(../images/boss_default_scroll_on.gif)'
        });
    }
    lastScrollTop = scrollTop;
});

// =========================
//고정메뉴바
$('#fixmenu-toggle').click(function () {
    $(this).toggleClass("active");
    $('#fixmenu-overlay').toggleClass("show");
});
var all = $(".overlay-menu li a")
var overlay = $(".fixmenu-overlay")

all.click(function () {
    $(overlay).removeClass("show");
    $('#fixmenu-toggle').removeClass("active");
});

all.mouseover(function () {
    $(this).css("color", "rgb(200, 219, 230)")
    $(overlay).addClass("white");

});
all.mouseout(function () {
    $(this).css("color", "#fff")
    $(overlay).removeClass("white");
});

// work 팝업 배열써보기 변수 지정 = []
  let CONTSET = ['.website-content', '.study-content', '.design-content'];
  let clickBtn = document.getElementsByClassName('click-btn');
  let Done = document.getElementsByClassName('done');
  for (let i = 0; i < clickBtn.length; i++) {
      clickBtn[i].addEventListener('click', function () {
          $(CONTSET[i]).fadeIn().css('z-index', '9999');
      });
  }
  // console.log(Done);
  for (let j = 0; j < Done.length; j++) {
      Done[j].addEventListener('click', function () {
          $(CONTSET[j]).fadeOut().css('z-index', '-1')
      });
  }
//   갤러리&메시지 pop ~ boss on/off
var overLay = document.getElementsByClassName('overlay-black');
let galleryPop = document.getElementsByClassName('gallery-pop');
let messagePop = document.getElementsByClassName('message-pop');

function galleryOn() {
    if (galleryPop[0].style.display == '') {
        galleryPop[0].style.display = 'block'
        overLay[0].style.display = 'block'
        $('.boss').css({
            'display': 'none'
        })
    }
}
$(".boss").stop().on("mouseenter", function () {
    var duration = 1;
    TweenMax.to(this, duration / 4, {
        y: -140,
        ease: Power2.easeOut
    });
    TweenMax.to(this, duration / 2, {
        y: 0,
        ease: Bounce.easeOut,
        delay: duration / 4
    });
    $(this).css({
        background: "no-repeat url(../images/boss_Surprised_long.gif)",
    });
});
$(".boss").stop().on("mouseout", function () {
    $(this).css({
        "background": "no-repeat url(../images/boss_default_scroll_on.gif)"
    });
});
$('.boss').mouseover(function () {
    $('.boss').removeClass('bossmove')
});

function messageOn() {
    if (messagePop[0].style.display == '') {
        messagePop[0].style.display = 'block'
        overLay[0].style.display = 'block'
        $('.boss').addClass('bossmove').css({
            'opacity': '1'
        })
        $('.main-plz1').css({
            'opacity': '0'
        })
        $('.main-plz2').css({
            'opacity': '1'
        })
    }
}

function backBtn() {
    if (messagePop[0].style.display == 'block') {
        messagePop[0].style.display = ''
        overLay[0].style.display = 'none'

    }
    if (galleryPop[0].style.display == 'block') {
        galleryPop[0].style.display = ''
        overLay[0].style.display = 'none'
        $('.boss').css({
            'display': 'block'
        })
    }
}

function smileBtn() {
    let heart = document.getElementsByClassName('heart');
    if (heart[0].style.display == '') {
        heart[0].style.display = 'block'
    } else {
        heart[0].style.display = ''
    }
}

function tagBtn() {
    let tagin = document.getElementsByClassName('tagin');
    let taginOff = document.getElementsByClassName('tagin-off');
    if (tagin[0].style.display == '') {
        tagin[0].style.display = 'block'
        taginOff[0].style.display = 'none'
    } else {
        tagin[0].style.display = ''
        taginOff[0].style.display = 'block'
    }
}
let gtabList = document.querySelectorAll('.tit li');
let listLine = document.querySelectorAll('.gray-bar span');
let galleryCont = document.querySelectorAll('.gtab');
let activeTab = '';
for (var i = 0; i < gtabList.length; i++) {
    gtabList[i].querySelector('.titbtn').addEventListener('click', function (e) {
        e.preventDefault(); //a링크 #기본값 기능 초기화(상실)
        for (var j = 0; j < gtabList.length; j++) {
            gtabList[j].classList.remove('active');
            // 나머지 버튼 클래스 제거
            galleryCont[j].style.display = 'none';
            listLine[j].style.opacity = '0';
        }
        // .parentNode 상위의 부모에 스타일을 넣고 클릭할 지점이 자식일때 타고올라갈수 있게함
        this.parentNode.classList.add('active');
        activeTab = this.getAttribute('href');
        document.querySelector(activeTab).style.display = 'block';
        let gBar = this.parentNode.classList[0];
        console.log(document.querySelectorAll('.' + gBar)[1]);
        document.querySelectorAll('.' + gBar)[1].style.opacity = '1';
    });
}
$('.square:nth-child(1)').mouseover(function () {
    $('.p1').hide();
    $('.p2').show();
});
$('.square:nth-child(1)').mouseout(function () {
    $('.p2').hide();
    $('.p1').show();
});
$('.square:nth-child(2)').mouseover(function () {
    $('.p3').hide();
    $('.p4').show();
});
$('.square:nth-child(2)').mouseout(function () {
    $('.p4').hide();
    $('.p3').show();
});
$('.square:nth-child(3)').mouseover(function () {
    $('.p5').hide();
    $('.p6').show();
});
$('.square:nth-child(3)').mouseout(function () {
    $('.p6').hide();
    $('.p5').show();
});
$('.square:nth-child(4)').mouseover(function () {
    $('.p7').hide();
    $('.p8').show();
});
$('.square:nth-child(4)').mouseout(function () {
    $('.p8').hide();
    $('.p7').show();
});
$('.square:nth-child(5)').mouseover(function () {
    $('.p9').hide();
    $('.p10').show();
});
$('.square:nth-child(5)').mouseout(function () {
    $('.p10').hide();
    $('.p9').show();
});
$('.square:nth-child(6)').mouseover(function () {
    $('.p11').hide();
    $('.p12').show();
});
$('.square:nth-child(6)').mouseout(function () {
    $('.p12').hide();
    $('.p11').show();
});

// 메인타이핑 typing1
var typingBool1 = false;
var typingIdx1 = 0;
var liIndex1 = 0;
var liLength1 = $(".typing1-txt>ul>li").length;
var del1 = -1;
var repeatInt1 = null;
var tyInt1 = null;
// 타이핑될 텍스트를 가져온다 
var typing1Txt = $(".typing1-txt>ul>li").eq(liIndex1).text();
// 한글자씩 자른다. 
typing1Txt = typing1Txt.split("");

if (typingBool1 == false) {
    // 타이핑이 진행되지 않았다면 
    typingBool1 = true;
    tyInt1 = setInterval(typing1, 200); // 첫번재 반복동작 
}

function typing1() {
    if (typingIdx1 < typing1Txt.length) {
        // 타이핑될 텍스트 길이만큼 반복 
        $(".typing1").append(typing1Txt[typingIdx1]);
        // 한글자씩 이어준다. 
        typingIdx1++;
        if (typingIdx1 == typing1Txt.length) {
            //첫번째 단어가 써지면 1분쉰다.
            clearInterval(tyInt1);
            setTimeout(function () {
                tyInt1 = setInterval(typing1, 200);
            }, 1000);
        }
    } else {

        //한문장이끝나면
        if (-typing1Txt.length - 1 < del1) {
            //한글자씩 지운다.
            $(".typing1").html(typing1Txt.slice(0, del1))
            del1--;
        } else {
            if (liIndex1 >= liLength1 - 1) {
                liIndex1 = 0;
            } else {
                liIndex1++;
            }

            //변수초기화 
            typingIdx1 = 0;
            del1 = -1;
            typing1Txt = $(".typing1-txt>ul>li").eq(liIndex1).text();

            //1분후 다음분장 타이핑 
            clearInterval(tyInt1);
            setTimeout(function () {
                tyInt1 = setInterval(typing1, 200);
            }, 1000);
        }
    }
}

// 메인2 타이핑typing2
var typingBool2 = false;
var typingIdx2 = 0;
var liIndex2 = 0;
var liLength2 = $(".typing2-txt>ul>li").length;
var del2 = -1;
var repeatInt2 = false;
var typing2Txt = $(".typing2-txt>ul>li").eq(liIndex2).text();

typing2Txt = typing2Txt.split("");

if (typingBool2 == false) { // 타이핑이 진행되지 않았다면 
    typingBool2 = true;
    var tyInt2 = setInterval(typing2, 100); // 반복동작 
}

function typing2() {
    $(".typing2 ul li").removeClass("on");
    $(".typing2 ul li").eq(liIndex2).addClass("on");
    //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

    if (typingIdx2 < typing2Txt.length) { // 타이핑될 텍스트 길이만큼 반복 
        $(".typing2 ul li").eq(liIndex2).append(typing2Txt[typingIdx2]); // 한글자씩 이어준다. 
        typingIdx2++;
    } else { //한문장이끝나면
        if (liIndex2 < liLength2 - 1) {
            //다음문장으로  가기위해 인덱스를 1증가
            liIndex2++;
            //다음문장을 타이핑하기위한 셋팅
            typingIdx2 = 0;
            typingBool2 = false;
            typing2Txt = $(".typing2-txt>ul>li").eq(liIndex2).text();

            //다음문장 타이핑전 1초 쉰다
            clearInterval(tyInt2);
            //타이핑종료

            setTimeout(function () {
                //1초후에 다시 타이핑 반복 시작
                tyInt2 = setInterval(typing2, 100);
            }, 1000);
        } else if (liIndex2 == liLength2 - 1) {

            //마지막 문장까지 써지면 반복종료
            clearInterval(tyInt2);
            setTimeout(function () {
                typingIdx2 = 0;
                liIndex2 = 1;
                typing2Txt = $(".typing2-txt>ul>li").eq(liIndex2).text();
                typing2Txt = typing2Txt.split("");
                $(".typing2 ul li").removeClass("on");
                $(".typing2 ul li").eq(liIndex2).addClass("on");
                secRepear2 = setInterval(repeat, 200);
            }, 500);

        }
    }
}

function repeat() {
    // console.log(del2)
    if (-typing2Txt.length - 1 == del2) {
        if (typingIdx2 < typing2Txt.length) {
            $(".typing2 ul li").eq(liIndex2).append(typing2Txt[typingIdx2]); // 한글자씩 이어준다. 
            typingIdx2++;

        } else {
            typingIdx2 = 0;
            del2 = -1;
        }
    } else {
        $(".typing2 ul li").eq(liIndex2).html(typing2Txt.slice(0, del2))
        del2--;
    }
}
// 메인1 백그라운드
var canvas = document.getElementById('space'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = canvas.width; // Number of stars
// Push stars to array
for (var i = 0; i < x; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random(),
        vx: Math.floor(Math.random() * 10) - 5,
        vy: Math.floor(Math.random() * 10) - 5
    });
}
var canvas = document.getElementById("space"),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = canvas.width; // Number of stars
for (var i = 0; i < x; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random(),
        vx: Math.floor(Math.random() * 10) - 5,
        vy: Math.floor(Math.random() * 10) - 5
    });
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
function update() {
    for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.x = -s.x;
        if (s.y < 0 || s.y > canvas.height) s.y = -s.y;
    }
}
function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
}
tick();

