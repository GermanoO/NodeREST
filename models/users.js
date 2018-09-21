module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("Users",{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        email: {
            type:Sequelize.STRING,
            unique: true,
            allowNull: false,
            validade: {
                notEmpty: true
            }
        }
    }
    // ,{
    //     classMethods: {
    //         associate: (models) => {
    //             Users.hasMany(models.Tasks);
    //         }
    //     }
    // }
    );
    Users.associate = function(models) {
        Users.hasMany(models.Tasks);
    }
    return Users;
}