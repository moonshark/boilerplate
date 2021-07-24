module.exports = {
    dev: {
        files: [{
            expand: true,
            cwd: '<%= app.dirs.img %>/svg/',
            src: ['*.svg'],
            dest: "<%= app.dirs.compiled %>/assets/images/svg/output"
        }],
        options: {
            // Handle your options as you normally would here
            enhanceSVG: true,
            embedIcons: true,
            previewTemplate: '<%= app.dirs.img %>/svg/icons-preview.hbs',
            template: '<%= app.dirs.img %>/svg/custom-css.hbs'
        }
    }
};