module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isLowercase: true,
                notEmpty: true,
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUUID: 4
            }
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Developer', 'Manager', 'QA']], 
            }
        }
    });

    user.associate = (models) => {
        user.belongsToMany(models.project, {
            through: 'user_project'
        });
        user.hasMany(models.bug, {
            as: 'creatorUser',
            foreignKey: 'creatorUserId'
        });
        user.hasMany(models.bug, {
            as: 'developerUser',
            foreignKey: 'developerUserId'
        });
    }
    return user;
}
