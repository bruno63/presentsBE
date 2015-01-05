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
		trim: true
	},
	comment: {
		type: String,
		trim: true
	},
	ptype: {
		type: String,
		default: 'PTBirthday'
	}
};
