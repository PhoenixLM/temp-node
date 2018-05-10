module.exports = (app) => {
    app.get('/produtos', (req, res, next) => {
        res.render('produtos')
    })
}