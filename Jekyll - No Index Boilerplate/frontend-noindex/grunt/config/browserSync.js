module.exports = {
    dev: {
        bsFiles: {
            src: ["compiled/*.html", "compiled/pages/*.html", "compiled/widgets/*.html", "compiled/components/*.html", "compiled/css/**/*.css", "compiled/js/**/*.js", "compiled/images/**/.{jpg,png,gif}"],
        },
        options: {
            watchTask: true,
            server: {
                baseDir: "compiled"
            }
        }
    },
    build: {
        options: {
            watchTask: false,
            server: {
                baseDir: "compiled"
            }
        }
    }
};