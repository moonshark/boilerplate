module.exports = {
    build: {
        src: ["compiled"]
    },
    data: {
        src: ["<%= app.dirs.assemble %>/data/context"]
    },
    js: {
        src: ['<%= app.dirs.compiled %>/js/*.js', // remove non min version
                '!<%= app.dirs.compiled %>/js/all.min.js',
                ]
    },
    compiledJekyll: {
        src:['_site']
    }
};