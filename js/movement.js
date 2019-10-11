
function fadeInOut(inImg,outImg,timeLong){
    let timeSpace=16;
    let step=1/(timeLong/timeSpace);    //总时间/每一次的时间间隔=次数    总路程/次数=每次应该走的路
    let opacity=0;
    let timer=setInterval(() => {
        // 1.处理数据
        opacity+=step;
        if(opacity>=1){
            opacity=1;
            clearInterval(timer);
        }
        // 2.改变外观
        inImg.style.opacity=opacity;
        inImg.style.zIndex=1;
        outImg.style.opacity=1-opacity;
        outImg.style.zIndex=0;
    }, timeSpace);
}



let myTimer = null;
let index = 0;
let imgs = $('#img').children;
let iconBox = $('#iconBox').children;

window.onload = function () {
autoPlay();
addEvent();
}
function autoPlay() {
myTimer = setInterval(() => {
    let outIndex = index;
    index++;
    if (index > imgs.length-1) {
    index = 0;
    }
    fadeInOut(imgs[index], imgs[outIndex],200);
    iconBox[index].style = 'background:black;';
    iconBox[outIndex].style = 'background:#999;';
}, 1500)
}

function addEvent() {
// 鼠标悬停
$('#box').onmouseenter = function () {
    // addLink(index);

    stopPlay();
}
$('#box').onmouseleave = function () {
    autoPlay()
};
// icon点击
for (let i = 0; i < iconBox.length; i++) {
    iconBox[i].onclick = function () {
    changeImg(i);
    }
}
}

function stopPlay() {
clearInterval(myTimer);
}

function changeImg(ord) {
let outIndex = index;
index = ord;
if (index > imgs.length-1) {
    index = 0;
}
fadeInOut(imgs[index], imgs[outIndex],200);

iconBox[index].style = 'background:black;';
iconBox[outIndex].style = 'background:#999;';

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