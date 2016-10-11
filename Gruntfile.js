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
		},
		responsive_images: {
	      dev: {
	        options: {
	          engine: 'im',
	          sizes: [{
	            width: 800,
	            suffix: '_small',
	            quality: 50
	          }]
	        },
	        files: [{
	          expand: true,
	          src: ['*.{jpg,}'],
	          cwd: 'images_src/',
	          dest: 'images/'
	        }]
	      }
	    }
	});
	grunt.registerTask('default', [
		'sass', 'responsive_images'
	]);
};