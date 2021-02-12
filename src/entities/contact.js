import mongoose, { Schema } from "mongoose";

export const ContactSchema = new Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: true,
    },
    lastname: {
      type: String,
      trim: true,
      required: true,
    },
    companyname: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    emailaddress: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
      required: true,
    },
    telephone: {
      type: Number,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    faxnumber: {
      type: Number,
      required: true,
    },
  },
  { collection: "contacts" }
);

export default mongoose.model("Contact", ContactSchema);
