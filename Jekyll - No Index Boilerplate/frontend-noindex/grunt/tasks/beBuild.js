// grunt/tasks/default.js

module.exports = function(grunt) {

    /*Backend*/
    grunt.registerTask('beBuild', [
        'bower-install-simple',
        'clean:data',
        'jekyll',
        'jshint:dev',
        'jsonlint',
        'bowercopy',
        'concat',
        'uglify',
        'copy:dev',
        'sprite',
        'grunticon',
        'newer:copy:img',
        'sass_directory_import',
        'postcss:before',
        'sass',
        'postcss:after',
        // 'modernizr',
        'clean:js'
    ]);
};