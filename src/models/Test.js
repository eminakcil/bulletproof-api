import Mongoose from "mongoose";

const schema = new Mongoose.Schema(
  {
    subject: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default Mongoose.model("test", schema);
