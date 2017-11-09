module.exports = function(grunt) {
    // 加载插件
    [
        'grunt-contrib-copy'
    
    ].forEach(function (task) {
        grunt.loadNpmTasks(task);
    });
    // 配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //复制用包管理工具安装的库或文件到vendor目录下
        copy: {
            main: {
                files: [
                    //copy bootstrap
                    {
                        expand: true,flatten: true,
                        src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'],
                        dest: 'public/vendor/bootstrap/dist/css/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,flatten: true,
                        src: ['bower_components/bootstrap/dist/js/bootstrap.min.js'],
                        dest: 'public/vendor/bootstrap/dist/js/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,flatten: true,
                        src: ['bower_components/bootstrap/dist/fonts/*.*'],
                        dest: 'public/vendor/bootstrap/dist/fonts/',
                        filter: 'isFile'
                    },
                    //copy jquery
                    {
                        expand: true,flatten: true,
                        src: ['bower_components/jquery/dist/jquery.min.js'],
                        dest: 'public/vendor/jquery/dist/',
                        filter: 'isFile'
                    },
                    //copy validator-js
                    {
                        expand: true,flatten: true,
                        src: ['node_modules/validator/validator.min.js'],
                        dest: 'public/vendor/validator/',
                        filter: 'isFile'
                    },
                ],
            },
        },
    });
    // 默认任务
};