const express = require('express')
const app = express()
const productRoutes = require('./routes/productRoutes');
const userRoutes=require('./routes/userRoutes')
const errorHandler = require('./middleware/errorHandler');
const orderRoutes=require('./routes/orderRoutes')
const cartRouter=require('./routes/cartRoutes')
const cors = require('cors');
require('dotenv').config();

const port=process.env.PORT || 8090


app.use(cors()); 

app.use(express.json());

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/carts',cartRouter)

app.use(errorHandler);

app.listen(port, (req, res) => {
    console.log('server running on PORT-8080')
})