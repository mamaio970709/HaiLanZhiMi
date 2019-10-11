let myTimer=null;
let index=0;

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
    let imgs=$("#boximg").children;
    fadeInOut(imgs[inIndex],imgs[outIndex],500);
    let lis=$("#doudouBox").getElementsByTagName("li");
    lis[outIndex].style.backgroundColor="pink";
    lis[inIndex].style.backgroundColor="red";
    // let divs=$("#doudouBox").getElementsByTagName("div");
    // divs[outIndex].style.backgroundColor="";
    // divs[inIndex].style.backgroundColor="skyblue";
}

window.onload=function(){
    var i;
    play();
    $("#box").onmouseover=function(){
        stop();
    }
    $("#box").onmouseout=function(){
        play();
    }
    $("#doudouBox").onmouseout=function(event){
        let evt=event || window.event;
        evt.stopPropagation();
    }
    $("#doudouBox").onmouseover=function(event){
        let evt=event || window.event;
        evt.stopPropagation();
    }
    let lis=$("#doudouBox").getElementsByTagName("li");
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            goImg(i);
        }
    }
    // let imgs=$("#boximg").children;
    // for(let i=0;i<imgs.length;i++){
    //       $("#left").onclick = function(){    
    //         left();
    //     }
    //     $("#right").onclick = function(){  
    //         right();
    //     }
    // }
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

function $(str){
    if(str[0]=="#"){
        return document.getElementById(str.substring(1));
    }else if(str[0]=="."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}
