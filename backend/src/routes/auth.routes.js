import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send('signup');
});

router.post('/signin', (req, res) => {
    res.send('signin');
});

router.put('/signout', (req, res) => {
    res.send('signout');
});

export default router;
