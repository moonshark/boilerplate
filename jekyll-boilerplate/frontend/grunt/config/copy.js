module.exports = {
    dev: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.fonts %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/assets/fonts'
        }, {
            expand: true,
            cwd: '<%= app.dirs.js %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/assets/js'
        }, ]
    },
    js: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.js %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/assets/js'
        }, ]
    },
    data: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.data %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/assets/js/data'
        }]
    },
    img: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.img %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/assets/images'
        }]
    },
    prod: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.fonts %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/assets/fonts'
        }, {
            expand: true,
            cwd: '<%= app.dirs.data %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/assets/js/data'
        }]
    },
    backend: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.compiled %>/assets/css',
            src: ['**/*'],
            dest: '<%= app.dirs.backend %>/css'
        }, {
            expand: true,
            cwd: '<%= app.dirs.compiled %>/assets/fonts',
            src: ['**/*'],
            dest: '<%= app.dirs.backend %>/fonts'
        }, {
            expand: true,
            cwd: '<%= app.dirs.compiled %>/assets/images',
            src: ['**/*'],
            dest: '<%= app.dirs.backend %>/images'
        }, {
            expand: true,
            cwd: '<%= app.dirs.compiled %>/assets/video',
            src: ['**/*'],
            dest: '<%= app.dirs.backend %>/video'
        }, {
            expand: true,
            cwd: '<%= app.dirs.compiled %>/assets/js',
            src: ['all.min.js'],
            dest: '<%= app.dirs.backend %>/js'
        }]
    }
};