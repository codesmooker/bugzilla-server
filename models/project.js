module.exports = (sequelize, DataTypes) => {
    const project = sequelize.define('project', {
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
        }
    });
    return project;
}
