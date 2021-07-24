module.exports = {
    dist: {
        "crawl": true,
        "customTests": [],
        "dest": "<%= app.dirs.compiled %>/assets/js/libs/modernizr-output.js",
        "tests": [

        ],
        "options": [
            "html5shiv",
            "setClasses"
        ],
        "files": {
            "src": [
                "src/**/*.scss",
                "!lib/**/*"
            ]
        },
        "uglify": true
    }
};