module.exports = (app) => {
    app.get('/quem', (req, res, next) => {
        res.render('quem')
    })
}