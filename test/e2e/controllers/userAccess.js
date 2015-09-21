var app = require('../../../app'),
	 request = require('supertest')(app);

	describe('User Access Controller', function(){
		it('should authenticate a user with token and objectId', function(done){
			request
				.post('/access')
				.expect('Content-Type', /json/)
				.send({token:'123456', objectId:'1'})
				.end(function(err, res){
					res.status.should.eql(200);
					done();
				 });
		});

		it('should find the authenticated user', function(done){
			request
				.get('/access/123456')
				.expect('Content-Type', /json/)
				.expect(200, {
					token:'123456',
					objectId:'1'				
				}, done);
		});

	});
