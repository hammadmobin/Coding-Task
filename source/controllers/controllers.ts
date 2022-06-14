/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    id: Number;
   }
   var fs = require('fs');
   var testFolder = './assets';
   var storage : object[];
    
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    fs.readdirSync(testFolder).forEach(function (file : string) {
 
        var rawdata = fs.readFileSync('./assets/'+ file);
        var student = JSON.parse(rawdata);
        //storage.push(student)
        storage = student;
        console.log(storage)
    });
    
    return res.status(200).json({
        message: storage
    });
};


// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    // let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // let post: Post = result.data;

    fs.readdirSync(testFolder).forEach(function (file : string) {
 
        var rawdata = fs.readFileSync('./assets/'+ file);
        var student = JSON.parse(rawdata);
        if(student.features[0].id == id){
        storage = student;
       // console.log(storage)
        }
    });
   
    return res.status(200).json({
        message: storage
    });
};

export default { getPosts, getPost};


