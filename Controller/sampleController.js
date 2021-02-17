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

    findById(req, res) {
        console.log("Inside find record by id Controller");
        console.log(req.params.id);
        try {
            let empid = req.params.id;
            objService.findRecordById(empid)
                .then((result) => {
                    console.log("pass", req.params);
                    response.success = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });
        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }

    updateData(req, res) {
        try {
            let newData = req.body.update;
            let empid = req.params.id;
            console.log("newData", newData);
            console.log("id", empid);
            objService.updateData(empid, newData)
                .then((result) => {
                    console.log("pass", req.params);
                    response.success = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });

        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }

    deleteData(req, res) {
        try {
            let empid = req.params.id;
            console.log("id", empid);
            objService.deleteData(empid)
                .then((result) => {
                    console.log("pass", req.params);
                    response.success = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });
        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }
}