import mongoose from "mongoose";
const Schema = mongoose.Schema;

const modelName = "ContactModel";

const modelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },

    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

if (!mongoose.models[modelName]) {
  mongoose.model(modelName, modelSchema);
}

export default mongoose.models[modelName];
