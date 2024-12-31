import mongoose from 'mongoose';

const { Schema } = mongoose;

const MealSchema = new Schema({
  Breakfast: Object,
  'Mid-Morning-Snack': Object,
  Lunch: Object,
  'Afternoon-Snack': Object,
  Dinner: Object,
  'Evening-Snack': Object,
  caloriesEaten: Number,
  goal: Number,
  macros: { type: Schema.Types.ObjectId, ref: 'Macro' },
});


export default mongoose.models.MealSchema || mongoose.model('Meal', MealSchema)
