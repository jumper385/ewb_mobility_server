export const get = (req,res) => {
    res.json(req.body);
}

export const post = (req,res) => {
    console.log("we have a post");
    console.log(req.body);
    res.json(req.body);
}