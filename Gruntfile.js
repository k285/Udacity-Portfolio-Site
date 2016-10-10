module.exports = function (grunt) { 
	var config = grunt.file.readYAML('Gruntconfig.yml');
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			dist: {
				src: config.scssDir + 'style.scss',
				dest: config.cssDir + 'style.css'
			}
		},
		concat: {
			dist: {
				src: config.jsSrcDir + '*.js',
				dest: config.jsConcatDir + 'scripts.js'
			}
		}
	});
	grunt.registerTask('default', [
		'sass',
		'concat'
	]);
};