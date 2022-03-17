import express from "express";

const routes = express.Router();

routes.get('/',(req,res) => {
    res.render('homepage')
});

routes.get('/specialty-pizzas',(req,res) => {
    const pizzaName: string = req.query.name as string;
    const pizzaPrice: string = req.query.price as string;
    res.render('specialty-pizzas', {
        name: pizzaName,
        price: pizzaPrice
    })
})

routes.get('/review-form',(req,res) => {
    res.render('review-form')
})

routes.get('/review-form-confirm',(req,res) => {
    res.render('/review-form-confirm')
})

export default routes;