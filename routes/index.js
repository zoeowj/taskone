//require一个express(引入express)
var express = require('express');
//实例化router
var router = express.Router();

//配置路由
router.get('/', function(req, res){
    //渲染home.hbs
    res.render("home");
});
router.get('/major', function(req, res){
    res.render("major");
});
router.get('/society', function(req, res){
    res.render("society");
});
router.get('/evaluate', function(req, res){
    res.render("evaluate");
});


//输出
module.exports = router;
