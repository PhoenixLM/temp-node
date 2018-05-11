module.exports = (app) => {
    app.get('/servicos', (req, res, next) => {
        res.render('servicos')
    })
}