var express = require('express');
var router = express.Router();
var connect = require('../modules/connect.js')


/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
router.post('/login', function (req, res, next) {

    //res.render('index', {title: 'Express'});
    var name = (req.body.usname).toString()
    var psdd = req.body.uspass
    console.log(name)
    connect.add(name, psdd, function (repeat) {
        res.json({zhuangtai: repeat})
    })
});
router.post('/refe', function (req, res, next) {
    //res.render('index', {title: 'Express'});
    var name = (req.body.usname).toString()
    connect.refer(name, function (repeat) {
        console.log(repeat.length)
        res.json({zhuangtai: repeat})
    })
});
router.post('/filee', function (req, res, next) {


    //res.render('index', {title: 'Express'});
    //var name = (req.body.usname).toString()
    //connect.refer(name, function (repeat) {
    //    console.log(repeat.length)
    //    res.json({zhuangtai: repeat})
    //})
    //console.log(req)
    console.log(343434)
});
module.exports = router;
