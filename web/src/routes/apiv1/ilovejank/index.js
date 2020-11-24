export const get = (req,res) => {
    res.json(req.body);
}

export const post = (req,res) => {
    let { payload } = req.body;
    let rows = payload.split('||');
    rows = rows
        .filter(x => x != '')
        .map(x => x.split(','))
        .map(x => {
            console.log(x)
            return {
                vehicle_id: x[0],
                datapoint_id: x[1],
                timestamp: x[2],
                timezone: x[3],
                data_type: x[4],
                content: x.slice(5).join(','),
            }
        });
        
    res.json('success');
}