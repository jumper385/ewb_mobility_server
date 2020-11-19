import * as bcrypt from 'bcrypt'
import * as db from '../../../helpers/db/mongoosehelpers'
import { Vehicle } from '../../../helpers/db/schemas';

export const get = async (req,res) => {
    res.json("hello world");
}

export const post = async (req,res) => {
    const {vehicleid, password} = req.body;
    // res.json(await bcrypt.hash(password, 10))
    res.json(await db.postCollection(Vehicle, {
        ...req.body, 
        pwd_hash: bcrypt.hash(password, 10)
    }));
}