const Controller = require('../Controller/sampleController')
let controller1 = new Controller()
module.exports = (app) => {
    app.get("/get", controller1.getData)

    // app.get("/getById/:id", controller1)
        
    app.post("/create", controller1.create)
} 