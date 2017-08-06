var gulp=require("gulp");
var htmlmin=require("gulp-htmlmin");
var css=require("gulp-clean-css");
var watch=require("gulp-watch");
var connect=require("gulp-connect");
//压缩html
gulp.task('TestHtmlmin',function(){

	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
	}

	gulp.src('index.html')
		.pipe(htmlmin(options))
		//.pipe(rename("index.main.html"))
		.pipe(gulp.dest('./'));
});
//压缩css
gulp.task("cleancss",function(){
   gulp.src("./css/style.css")
  // .pipe(rename("style2.main.css"))
   .pipe(css())
   .pipe(gulp.dest("./css"))
})
gulp.task("server",function(){
  connect.server({
    port:8080,
    livereload:true
  })
})
gulp.task('reload',function(){
  console.log("重新刷新");
})
gulp.task("watch",function(){
   gulp.watch("./index.html",['reload'])
})
gulp.task("default",["TestHtmlmin","cleancss","server","watch"])
