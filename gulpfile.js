const gulp = require("gulp")




//监听任务
gulp.task("watchall",async ()=>{
    //监听html，进行复制
    gulp.watch("*.html",async()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("c:\\dat35\\HaiLanZhiMi"))
    })
})