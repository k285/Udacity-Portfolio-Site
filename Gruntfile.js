module.exports = function (grunt) { 
	var config = grunt.file.readYAML('Gruntconfig.yml');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			options: {
	            outputStyle: 'expanded'
	        },
			dist: {
				src: config.scssDir + 'style.scss',
				dest: config.cssDir + 'style.css'
			}
		}
	});
	grunt.registerTask('default', [
		'sass'
	]);
};