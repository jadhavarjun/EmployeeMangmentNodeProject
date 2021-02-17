const Controller = require('../Controller/sampleController')
let controller1 = new Controller()
module.exports = (app) => {
    app.get("/get", controller1.getData)

    app.get("/getById/:id", controller1.findById)

    app.post("/create", controller1.create)

    app.put("/update/:id", controller1.updateData)

    app.delete("/delete/:id", controller1.deleteData)
} 