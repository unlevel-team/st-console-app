module.exports = function(grunt) {

  grunt.initConfig({
	  
    pkg: grunt.file.readJSON('package.json'),
    
    
    rsync: {
        options: {
            args: ["--verbose"],
            exclude: [".git*","*.scss","node_modules"],
            recursive: true
        },
        dev: {
            options: {
                src: "./../NLVL_STforBrowser/dist/",
                dest: "./bower_components/st.forbrowser/dist/",
                delete: true
            }
        }
    },
    
    
    
    copy: {
     lib: {
	    expand: true,
	    cwd: './../NLVL_STforBrowser/dist/',
	    src: '**',
	    dest: './bower_components/st.forbrowser/dist/',
	  
	  }
	},
    
    
    // Babel task (for transpile code)
    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015-script']
        },
        
        
        dist: {
            files: [{
                "expand": true,
                "cwd": "src/stforBrowser/",
                "src": ["**/*.js"],
                "dest": "build/stforBrowser/",
                "ext": ".js"
            }]
        }
    },
    
    
    
    // Browserify task (for transpile code)
    
//    browserify: {
//    	build: {
//    		src: 'index.js',
//    		dest: 'bundle.js'
//    	}
//    },
      
    
    browserify: {

    	build: {
    		src: 'build/stforBrowser/stforBrowser.js',
    		dest: 'dist/stforBrowser/stforBrowser.js'
    	},
    	
    	dist: {
    		files: {
    			'dist/stforBrowser/stforBrowser.js': ['build/**/*.js', '!build/**/*-test.js']
    		},
    		options: {
    			browserifyOptions: {
    				debug: true
    			}
    		}
    	}
    },
    
    
    
    
    // Concat task (for concatenate code)
    concat: {
      options: {
    	// define a string to put between each file in the concatenated output
        separator: ''  
      },
      dist: {
    	// the files to concatenate
        src: ['build/**/*.js'],
        
        // the location of the resulting JS file
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    
    
    // Ugligy task (for compress the data)
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/stforBrowser/stforBrowser.js']
        }
      }
    },
    
    
    // Qunit task (for test)
    qunit: {
      files: ['test/**/*.html']
    },
    
    
    // Jshint task (for check JS)
    jshint: {
      files: [
              'Gruntfile.js', 
              'dist/st.forbrowser.js', 
              'test/**/*.js'
              ],
      options: {
//    	  globalstrict: true,
    	  
    	  
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
          require: false
        }
      }
    },
    
    
    // Watch task (for automatize actions)
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
    
    
    
    
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks("grunt-rsync");
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('test', ['babel', 'jshint', 'qunit']);
  
  grunt.registerTask('compile', ['babel', 'browserify', 'jshint']);

  grunt.registerTask('default', ['babel', 'browserify', 'jshint', 'uglify']);

  
};