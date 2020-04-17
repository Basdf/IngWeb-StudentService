module.exports = mongoose => {
    const Student = mongoose.model(
        "student",
        mongoose.Schema(
            {
                firstName: {
                    type: String,
                    required: true
                },
                lastName: {
                    type: String,
                    required: true
                },
                email: {
                    type: String,
                    required: true
                },
                id: {
                    type: String,
                    required: true
                },
                career: {
                    type: String,
                    required: true
                },
                semester: {
                    type: String,
                    required: true
                },
                note: {
                    type: Number,
                    required: true
                }
            },
            { timestamps: true }
        )
    );
    return Student;
};