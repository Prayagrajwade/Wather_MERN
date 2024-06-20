import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
    city: { type: String, required: true },
    state: { type: String, required: true }
});

const Location = mongoose.model('Location',LocationSchema);

export default Location;
  