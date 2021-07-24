module.exports = {
    dist: {
        "crawl": true,
        "customTests": [],
        "dest": "<%= app.dirs.compiled %>/js/libs/modernizr-output.js",
        "tests": [

        ],
        "options": [
            "html5shiv",
            "setClasses"
        ],
        "files": {
            "src": [
                "<%= app.dirs.scss %>/**/*.scss",
                "!lib/**/*"
            ]
        },
        "uglify": true
    }
};