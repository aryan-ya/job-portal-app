import { application } from "express";
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    requirements:{
        type:String,
        required: true
    },
    salary:{
        type:Number,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required :true
    },
    applications :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Applications',
        }
    ]

    

},{timestamps:true});

export const job = mongoose.model('job', jobSchema);
