import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    time: [],
    createdAt: {
        type:Date,
        default: new Date()
    },
});

const PostEvent = mongoose.model('PostEvent',postSchema);

export default PostEvent;