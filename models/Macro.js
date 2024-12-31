import mongoose from 'mongoose';

const { Schema } = mongoose;

const MacroSchema = new Schema({
  protein: Number,
  carbs: Number,
  fats: Number,
});

export default mongoose.models.Macro || mongoose.model('Macro', MacroSchema);
