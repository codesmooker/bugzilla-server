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
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creatorUserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        developerUserId: {
            type: DataTypes.INTEGER
        }
    });

    bug.associate = (models) => {
        bug.belongsTo(models.user, {
            as: 'creatorUser',
            foreignKey: 'creatorUserId'
        });
        bug.belongsTo(models.user, {
            as: 'developerUser',
            foreignKey: 'developerUserId'
        });
        bug.belongsTo(models.project, {
            foreignKey: 'projectId'
        })
    }
    return bug;
}
