const sampleService = require('../service/sampleService');

const objService = new sampleService();
const response = {};
module.exports = class Controller {
    getData(req, res) {
        console.log("inside controller");
        try {
            objService.findAll()
            .then((result) => {
                console.log("inside controller. then")
                // console.log("pass", req.body);
                response.data = result.data;
                response.success = true;
                response.message = result.message;
                res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.data = err.message;
                res.status(400).send(response);
            });
        } catch (error) {
            console.log(error);

        }
    }

    create(req, res) {
       console.log("inside controller");
        try {
            objService.insert(req.body)
            .then((result) => {
                console.log("inside controller. then")
                console.log("pass", req.body);
                response.success = true;
                response.message = result.message;
                res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.data = err.message;
                res.status(400).send(response);
            });
        } catch (error) {
            console.log(error);

        }

    }
}