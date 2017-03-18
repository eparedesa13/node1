var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	nombre: {type: String, require: true, trim:true},
	apellido: {type: String, require: true, trim: true},
	edad: {type: Number, require:true, default: 0},
	genero:{
		type: String,
		require: true,
		enum:['Hombre','Mujer']
	},
	creado:{
		type:Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('User',UserSchema); 