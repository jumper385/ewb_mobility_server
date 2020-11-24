export const get = (req,res) => {
    res.json(req.body);
}

export const post = (req,res) => {
    let payload = req.body;
    console.log("we have a post");
    console.log(payload);
    res.json(payload);
}