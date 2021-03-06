//第一部分
//{{------引入相关依赖模块（库）部分
var express = require('express');
var path = require('path');


var index = require('./routes/index');
var users = require('./routes/users');
//------引入相关依赖模块（库）部分}}


//第二部分
//{{------实例化（将相关依赖模块实例化）部分
var app = express();

//------实例化（将相关依赖模块实例化）部分}}


//第三部分
//{{---设置环境变量部分
app.set('port', process.env.PORT || 3000);

//---设置环境变量部分}}


//第四部分
//{{---调中间件部分
//设置handlebars 视图引擎及视图目录和视图文件扩展名
var handlebars = require('express-handlebars')
    .create({
        defaultLayout: 'main', // 设置默认布局为main
        extname: '.hbs', // 设置模板引擎文件后缀为.hbs
        //创建一个Handlebars 辅助函数，让它给出一个到静态资源的链接：
        helpers: {
            static: function(name) {
                return require('./lib/static.js').map(name);
            },
            //段落
            section: function(name, options){
                if(!this._sections) this._sections = {};
                this._sections[name] = options.fn(this);
                return null;
            }
        }
    });
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
//静态资源设置
app.use(express.static(__dirname + '/public'));

//Handlebars中引用局部文件 中间件设置
app.use(function(req, res, next){
    if(!res.locals.partials)  res.locals.partials = {};
    res.locals.partials.discountContext = {
        locations: [{product: 'book', price: '99.00'}]
    };
    next();
});

app.use('/', index);
app.use('/users', users);
//---调中间件部分}}



//第五部分
//{{------定制错误部分

// 定制404 页面（所有的确404错误，都是找不到页面或
// 文件或路由错误---原因有两个，1、用户访问时在浏览
// 器中输入错误，2、开发者引用文件或路由错误）
app.use(function(req, res){
    // res.type('text/html');
    res.status(404);
    // res.send(' <span style="color:red">404 - Not Found</span>');
    res.render('404');
});

// 定制500 页面（所有的500错误都是服务器端代码错识）
app.use(function(err, req, res, next){
    console.error(err.stack);
    // res.type('text/plain');
    res.status(500);
    // res.send('500 - Server Error');
    res.render('500');
});

//-----定制错误部分}}

//第六部分
//在指定端口上启动应用

app.listen(app.get('port'), function(){
    console.log( 'Express 已启动在 http://localhost:' +
        app.get('port') + '; 若要终止运行请按组合键 Ctrl-C .' );
});













