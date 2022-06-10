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
    
    project.associate = (models) => {
        project.hasMany(models.bug, { foreignKey: 'bugId' });
        project.belongsToMany(models.user, { 
            through: 'user_project',
            onDelete: 'CASCADE'
        })
    };
    return project;
}
