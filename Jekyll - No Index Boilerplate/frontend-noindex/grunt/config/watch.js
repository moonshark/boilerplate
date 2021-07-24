// grunt/config/watch.js

module.exports = {
  options: {
                spawn: false
            },
            gruntfile: {
                files: 'Gruntfile.js',
                options: {
                    reload: true
                }
            },

            html: {
                files: ['<%= app.dirs.src %>/**/*.md', '<%= app.dirs.src %>/**/*.html', '<%= app.dirs.src %>/*.html'],
             //   tasks: ['jekyll', 'copy:compiledJekyll', 'clean:compiledJekyll'],
                  tasks: ['jekyll'],
            },

            image: {
                files: ['<%= app.dirs.img %>/**/*.{png,jpg,gif}'],
                tasks: ['newer:copy:img'],
            },

            sprite: {
                files: ['<%= app.dirs.img %>/sprite/*.png', '<%= app.dirs.img %>/sprite-2x/*.png'],
                tasks: ['sprite', 'newer:imagemin']
            },

            svg: {
                files: ['<%= app.dirs.img %>/svg/*.svg'],
                tasks: ['imagemin:svg', 'grunticon']
            },

            sassDirImport: {
                files: ['<%= app.dirs.scss %>/**/*.scss'],
                tasks: ['sass_directory_import'],
                options: {
                    event: ['added', 'deleted']
                }
            },
                
            amp: {
                files: ['<%= app.dirs.src %>/_includes/*.scss'],
                tasks: ['jekyll']
            },

            sass: {
                files: ['<%= app.dirs.scss %>/**/*.scss'],
                tasks: ['postcss:before', 'sass', 'postcss:after'],
                options: {
                    debounceDelay: 1000,
                    event: ['changed', 'added', 'deleted']
                }
            },

             js: {
                files: ['<%= app.dirs.js %>/**/*.js', '<%= app.dirs.js %>/data/*.json'],
                tasks: ['newer:jshint:dev', 'copy:js'],
            },
            // jshint: {
            //     files: ['<%= app.dirs.js %>/*.js'],
            //     tasks: ['newer:jshint:dev'],
            //     options: {
            //         event: ['changed']
            //     }
            // },

            jekyllConfig: {
                files: ['jekyll-config.yml'],
                tasks: ['jekyll', 'postcss:before', 'sass', 'postcss:after'],
            },
            data: {
                files: ['<%= app.dirs.data %>/**/*.json'],
                tasks: ['newer:jsonlint', 'newer:copy:data'],
            },
            bower: {
                // Watch for additions to bower.json then run bower_concat
                files: 'bower.json',
                tasks: ['bower_concat'],
                options: {
                    event: ['changed']
                }
            }
};