import express from 'express';
import { registerUser, authUser } from '../controllers/authController.js';


// auth middleware testing
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);


// Protected Route (for testing)
router.get("/me", protect, (req, res) => {
  res.json({
    message: "Protected route accessed!",
    user: req.user,
  });
});


export default router;

