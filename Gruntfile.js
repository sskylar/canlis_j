module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      options: {
        'compress': false,
        'include css': true
      },
      compile: {
        files: {
          'assets/master.css': '_resources/_styles/master.styl',
        }
      }
    },
    concat: {
      dist: {
        src: ['node_modules/jquery/dist/jquery.min.js', '_resources/_scripts/main.js'],
        dest: 'assets/master.js',
      }
    },
    concat: {   
      dist: {
        src: [
          'node_modules/jquery/dist/jquery.js',
          // 'node_modules/waypoints/lib/jquery.waypoints.js',
          // 'node_modules/waypoints/lib/shortcuts/sticky.js',
          '_resources/_scripts/main.js'
        ], 
        dest: 'assets/master.js',
      }
    },
    exec: {
      serve: {
        cmd: 'bundle exec jekyll serve'
      }
    },
    watch: {
      scripts: {
        files: ['_resources/_scripts/*.js', 'Gruntfile.js', '_resources/_styles/*.styl'],
        tasks: ['concat', 'stylus'],
        options: {
          spawn: false
        },
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('default', ['concat', 'stylus', 'watch']);
};