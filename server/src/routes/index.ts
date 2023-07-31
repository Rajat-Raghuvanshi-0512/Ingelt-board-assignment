import express from 'express';
import { contactUs } from '../controllers';

const router = express.Router();

router.route('/contact').post(contactUs);

export default router;
