module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "Lavar o capacete Vermelho"},
                {title: "Arrumar a estante de livros"}
            ]);
        }
    };
};