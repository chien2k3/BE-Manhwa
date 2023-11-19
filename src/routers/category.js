import express from "express";
import { createCategory, getAllCategory, getCategory, removeCategory, updateCategory } from "../controllers/category";
import { getBooksByCategory } from "../controllers/book";

const router = express.Router()

router.get("/category", getAllCategory)
router.post("/category", createCategory)
router.put("/category/:id", updateCategory)
router.delete("/category/:id", removeCategory)
router.get("/category/:id", getCategory)
router.get('/category/:id', getBooksByCategory);

export default router