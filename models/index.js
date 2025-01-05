import mongoose from 'mongoose';

const { Schema } = mongoose;

const foodSchema = new Schema({
  Breakfast: { type: Map, of: Number },
  'Mid-Morning-Snack': { type: Map, of: Number },
  Lunch: { type: Map, of: Number },
  'Afternoon-Snack': { type: Map, of: Number },
  Dinner: { type: Map, of: Number },
  'Evening-Snack': { type: Map, of: Number },
  caloriesEaten: { type: Number, default: 0 },
  goal: { type: Number, default: 0 },
  macros: {
    protein: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    fats: { type: Number, default: 0 },
  },
}, { _id: false });

const bodyweightSchema = new Schema({
  weight: { type: Number },
  goalWeight: { type: Number },
}, { _id: false });

const UserSchema = new Schema({
  username: { type: String, required: true },
  macrosPerecents: {
    protein: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    fats: { type: Number, default: 0 },
  },
  bodyweight: {
    type: Map,
    of: bodyweightSchema,
  },
  food: {
    type: Map,
    of: foodSchema,
  },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User