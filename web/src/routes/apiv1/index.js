import * as db from '../../helpers/db/mongoosehelpers'
import { Datapoint } from '../../helpers/db/schemas';

export const get = async (req, res) => {
    let {query} = req.body;
    res.json(await db.queryCollection(Datapoint, query));
}

export const post = (req,res) => {
    try {
        let { payload, filename } = req.body;
        let rows = payload
            .split('||')
            .filter(x => x != '')
            .map(x => x.split(',')
            .filter(x => x.length > 1 ))
            .map(x => ({
                vehicle_id: x[0],
                datapoint_id: x[1],
                timestamp: x[2],
                timezone: x[3],
                data_type: x[4],
                content: x.slice(5).join(','),
                uploadFileName: filename,
            }));


            export const Datapoint = mongoose.model('datapoint', {
                'vehicle_id': {type: String, required: true},
                'datapoint_id': {type: String, required: true},
                'timestamp': {type: Date, required: true},
                'data_type': {type: String, required: true},
                'content': {type: String, requried: true},
                'timezone':{type: String, required: true},
            })

        console.log(rows)
        console.log(payload)

        db.postCollection(Datapoint, rows);
        console.log(`Saved Upload from ${filename}`)
        res.json('success');
    } catch (e) {
        console.log(e)
    }
}