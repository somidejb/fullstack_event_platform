import exp from "constants";
import { Schema, model, models } from "mongoose";
import Document from "next/document";


export interface ICategory extends Document {
    _id: string;
    name: string;
}
const CategorySchema = new Schema({
    name: {type: String, required: true, unique: true},
});

const Category = models.Category || model('Category', CategorySchema);

export default Category;