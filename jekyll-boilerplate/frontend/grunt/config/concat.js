module.exports = {
    options: {
        // separator: ';',
        sourceMap: true
    },
    all: {
        src: [
            '<%= app.dirs.js %>/bower/jquery.js',
            '<%= app.dirs.js %>/bower/jquery-ui.js',
            '<%= app.dirs.js %>/bower/velocity.js',
            '<%= app.dirs.js %>/bower/velocity-ui.js',
            '<%= app.dirs.js %>/bower/select2.js',
            '<%= app.dirs.js %>/bower/jquery.lazy.js',
            '<%= app.dirs.js %>/bower/slick.js',
            '<%= app.dirs.js %>/bower/jquery.matchHeight.js',
            '<%= app.dirs.js %>/libs/modal.js',
            '<%= app.dirs.js %>/libs/lazyframe.min.js',
            '<%= app.dirs.js %>/ui.js'
        ],
        dest: '<%= app.dirs.compiled %>/assets/js/all.js',
    }
};