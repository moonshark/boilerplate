module.exports = {
    options: {
        mangle: false
    },
    all: {
        files: {
            '<%= app.dirs.compiled %>/js/all.min.js': ['<%= app.dirs.compiled %>/js/all.js']
        }
    }
};