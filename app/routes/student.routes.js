module.exports = app => {
    const Students = require("../controller/student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Student
    router.post("/", Students.create);
  
    // Retrieve all Students
    router.get("/", Students.findAll);

    // Retrieve average of course
    router.get("/average", Students.average);
  
    // Retrieve a single Student with id
    router.get("/id/:id", Students.findOne);

    // Retrieve all Student with career
    router.get("/career/:career", Students.findByCareer);

    // Retrieve all Student with semester
    router.get("/semester/:semester", Students.findBySemester);
    
    // Update a Student with id
    router.put("/id/:id", Students.update);

    // Update all Student with career
    router.put("/career/:career", Students.updateByCareer);
  
    // Update all Student with career
    router.put("/semester/:semester", Students.updateBySemester);

    // Delete a Student with id
    router.delete("/id/:id", Students.delete);
  
    // Delete all Student
    router.delete("/", Students.deleteAll);
  
    app.use('/api/Students', router);
  };