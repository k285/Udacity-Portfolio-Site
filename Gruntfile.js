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
	            width: 650,
	            suffix: '_small',
	            quality: 50
	          }]
	        },
	        files: [{
	          expand: true,
	          src: ['portfolio*.png'],
	          cwd: 'images_src/',
	          dest: 'images/'
	        }]
	      },
	      banner_image: {
	        options: {
	          engine: 'im',
	          sizes: [{
	            width: 1600,
	            suffix: '_large',
	            quality: 50
	          },{
	            width: 800,
	            suffix: '_small',
	            quality: 50
	          }]
	        },
	        files: [{
	          expand: true,
	          src: ['banner.jpg'],
	          cwd: 'images_src/',
	          dest: 'images/'
	        }]
	      },
	      logo_image: {
	        options: {
	          engine: 'im',
	          sizes: [{
	            width: 140,
	            suffix: '_large',
	            quality: 50
	          },{
	            width: 100,
	            suffix: '_small',
	            quality: 50
	          }]
	        },
	        files: [{
	          expand: true,
	          src: ['logo.png'],
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