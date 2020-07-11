
const express = require('express');
const router = express.Router();

const BlackList = require('../models/BlackList');



router.get('/', (req, res) => {
    BlackList.find()
        .then(list => {
            res.status(200).send({
                list: list
            })
        })
});

router.post('/', (req, res) => {
    let url = req.body.url;
    BlackList.findOne({
        hostname: url
    }, (err, black) => {
        console.log(black)
        if (black) {
            black.count = black.count + 1;
            black.save()
                .then(black => res.json(black))
        } else {
            const black = new BlackList({
                hostname: url,
                count: 1
            })
            black.save()
                .then(black => res.json(black))
        }
    })
});

router.delete('/', (req, res) => {
    let url = req.body.url;
    BlackList.findOne({
        hostname: url
    }, (err, black) => {

        if (black) {
            black.deleteOne();
            res.status(200).send(`${url} deleted from the blacklist database`)
        }
    })
})

module.exports = router;