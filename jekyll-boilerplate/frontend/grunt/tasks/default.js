// grunt/tasks/default.js

module.exports = function(grunt) {

  //grunt.registerTask('default', ['clean:data', 'jekyll', 'jshint:dev', 'jsonlint', 'bower_concat', 'clean:scss', 'concat', 'uglify', 'copy:dev', 'sprite', 'imagemin:svg',  'grunticon', 'newer:copy:img', 'sass_directory_import', 'postcss:before', 'sass', 'postcss:after', 'modernizr', 'clean:js', 'browserSync:dev', 'watch']);
	 //grunt.registerTask('default', ['clean:data', 'jekyll', 'jshint:dev', 'jsonlint', 'bower_concat', 'concat', 'uglify', 'copy:dev', 'sprite', 'imagemin:svg',  'grunticon', 'newer:copy:img', 'sass_directory_import', 'postcss:before', 'sass', 'postcss:after', 'modernizr', 'clean:js', 'copy:compiledJekyll', 'clean:compiledJekyll', 'browserSync:dev', 'watch']);
	 


   // Front End
      grunt.registerTask('default', [
      	'bower-install-simple', 
      	'clean:data', 
      	'jekyll', 
      	'jshint:dev', 
				'jsonlint', 
				'bowercopy',
      	'copy:dev', 
      	'sprite', 
      	'grunticon', 
      	'newer:copy:img', 
      	'sass_directory_import', 
      	'postcss:before', 
      	'sass',
				'postcss:after',
				// 'modernizr',
      	// 'concat:all',
				// 'uglify:all',
      	'browserSync:dev', 
      	'watch']);
};
