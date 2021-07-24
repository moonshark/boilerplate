module.exports = {
    core: {
        src: '<%= app.dirs.img %>/sprite/*.png',
        dest: '<%= app.dirs.img %>/sprite.png',
        destCss: '<%= app.dirs.scss %>/_sprite.scss',
        algorithm: 'top-down',
        padding: 0
    },

    retina: {
        src: '<%= app.dirs.img %>/sprite-2x/*.png',
        dest: '<%= app.dirs.img %>/sprite-2x.png',
        destCss: '<%= app.dirs.scss %>/_sprite-2x.scss',
        algorithm: 'top-down',
        padding: 0
    }
};