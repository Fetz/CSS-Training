module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'sass/*.scss',
                tasks: ['compass']
            },
            html: {
                files: ['example_sass.html']
            }
        }
    });

    // Load the plugin that provides the "compass" task.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['compass', 'watch']);
};