import * as mongoose from 'mongoose'  //es el esquema para guardar en mongo

export const TodoSchema= new mongoose.Schema({
  name: String,
  completed: {type: Boolean, default: false},
  createAt:{
    type: Date,
    default: Date.now,
  }
});
