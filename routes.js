var ItemModel = require("./models").ItemModel;
var appRouter = function(app){
    app.get("/category", function(req, res){

    });

    app.get("/category/:cid", function(req, res){
        
    });

    app.get("/item", function(req, res){
        ItemModel.getAll(function(error, result){
            if(error){
                return res.status(error.code).send(error.msg);
            }
            res.send(result);
        })
        
    });

    app.post("/item", function(req, res){
        ItemModel.save(req.body, function(error, result){
            if(error){
                return res.status(400).send(error);
            }
            res.send(result);
        })
        
    });

    app.get("/option", function(req, res){
        
    });
}

module.exports = appRouter;