var express = require('express');
var path = require('path');
var _ = require('underscore');
var Movie = require('./models/movie');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;   // 从环境中取到的参数，windows 中需要使用set PORT=4000
var app = express();

mongoose.connect('mongodb://localhost/imooc');

app.set('views', './views/pages');	// 设置视图的根目录
app.set('view engine', 'jade');	// 设置默认模板引擎
app.use(bodyParser());	// 将表单的数据格式化
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment'); // 引入本地变量，在jade 模板中使用
app.listen(port);

console.log('imooc started on port ' + port);

// index page
app.get('/', function(req, res) {
	Movie.fetch(function(err, movies) {
		if (err) {
			console.log(err);
		}
		// res.render 有2个参数：跳转的模板页，跳转需要的参数
		res.render('index', {
			title: 'imooc 首页',
			movies: movies
		});
	});
});

// detail page
app.get('/movie/:id', function(req, res) {
	var id = req.params.id;

	Movie.findById(id, function(err, movie) {
		res.render('detail', {
			title: 'imooc ' + movie.title,
			movie: movie
		});
	});
});

// admin page
app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'imooc 后台录入页',
		movie: {
			doctor: '',
			country: '',
			title: '',
			year: '',
			poster: '',
			language: '',
			flash: '',
			summary: ''
		}
	});
});

// admin update movie
app.get('/admin/update/:id', function(req, res) {
	var id = req.params.id;

	if (id) {
		Movie.findById(id, function(err, movie) {
			res.render('admin', {
				title: 'imooc 后台更新页面',
				movie: movie
			});
		});
	}
})

// admin post movie
app.post('/admin/movie/new', function(req, res) {
	var movieObj = req.body.movie;
	var id = movieObj._id;
	var _movie;

	if (id !== 'undefined') {
		Movie.findById(id, function(err, movie) {
			if (err) {
				console.log(err);
			}

			_movie = _.extend(movie, movieObj);
			_movie.save(function(err, movie) {
				if (err) {
					console.log(err);
				}

				res.redirect('/movie/' + movie._id);
			});
		})
	}
	else {
		_movie = new Movie({
			doctor: movieObj.doctor,
			title: movieObj.title,
			country: movieObj.country,
			language: movieObj.language,
			year: movieObj.year,
			poster: movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash
		});

		_movie.save(function(err, movie) {
			if (err) {
				console.log(err);
			}

			res.redirect('/movie/' + movie._id);
		});
	}
});

// list page
app.get('/admin/list', function(req, res) {
	Movie.fetch(function (err, movies) {
		if (err) {
			console.log(err);
		}

		res.render('list', {
			title: 'imooc 列表页',
			movies: movies
		});
	})
});

// list delete movie
app.delete('/admin/list', function(req, res){
	var id = req.query.id;

	if (id) {
		Movie.remove({_id: id}, function(err, movie) {
			if (err) {
				console.log(err);
			}
			else {
				res.json({success: 1});
			}
		});
	}
});

