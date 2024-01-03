import express from 'express';
import sendEmail from '../Controllers/nodeMailerController.mjs'
const router = express.Router();

router.post('/send-email',sendEmail);

export default router;