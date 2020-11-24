import * as db from '../../helpers/db/mongoosehelpers'
import { Datapoint } from '../../helpers/db/schemas';

export const get = async (req, res) => {
    res.json(await db.queryCollection(Datapoint));
}

export const post = (req,res) => {
    try {
        let { payload, filename } = req.body;
        let rows = payload.split('||');
        rows = rows
            .filter(x => x != '')
            .map(x => x.split(',')
            .filter(x => x.length > 1 ))
            .map(x => {
                return {
                    vehicle_id: x[0],
                    datapoint_id: x[1],
                    timestamp: x[2],
                    timezone: x[3],
                    data_type: x[4],
                    content: x.slice(5).join(','),
                    uploadFileName: filename,
                }
            });

        db.postCollection(Datapoint, rows);
        console.log(`Saved Upload from ${filename}`)
        res.json('success');
    } catch (e) {
        console.log(e)
    }
}