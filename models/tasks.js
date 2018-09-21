module.exports = (sequelize, Sequelize) => {
    const Tasks = sequelize.define("Tasks", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
        },
        done: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
     
    }
    // , {
    //     classMethods: {
    //         associate: (models) => {
    //             Tasks.belongsTo(models.Users)
    //         }
    //     }
    // }
    );
    Tasks.associate = function(models) {
        Tasks.belongsTo(models.Users);
    }
    return Tasks;
};

// module.exports = app => {
//     return {
//         findAll: (params, callback) => {
//             return callback([
//                 {title: "Lavar o capacete Vermelho"},
//                 {title: "Arrumar a estante de livros"}
//             ]);
//         }
//     };
// };