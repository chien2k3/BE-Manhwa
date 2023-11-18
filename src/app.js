import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import routerCategory from './routers/category'
import routerBook from './routers/book';
import routerFeedback from './routers/feedback';
import routerCart from './routers/cart';
import routerAuth from './routers/auth';
import routerOrder from './routers/order';

const app = express()
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://vchientaki:vanchien@cluster0.enepd02.mongodb.net/?retryWrites=true&w=majority");

app.use("/api", routerCategory)
app.use("/api", routerBook)
app.use("/api", routerFeedback)
app.use("/api", routerCart)
app.use("/api", routerAuth)
app.use("/api", routerOrder)

export const viteNodeApp = app;