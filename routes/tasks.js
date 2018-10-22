module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.route("/tasks")
    // .all((req,res) => {
    //     delete req.body.id;
    //     next();
    // })
    .get((req,res) => {
        console.log("listando")
        Tasks.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message})
        });
    })
    .post((req, res) => {
        console.log("Cadastrando uma task")
        console.log(req.body.title)
        Tasks.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message})
        });
    })

    app.route("/tasks/:id")
    .all((req,res) => {
        delete req.body.id;
        next();
    })
    .get((req, res) => {
        // "/tasks/id": retorna uma tarefa
    })
    .put((req,res) => {
        // "/tasks/id": atualiza uma tarefa
    })
    .delete((req,res) => {
        // "/tasks/id": deleta uma tarefa
    });
    // app.get("/tasks", (req, res) => {
    //    Tasks.findAll({}).then(tasks => {
    //        res.json({tasks: tasks});        
    //    });
    // });
};