function validateProduct(req, res, next) {

    const { name, product_descr, price } = req.body;

    if (!name || name.length < 3 || typeof name!=='string') {
        return res.status(400).json({ error: 'name must be at least 3 characters.' });
    }

    if (!product_descr || typeof product_descr !=='string') {
        return res.status(400).json({ error: 'product_descreption is requres ' });
    }

    if (!price || isNaN(price) || typeof price !== 'number') {
        return res.status(400).json({ error: 'price must be a number.' });
    }


    next();
}


module.exports = validateProduct;

