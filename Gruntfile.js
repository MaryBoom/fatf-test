module.exports = function(grunt) {

    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	less:{
	    compile:{
		files:{
		    'dist/<%= pkg.name %>.css' : 'src/less/site.less'
		}
	    }
	},
	concat: {
	    options: {
		separator: ';'
	    },
	    dist: {
		src: ['src/**/*.js'],
		dest: 'dist/<%= pkg.name %>.js'
	    }
	},
	uglify: {

	    dist: {
		files: {
		    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
		}
	    }
	},
	copy: {
	    main : {
		files: [
		    {
			expand: true,
			cwd   :'src/',
			src   : 'index.html',
			dest  : 'dist/'
		    },
		    {
			expand: true,
			cwd   :'src/',
			src   : 'img/*',
			dest  : 'dist/'
		    }
		]
	    }
	}
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['less', 'concat', 'uglify','copy']);

};
