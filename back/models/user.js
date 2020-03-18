module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {

        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },

        userPassword: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        userNickname: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },

        userProfileImage: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });

    User.associate = (db) => {
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked'});
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId' });
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId' });
    };


    return User;

};