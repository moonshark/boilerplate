module.exports = {
    build: {
        src: ["compiled"]
    },
    data: {
        src: ["<%= app.dirs.assemble %>/data/context"]
    },
    js: {
        src: ['<%= app.dirs.compiled %>/assets/js/*.js', // remove non min version
                '!<%= app.dirs.compiled %>/assets/js/all.min.js',
                ]
    },
    compiledJekyll: {
        src:['_site']
    }
};