module.exports = {
        options: {
                srcPrefix: 'bower_components',
                // this removes bower folder once copied the files we need
             //   clean: true
            },
            scripts: {
                options: {
                    destPrefix: '<%= app.dirs.js %>/bower'
                },
                files: {
                    'jquery.js': 'jquery/dist/jquery.js',
                    'jquery-ui.js': 'jquery-ui/jquery-ui.js',
                    'velocity.js': 'velocity/velocity.js',
                    'velocity-ui.js': 'velocity/velocity.ui.js',
                     'select2.js': 'select2/dist/js/select2.js',
                     'jquery.lazy.js': 'jquery-lazy/jquery.lazy.js',
                     'slick.js': 'slick-carousel/slick/slick.js',
                      'jquery.matchHeight.js': 'matchHeight/dist/jquery.matchHeight.js'
                }
            },
            // css: {
            //     options: {
            //         destPrefix: '<%= app.dirs.scss %>/bower'
            //     },
            //     files: {
            //         // enter CSS files
            //     }
            // },
            folders: {
                files: {
                    '<%= app.dirs.scss %>/bower/select2': 'select2/src/scss/',
                    '<%= app.dirs.scss %>/bower/breakpoint': 'breakpoint-sass/stylesheets/'
                }
            }
};