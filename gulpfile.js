const gulp = require("gulp");
const sass = require("gulp-sass");



// 监听任务
gulp.task("watchall",async ()=>{
    // 监听html，进行复制
    gulp.watch("*.html",async()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("c:\\phpstudy\\www\\HaiLanZhiMi"))
    })


    //监听sass文件
    gulp.watch("scss/*.scss",async ()=>{
        gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
    })

    //监听js，进行复制
    gulp.watch("js/*.js",async()=>{
        gulp.src("js/*.js")
        .pipe(gulp.dest("c:\\phpstudy\\www\\HaiLanZhiMi\\js"))
    })

    gulp.watch("css/*.css",async()=>{
        gulp.src("css/*.css")
        .pipe(gulp.dest("c:\\phpstudy\\www\\HaiLanZhiMi\\css"))
    })
})

// gulp.task("copy",function(){
//     return gulp.src("./**/*").pipe(gulp.dest("C:\\phpStudy\\WWW\\HaiLanZhiMi"));
// });