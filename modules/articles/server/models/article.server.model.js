'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    default: '',
    unique: true ,
    dropDups: true,
    trim: true,
    required: 'Slug cannot be blank'
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);