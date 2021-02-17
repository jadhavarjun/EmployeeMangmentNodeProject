const empModel = require('../model/sampleModel');

const objempModel = new empModel();

module.exports = class EmployeeService {
    insert(data) {
        console.log("inside service.js")
        try {
            return objempModel.create(data)
                .then((result) => {
                    return ({ message: "Employee Record insert Successfully", data: result });
                })
                .catch((error) => {
                    return ({ message: "Failed to inset Employee record", error: error });
                })
        } catch (error) {
            console.log(error);
        }
    }

    findAll() {
        console.log("inside service.js")
        try {
            return objempModel.findAll()
                .then((result) => {
                    return ({ message: "Employee Record insert Successfully", data: result });
                })
                .catch((error) => {
                    return ({ message: "Failed to inset Employee record", error: error });
                })
        } catch (error) {
            console.log(error);
        }
    }
}