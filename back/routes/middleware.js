const db = require('../models/index');

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        // console.log('req.isAuthenticated(): ', req.isAuthenticated());
        next();

    } else {
        return res.status(401).send('로그인이 필요합니다.');
    }
};

exports.isPostExists = async (req, res, next) => {

    try {

        const post = await db.Post.findOne({
            where: {id: req.params.postId},
        });

        if (!post) {
            return res.status(404).send('게시글이 존재하지 않습니다.');
        }

        // res.locals.post = post;

        next();

    } catch (e) {
        console.error(e);
        next(e);
    }

};