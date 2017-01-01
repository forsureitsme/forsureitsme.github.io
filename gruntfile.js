module.exports = function(grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	const fsex = require('fs-extra');

	grunt.initConfig({
		sass: {
			style: {
				files: {
					'dist/css/style.css': 'src/scss/style.scss'
				}
			}
		},
		cssnano: {
			options: {
				discardComments: {
					removeAll: true
				}
			},
			style: {
				files: {
					'dist/css/style.css': 'dist/css/style.css'
				}
			}
		},
		'template': {
			'tpl': {
				'options': {
					data: {
						fsex: fsex
					}
				},
				'files': [{
					expand: true,
					cwd: 'src/tpl',
					src: ['*.tpl'],
					dest: 'dist',
					ext: '.html'
				}]
			}
		}
	});

	grunt.task.registerTask('prepare', 'Make sure dist directory is empty.', function() {
		fsex.emptyDirSync('dist', (error) => {
			grunt.fail.fatal('Couldn\'t assure dist directory is empty.', 3);
		});
	});

	grunt.registerTask('dist', ['prepare', 'sass:style', 'cssnano:style', 'template:tpl']);
	grunt.registerTask('default', 'dist');
};