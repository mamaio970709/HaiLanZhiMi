const gulp = require("gulp");
const sass = require("gulp-sass");



//监听任务
gulp.task("watchall",async ()=>{
    //监听html，进行复制
    gulp.watch("*.html",async()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("c:\\dat35\\HaiLanZhiMi"))
    })


    //监听saaa文件
    gulp.watch("sass/**/*",async ()=>{
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("c:\\dat35\\HaiLanZhiMi\\css"))
    })

    //监听js，进行复制
    gulp.watch("js/*.js",async()=>{
        gulp.src("js/*.js")
        .pipe(gulp.dest("c:\\dat35\\HaiLanZhiMi\\js"))
    })
})