const { Router } = require('express');
const router = Router();

const User = require('../models/User');

router.get('/', async (req, res) => {
    /*try {
        const cardList = await User.find({}); 
        console.log(cardList)
        res.status(201).json({ cardList, message: 'okok' });
    } catch(e) {
        res.status(400).json({ message: 'Error' });
    }*/
    User.find({})
    .then((cardList) => {
        res.status(201).json({ cardList });
    })
    .catch((e) => console.log(e))
});

module.exports = router;