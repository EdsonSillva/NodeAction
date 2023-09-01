module.exports = (req, res) => {

    console.log(req.body);
    return res.json({ body: req.body });

};