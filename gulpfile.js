const path = require("path");
const { src, dest, watch, series } = require("gulp");
const lessPlugin = require("gulp-less");
const LessPluginAutoPrefix = require("less-plugin-autoprefix");
const autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });
const sourcemaps = require("gulp-sourcemaps");
const uglifycss = require("gulp-uglifycss");
const rename = require("gulp-rename");
const clean = require("gulp-clean");

function cleanTask() {
    return src("./dist/**/*", { read: false })
        .pipe(clean());
}

function lessTask() {
    return src("./src/**/*.less")
        .pipe(sourcemaps.init())
        .pipe(lessPlugin({
            paths: [path.join(__dirname, "src")],
            plugins: [autoprefix]
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(dest("./dist"));
}

function uglifyTask() {
    return src("./dist/**/*.css")
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(rename({ extname: ".min.css" }))
        .pipe(dest("./dist"));
}

const buildT = series(cleanTask, lessTask, uglifyTask);
const watchT = function () {
    watch("./src/**/*.less", series(cleanTask, lessTask, uglifyTask));  // TODO!: Fix watch task
}

exports.build = buildT;
exports.watch = watchT;
exports.default = buildT;