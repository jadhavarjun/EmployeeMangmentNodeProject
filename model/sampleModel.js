const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Fisrt Name is Required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is Required']
    },
    email: {
        type: String,
        required: [true, 'email is Required'],
        unique: true
    },
    mobile: {
        type: Number,
        required: [true, 'mobile number is required'],
        minlength: 10,
        maxlength: 10
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
});

let empModel = mongoose.model('sample', empSchema);

module.exports = class EmployeeModel {
    create = (data) => {
        console.log("inside model.js");
        try {
            return new Promise((resolve, reject) => {
                empModel.create(data)
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
        } catch (error) {
            console.log("internel server error");
        }
    }
    findAll() {
        try {
            return new Promise((resolve, reject) => {
                empModel.find()
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            })
        } catch (error) {
            console.log(error);
        }
    }

    findById(id) {
        return empModel.findById(id)
            .then(result => {
                return result;
            }).catch(error => {
                return error;
            });
    }

    updateData(id, newData) {
        return empModel.findByIdAndUpdate(id, newData)
            .then(result => {
                return result;
            })
            .catch(error => {
                return ({ message: "Something Went Wrong Please Check", error: error });
            })
    }

    deleteData(id) {
        return empModel.findByIdAndRemove(id)
            .then(result => {
                return result;
            })
            .catch(error => {
                return ({ message: "Something Went Wrong Please Check", error: error });
            })
    }

}