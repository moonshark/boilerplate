module.exports = {
    before: {
        options: {
            processors: [
            //    require('stylelint')(stylelintConfig),
                require('postcss-reporter')({
                    clearMessages: true,
                    throwError: true
                })
            ],
            syntax: require('postcss-scss'),
            writeDest: false
        },
        src: ['<%= app.dirs.scss %>/**/*.scss', '!<%= app.dirs.scss %>/_bower.scss', '!<%= app.dirs.scss %>/_sprite.scss', '!<%= app.dirs.scss %>/_sprite-2x.scss', '!<%= app.dirs.scss %>/font-awesome/**/*.scss']
    },
    after: {
        options: {
            map: true,
            processors: [
                require('lost')(),
                require('autoprefixer')({
                    browsers: [
                        "Android 2.3",
                        "Android >= 4",
                        "Chrome >= 20",
                        "Firefox >= 24",
                        "Explorer >= 8",
                        "iOS >= 6",
                        "Opera >= 12",
                        "Safari >= 6"
                    ],

                    grid: false
                }),
            ]
        },
        src: ['<%= app.dirs.compiled %>/assets/css/*.css', '!<%= app.dirs.compiled %>/assets/css/*.css.map']
    }
};