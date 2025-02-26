import express from "express";
import { createNewFood, getFoods, getCategories,getFoodsByCategoryId } from "../controllers/foodController";
const router = express.Router();

// Register route
router.post("/food", createNewFood);
router.get("/food", getFoods);
router.get("/categories", getCategories)
router.get("/foodByCategory", getFoodsByCategoryId)
export default router;
