// grunt/config/sass.js

module.exports = {
  options: {
        outputStyle: 'expanded',
        sourceMap: true,
        includePaths: ['bower_components/breakpoint-sass/stylesheets']
    },
    dist: {
        files: {
            '<%= app.dirs.compiled %>/css/core.css': '<%= app.dirs.scss %>/core.scss'
        }
    }
};