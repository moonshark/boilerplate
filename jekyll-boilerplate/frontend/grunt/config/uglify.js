module.exports = {
    options: {
        mangle: false
    },
    all: {
        files: {
            '<%= app.dirs.compiled %>/assets/js/all.min.js': ['<%= app.dirs.compiled %>/assets/js/all.js']
        }
    }
};