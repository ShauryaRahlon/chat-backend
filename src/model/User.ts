import mongoose, { Schema, Document } from "mongoose";
export interface Message extends Document {
  content: string;
  sender: string;
  createdAt: Date;
}

const meesageSchema: Schema<Message> = new Schema<Message>({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpires: Date;
  isVerified: boolean;
  isAcceptingMessages: boolean;
  messages: Message[];
}

const userSchema: Schema<User> = new Schema<User>({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verification code is required"],
  },
  verifyCodeExpires: {
    type: Date,
    required: [true, "Verification code expiration date is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messages: [meesageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);
export default UserModel;
