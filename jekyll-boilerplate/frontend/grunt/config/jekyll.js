module.exports = {
    options: { // Universal options
        bundleExec: true,
        src: '<%= app.dirs.src %>'
    },
    dist: { // Target
        options: { // Target options
            dest: '<%= app.dirs.compiled %>',
            config: 'jekyll-config.yml'
        }
    }
};