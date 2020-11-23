import * as db from '../../helpers/db/mongoosehelpers'
import { Datapoint } from '../../helpers/db/schemas';

export const get = async (req, res) => {
    res.json(await db.queryCollection(Datapoint));
}

export const post = async (req, res) => {
    let { filename } = req.body
    try {
        await db.postCollection(Datapoint, {
            timestamp: new Date(),
            ...req.body
        });
        res.json(filename);
    } catch (e) {
        throw e;
    }
}