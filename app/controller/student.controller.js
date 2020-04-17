const db = require("../models");
const Student = db.students;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const id = req.body.id;
    Student.find({ id: id})
        .then(data => {
            if (!data.id) {
                const student = new Student({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    id: req.body.id,
                    career: req.body.career,
                    semester: req.body.semester,
                    note: req.body.note,
                });

                // Save Student in the database
                student
                    .save(student)
                    .then(data => {
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while creating the Student."
                        });
                    });
            }
            else {
                res.send({ message: "User with id: " + id + " already exists" })
            }
        })
    // Create a Student

};
exports.findAll = (req, res) => {
    Student.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;
    Student.find({ id: id})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Student with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Student with id=" + id });
        });

};
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Student.findOneAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Student with id=${id}. Maybe Student was not found!`
                });
            } else res.send({ message: "Student was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Student with id=" + id
            });
        });
};
exports.updateByCareer = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const career = req.params.career;
    Student.updateMany({career:career}, {"$set":req.body}, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Student with career=${career}. Maybe Student was not found!`
                });
            } else res.send({ message: "Student was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Student with career=" + career
            });
        });
};
exports.updateBySemester = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const semester = req.params.semester;

    Student.updateMany({semester:semester}, {"$set":req.body}, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Student with semester=${semester}. Maybe Student was not found!`
                });
            } else res.send({ message: "Student was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Student with semester=" + semester
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;
    Student.removeOne({id:id})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
                });
            } else {
                res.send({
                    message: "Student was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Student with id=" + id
            });
        });

};
exports.deleteAll = (req, res) => {
    Student.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Students were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Students."
            });
        });

};
exports.findByCareer = (req, res) => {
    Student.find({ career: req.params.career })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Students."
            });
        });

};
exports.findBySemester = (req, res) => {
    Student.find({ semester: req.params.semester })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Students."
            });
        });

};
exports.average = (req, res) => {
    var average = 0
    Student.countDocuments({})
        .then(count => {
            Student.find({})
                .then(data => {
                    for (i in data) {
                        average = average + data[i].note
                    }
                    average = average / count
                    res.send({ message: "The course average is: " + average })
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })


}