 (function() {
    /**
     * index 顶部菜单栏滑动
     */
    $(".bottom-nav-item").hover(
        function() {
            $(this).find(".slide-nav-wrap").stop().slideDown();
        },
        function() {
            $(this).find(".slide-nav-wrap").stop().slideUp();
        }
    )
    /**
     * 返回顶部
     */
    $(window).scroll(function() {
        if($(this).scrollTop() > 700) {
            $(".go-top").stop().fadeIn()
        } else {
            $(".go-top").hide()
        }
    })
    $(".go-top").click(function() {
        $(this).hide()
        $("html,body").animate({scrollTop:0},500)
    })
    /**
     * 滚动顶部固定
     */
    $(window).scroll(function() {
        if($(this).scrollTop() > 120) {
            $(".headerButtom").addClass("fixed-header")
        } else {
            $(".headerButtom").removeClass("fixed-header")
        }
    })
})();



// lunboTu

var myTimer=null;
var index=0;

function play(){
    myTimer=setInterval(()=>{
        let outIndex=index;
        index++;
        if(index>1){
            index=0;
        }
        render(index,outIndex);
    },2000);
}

function stop(){
    window.clearInterval(myTimer);
}

function goImg(transIndex){
    stop();
    let outIndex=index;
    index=transIndex;
    if(index>1){
        index=0;
    }
    render(index,outIndex);
}

function render(inIndex,outIndex){
    let imgs=$(".boxImg").children().children();
    fadeInOut(imgs[outIndex],imgs[inIndex],500);
    let lis=$("#doudouBox")[0].getElementsByTagName("li");
    lis[outIndex].style.backgroundColor="white";
    lis[inIndex].style.backgroundColor="blue";
    // let divs=$("#doudouBox").children();
    // divs[outIndex].style.backgroundColor="";
    // divs[inIndex].style.backgroundColor="blue";
}

window.onload=function(){
    var i;
    play();
    $(".boxImg")[0].onmouseover=function(){
        stop();
    }
    $(".boxImg")[0].onmouseout=function(){
        play();
    }
    $("#doudouBox")[0].onmouseout=function(event){
        let evt=event || window.event;
        evt.stopPropagation();
    }
    $("#doudouBox")[0].onmouseover=function(event){
        let evt=event || window.event;
        evt.stopPropagation();
    }
    let lis=$("#doudouBox")[0].getElementsByTagName("li");
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            goImg(i);
        }
    }
    let imgs=$("#boximg").children;
    for(let i=0;i<imgs.length;i++){
          $("#left").onclick = function(){    
            left();
        }
        $("#right").onclick = function(){  
            right();
        }
    }
}
function fadeInOut(inImg,outImg,timeLong){
    let timeSpace = 16;
    let step = 1/(timeLong/timeSpace); 
    let opacity = 0;
    let myTimer = setInterval(()=>{
        opacity+=step;
        if(opacity>=1){
            opacity = 1;
            window.clearInterval(myTimer);
        }
        inImg.style.opacity = opacity;
        inImg.style.zIndex=1;
        outImg.style.opacity = 1-opacity;
        outImg.style.zIndex=0;
    },timeSpace);
}



