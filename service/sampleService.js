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

    findRecordById(id){
        try {
            console.log("Inside find record by id service");
            return objempModel.findById(id)
            .then((result) => {
                return ({ message: "Employee Record Find Successfully", data: result });
            })
            .catch((error) => {
                return ({ message: "Employee Record is Not found", error: error });
            })
        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }

    updateData(id, newData){
        try {
            return objempModel.updateData(id, newData)
            .then((result) =>{
                return ({ message: "Employee Record Update Successfully", data: result });
            })
            .catch((error)=> {
                return ({ message: "Employee Record is Not found", error: error });
            })
        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }

    deleteData(id){
        try {
            return objempModel.deleteData(id)
            .then((result) =>{
                return ({ message: "Employee Record Deleted Successfully", data: result });
            })
            .catch((error)=> {
                return ({ message: "Employee Record is Not found", error: error });
            })
        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }
}