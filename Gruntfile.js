/*jslint node: true */
"use strict";


module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


		bower: {
			install: {
				options: {
					install: true,
					copy: false,
					targetDir: './libs',
					cleanTargetDir: true
				}
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'app/*.js', 'app/**/*.js']
		},
		karma: {
			options: {
				configFile: 'config/karma.conf.js'
			},
			unit: {
				singleRun: true
			},

			continuous: {
				singleRun: false,
				autoWatch: true
			}
		},
		clean: {
			temp: {
				src: ['tmp']
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/app.js': ['dist/app.js']
				},
				options: {
					mangle: false
				}
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['app/*.js', 'tmp/*.js'],
				dest: 'dist/app.js'
			}
		},
		watch: {
			dev: {
				files: ['Gruntfile.js', 'app/*.js', '*.html'],
				tasks: ['jshint', 'karma:unit', 'concat:dist', 'clean:temp'],
				options: {
					atBegin: true
				}
			},
			min: {
				files: ['Gruntfile.js', 'app/*.js', '*.html'],
				tasks: ['jshint', 'karma:unit', 'concat:dist', 'clean:temp',
					'uglify:dist'
				],
				options: {
					atBegin: true
				}
			}
		},
		compress: {
			dist: {
				options: {
					archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
				},
				files: [{
					src: ['index.html'],
					dest: '/'
				}, {
					src: ['dist/**'],
					dest: 'dist/'
				}, {
					src: ['assets/**'],
					dest: 'assets/'
				}, {
					src: ['libs/**'],
					dest: 'libs/'
				}]
			}
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 8080
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', ['bower', 'jshint']);
	grunt.registerTask('dev', ['bower', 'connect:server', 'watch:dev']);
	grunt.registerTask('test', ['bower', 'jshint', 'karma:continuous']);
	grunt.registerTask('minified', ['bower', 'connect:server', 'watch:min']);
	grunt.registerTask('package', ['bower', 'jshint', 'karma:unit', 'concat:dist', 'uglify:dist', 'clean:temp', 'compress:dist']);

};
