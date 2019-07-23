// express 사용하기 
express = require('express');
app = express();

// ejs 사용하기
app.set('view engine', 'ejs');
app.set('views', 'templates');

// 라우팅, .post .put .delete .all, ...
app.get('/', (req, res) => {
    res.send("Hello!");
});

app.get('/hello/:name', (req, res) => {
    res.send("Hello! " + req.params.name);
});

// 미들웨어 (어플리케이션)
app.use((req, res, next) => {
    console.log('Time: %d', Data.now());
    res.locals.forTemplate3 = "Hello Again!";
    next();
});

app.use('/bye', (req, res, next) => {
    res.send("Bye...");
});

// 미들웨어 (서드파티)
app.use(express.static('assets'));

// 미들웨어 (라우터 객체)
var router = express.Router();
router.use((req,res,next) => {...});
router.get('/some/path', (req, res) => {...});
app.use('/basePath', router);

// 미들웨어 (라우트 핸들러)
app.get('/profile/:user_id', (req, res, next) => {
    if(req.params.user_id == 0) {
        next("Not Logined"); // 오류 처리 미들웨어로
    } else {
        next(); // 다음 핸들러로
    }
}, (req, res) => {
    res.send("Hello " + req.params.user_id);
});

// 미들웨어 (오류 처리)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).end();
});

/* res, req variable */
req.cookies
req.headers['Content-Type']
req.params
req.query
req.ip
req,method
req.get('Content-Type');

res.status(404);
res.redirect('/...');
res.set('Content-Type', '...');
res.set({
    'Content-Type': '...',
    '...': '...'
});
res.end();
res.send('...');
res.render('viewFileName', {
    title: 'aaa',
    list: ['aa', 'bb'],
    obj: {a:1,b:2}
});
res.json({a:1,b:2});