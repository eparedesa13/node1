var express = require('express');
var router = express.Router();
var User = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.send({
  	status: 1,
  	data:[
  		{id: 1, nombre:'CArlos',apellido:'Perez'},
  		{id: 2, nombre:'CArlos2',apellido:'Perez'},
  		{id: 3, nombre:'CArlos3',apellido:'Perez'},
  		{id: 4, nombre:'CArlos4',apellido:'Perez'},
  	]

  });

});


router.get('/aldia',function(req,res,next){
	res.send('Usuarios al día');
});

router.get('/:id',function(req,res,next){
	var idUSer= req.params.id;//parametro GET
	//Post req.body.<variable>
	res
		.status(200)
		.send('Has solicitando el usuario '+ idUSer);
});


router.post('/',function(req,res,next){
	//console.log(req.body);
	User.create(req.body,function(err,user){
		if (err){
			res.send({
				status: 0,
				mensaje: 'Ocirrio un error',
				err:err,
			});			
		}else{
			res.send({
				status: 1,
				mensaje: 'Usuario Creado',
				data: user
			});
		}
	});

});



module.exports = router;
