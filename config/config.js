'use strict';

module.exports = {
	title: 'Presents',
	description: 'A demo app logging presents',
	port: process.env.PORT || 3333,
	version: '2',
	itemName: 'present',
	collectionName: 'presents',
	mongoUrl: 'mongodb://localhost:27017/',
	dbSchemaDesc: 
	{
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
	}
};
