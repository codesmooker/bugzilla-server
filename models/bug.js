module.exports = (sequelize, DataTypes) => {
    const bug = sequelize.define('bug', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 3
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        image: {
            type: DataTypes.STRING
        },
        deadline: {
            type: DataTypes.DATE
        },
        bugType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return bug;
}
