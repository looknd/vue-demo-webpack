var fs      = require('fs'),
	express = require('express'),
	app     = express(),
	Mock    = require('mockjs');


	
app.get('/', function (req, res) {
	res.sendfile('index.html');
});

app.use('/dist', express.static('dist'));

app.post('/soytime/data/loadSchool', function (req, res) {
	var Random = Mock.Random,
		data   = Mock.mock({
			'result|10': [{
				'school_id': '@integer(60, 1000)',
				'school_name': '@cname'
			}],
			'success': '@integer(0, 1)'
		});
		
	res.send( JSON.stringify(data, null, 4) );
});

app.post('/soytime/ca/caInfo', function (req, res) {
	var Random = Mock.Random,
		data   = Mock.mock({
            success: '1',
            result:{
                timeConf: '21',
                sceneIds: '200001-200003-200007',
                city_id: 'asd',
                city_name: 'as',
                school_id:'as',
                school_name: 'asd',
                auth_head_url: '1zzz',
                auth_student_card_url: '1zz',
                sutdent_auth: '1',	
                explain	: '@cname'
            }			
		});
	
	res.send( JSON.stringify(data, null, 4) );
});


app.get('/soytime/message/getMobileCode', function (req, res) {
	var Random = Mock.Random,
		data   = Mock.mock({
            success: '1',
            result: '@integer(60, 1000)'		
		});
	
	res.send( JSON.stringify(data, null, 4) );
});

app.get('/soytime/account/saveMobile', function (req, res) {
	var Random = Mock.Random,
		data   = Mock.mock({
            success: '1',
            result: '@integer(60, 1000)'		
		});
	
	res.send( JSON.stringify(data, null, 4) );
});


app.get('/soytime/user/info', function (req, res) {
	var Random = Mock.Random,
		data   = Mock.mock({
            success: '1',
            result:{
                'photo': Random.image('160x200'),
                'name': '@cname'
            }			
		});
	
	res.send( JSON.stringify(data, null, 4) );
});

var server = app.listen(4000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});