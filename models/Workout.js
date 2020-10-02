const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: 'Enter an exercise type',
        },
        name: {
          type: String,
          trim: true,
          required: 'Enter an exercise name',
        },
        duration: {
          type: Number,
          required: 'Enter an exercise duration in minutes',
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

exerciseSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );
});

const Workout = mongoose.model('Workout', exerciseSchema);

module.exports = Workout;
