const multer = require('multer');
const path = require('path');

module.exports = {
    upload: multer({
        storage: multer.diskStorage({

            destination(req, file, done) {
                done(null, 'uploads');
            },

            filename(req, file, done) {
                const ext = path.extname(file.originalname);
                const basename = path.basename(file.originalname, ext);

                // console.log('ext: ', ext);
                // console.log('basename: ', basename);

                done(null, basename + new Date().valueOf() + ext);
            },
        }),

        limits: {fileSize: 20 * 1024 * 1024},

    })
};