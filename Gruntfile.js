module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/lodash/lodash.js',
                    'frontend/module.js',
                    'frontend/**/*.js',    
                    '!**/*.spec.js'
                ],
                dest: 'site/game.js'                
            }            
        },
        
        ngtemplates: {
          	minesweeper: {
                src: 'frontend/**/*.html',
                dest: 'site/templates.js',
                options: {
                    url: function (url) {
                        return url.replace(/^src/, '');
                    }
                }
            }  
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');    
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', ['concat', 'ngtemplates']);
};