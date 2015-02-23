module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        tinypng: {
            options: {
                apiKey: 'jWWNr8xT2zrdcLfXsX2rvdFLDmhlP8n1',
                sigFile: 'src/img/images_signatures.json',
                checkSigs: true,
                summarize: true,
                showProgress: true,
                stopOnImageError: true
            },
            compress: {
                files: {
                    'src/img/roze-min.png': 'src/img/roze.png'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-tinypng');

    grunt.registerTask('default', [
    ]);

    grunt.registerTask('compress-images', ['tinypng']);

};