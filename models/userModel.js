import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please provide password"]
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPassToken: String,
  forgotPassExpiry: Number,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
