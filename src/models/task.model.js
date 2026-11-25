const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Task title is required"],
        minlength: [3, "Title must be at least 3 characters"],
        maxlength: [100, "Title cannot exceed 100 characters"],
        trim: true
    },

    description: {
        type: String,
        maxlength: [500, "Description cannot exceed 500 characters"],
        trim: true
    },

    status: {
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);