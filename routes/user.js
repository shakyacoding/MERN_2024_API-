import express from 'express';
import {userLogin, userRegister,logout, getMyProfile} from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

// To Register User
router.post('/register', userRegister )

// For Login 
router.post('/login',userLogin)

// For Logout

router.get('/logout',logout)

// Profile page

router.get('/myprofile', isAuthenticated,getMyProfile);


export default router;