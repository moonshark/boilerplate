module.exports = function(grunt) {
  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks'
    },
    data: {
      foo: 'bar',// accessible with '<%= foo %>'
      app: {
            dirs: {
                tmp: '.tmp',
                src: 'src',
                js: '<%= app.dirs.src %>/js',
                scss: '<%= app.dirs.src %>/scss',
                img: '<%= app.dirs.src %>/images',
                fonts: '<%= app.dirs.src %>/fonts',
                data: '<%= app.dirs.js %>/data',
                compiled: 'compiled',
                backend: '../backend/FireTrainingGroup.Web'
            }
        },
    },
    
  });

  require('jit-grunt')(grunt, {
    sprite: 'grunt-spritesmith',
  });
};