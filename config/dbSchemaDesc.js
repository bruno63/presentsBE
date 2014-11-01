'use strict';

module.exports = 
{
	tid: {
		type: String,
		trim: true,
		required: true,
	},
	datum: {
		type: Date,
		default: Date.now
	},
		from: {
		type: String,
		trim: true
	},
	to: {
		type: String,
		trim: true,
		default: 'Geburtstag',
		required: true
	},
	comment: {
		type: String,
		trim: true
	},
	type: {
		type: String,
		trim: true
	}
};
