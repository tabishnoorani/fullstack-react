import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    googleID: {
        type: String
    }
});

const User = mongoose.model('user',userSchema);

export default User;