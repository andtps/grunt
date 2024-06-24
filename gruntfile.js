module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          "src/styles/main.css": "src/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "dist/styles/main.css": "src/styles/main.less",
        },
      },
    },
    uglify: {
      target: {
        files: {
          "dist/script/main.min.js": "src/script/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.registerTask("default", ["less", "uglify"]);
};
