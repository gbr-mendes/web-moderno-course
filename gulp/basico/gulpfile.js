const gulp = require('gulp')
const { series, parallel } = require('gulp')


const before1 = callback =>{
    console.log('Before 1')
    return callback()
}

const before2 = callback =>{
    console.log('Before 2')
    return callback()
}

function copy(callback) {
    gulp.src('pastaA/**/*.txt')
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
    return callback()
}

const end = callback =>{
    console.log('end')
    return callback()
}

module.exports = {default: series(
    parallel(before1,before2),
    copy,
    end
)}
