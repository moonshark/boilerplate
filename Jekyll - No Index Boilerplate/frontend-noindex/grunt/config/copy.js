module.exports = {
    dev: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.fonts %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/fonts'
        }, {
            expand: true,
            cwd: '<%= app.dirs.js %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/js'
        }, ]
    },
    js: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.js %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/js'
        }, ]
    },
    data: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.data %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/js/data'
        }]
    },
    img: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.img %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/images'
        }]
    },
    prod: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.fonts %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/fonts'
        }, {
            expand: true,
            cwd: '<%= app.dirs.data %>',
            src: ['**/*'],
            dest: '<%= app.dirs.compiled %>/js/data'
        }]
    },
    backend: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.compiled %>/css',
            src: ['**/*'],
            dest: '<%= app.dirs.backend %>/css'
        }, {
            expand: true,
            cwd: '<%= app.dirs.compiled %>/fonts',
            src: ['**/*'],
            dest: '<%= app.dirs.backend %>/fonts'
        }, {
            expand: true,
            cwd: '<%= app.dirs.compiled %>/images',
            src: ['**/*'],
            dest: '<%= app.dirs.backend %>/images'
        }, {
            expand: true,
            cwd: '<%= app.dirs.compiled %>/video',
            src: ['**/*'],
            dest: '<%= app.dirs.backend %>/video'
        }, {
            expand: true,
            cwd: '<%= app.dirs.compiled %>/js',
            src: ['all.min.js'],
            dest: '<%= app.dirs.backend %>/js'
        }]
    }
};