'use strict';

const firebase = require('../db');
const Product = require('../models/product');
const firestore = firebase.firestore();

const addProduct = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('product').doc().set(data);
        res.send('Record save');
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await firestore.collection('product').doc(id);
        const data = await product.get();

        if(!data.exists){
            res.status(400).send("Product dosent exists");
        }else{
            res.send(data.data());
        }
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const products = await firestore.collection('product');
        const data = await products.get();
        const productArray = [];
        if(data.empty) {
            res.status(404).send('No product record found');
        }else {
            data.forEach(doc => {
                const product = new Product(
                    doc.id,
                    doc.data().name,
                    doc.data().description,
                    doc.data().price,
                    doc.data().imageUrl,
                );
                productArray.push(product);
            });
            res.send(productArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product = firestore.collection('product').doc(id);
        await product.update(data);
        res.send('product record updated successfuly'); 
    } catch (error) {
        res.status(400).send(error.message);        
    }
}

const deleteProduct = async(req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('product').doc(id).delete();
        res.send('Record delete');
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}