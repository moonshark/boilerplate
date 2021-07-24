module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 

        app: {
            dirs: {
                src: 'src',
                img: '<%= app.dirs.src %>/images',
                css: '<%= app.dirs.src %>/css'
            },
        },

        copy: {
            img: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dirs.src %>/images',
                    src: ['**/*'],
                    dest: 'compiled/images'
                }]
            }
        },


        includes: {
            build: {
                cwd: '<%= app.dirs.src %>',
                src: ['*.html'],
                dest: 'compiled/',
                options: {
                    flatten: true,
                    includePath: '<%= app.dirs.src %>/includes'
                }
            }
        }, 


        watch: {
            /*Commented out livereload as this now being handled by browserSync*/
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
                files: ['<%= app.dirs.src %>/*.html', '<%= app.dirs.src %>/**/*.html', '<%= app.dirs.src %>/**/**/*.html'],
                tasks: ['includes', 'premailer'],
            },
            
            image: {
                files: ['<%= app.dirs.img %>/**/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
            },

            css: {
                files: ['<%= app.dirs.css %>/styles.css'],
                tasks: ['includes', 'premailer'],
            }

        }, 

        imagemin: {
            dynamic: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: '<%= app.dirs.img %>/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'compiled/images/' // Destination path prefix
                }]
            }
        },  

        premailer: {
            simple: {
              options: {
                css: ['<%= app.dirs.css %>/styles.css'],
                //removeClasses: true
              },
              files: {
                'compiled/index.html': ['compiled/index.html']
              }
            }
          },


        /*BrowserSync task below sets up a simple hhtp server and auto refresh/insert. It also has some very cool features with accessing on LAN*/
        browserSync: {
            dev: {
                bsFiles: {
                    src : ["compiled/*.html"],
                },
                options: {
                    watchTask: true,
                    server: {
                     baseDir: "compiled"
                    } 
                }
            },
            build:{
                options: {
                    watchTask: false,
                    server: {
                        baseDir: "compiled"
                    } 
                }
            }
        }        

    });

    /*Frontend*/
    grunt.registerTask('default', ['includes','copy','newer:imagemin', 'premailer', 'browserSync:dev', 'watch']);
};

