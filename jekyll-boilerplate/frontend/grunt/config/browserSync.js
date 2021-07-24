module.exports = {
    dev: {
        bsFiles: {
            src: ["compiled/*.html", "compiled/pages/*.html", "compiled/widgets/*.html", "compiled/components/*.html", "compiled/assets/css/**/*.css", "compiled/assets/js/**/*.js", "compiled/assets/images/**/.{jpg,png,gif}"],
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