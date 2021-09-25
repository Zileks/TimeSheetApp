import mongoose from 'mongoose';
import PostEvent from '../models/event.js'


export const getEvents = async (req,res) => {
    try {
        const postEvents = await PostEvent.find();

        console.log(postEvents);
        res.status(200).json(postEvents);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createEvent = async (req,res) => {
    const { name, time } = req.body;

    const newEvent = new PostEvent({ name, time })

    try {
        await newEvent.save();

        res.status(201).json(newEvent );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostEvent.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

