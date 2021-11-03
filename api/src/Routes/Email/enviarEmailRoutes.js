const express = require('express');
const router = express.Router();

const { sendAprendiz } = require('../../Controllers/EmailController/sendEmail.controller')

router.route('/aprendiz')
    .get((req, res) => res.json(req.body))
    .post((req, res) => res.json('gola'))
    // .get(sendAprendiz)
    // .put()
    // .delete()


    




module.exports = router;