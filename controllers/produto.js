module.exports = (app) => {
    app.get('/produto', (req, res, next) => {
        res.render('produto')
    })
}