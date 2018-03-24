

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        burger_name: {
            type: DataTypes.STRING,
        },

        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,

        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    });

    return Burger;
};