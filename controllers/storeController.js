exports.homePage = (req, res) => {
    console.log('Is there a name here?', req.name);
    res.render('index');
}