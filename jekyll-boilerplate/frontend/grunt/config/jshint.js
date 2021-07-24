module.exports = {
    options: {
        '-W097': true,
        'devel': true,
        'predef': ['angular']
    },
    dev: ['Gruntfile.js', '<%= app.dirs.js %>/ui.js', '<%= app.dirs.js %>/ng-scripts.js']
};