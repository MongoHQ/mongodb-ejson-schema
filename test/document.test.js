var test      = require('tape')
var schema    = require('../schema/document')
var validator = new (require('jayschema'))()

test('binary', function(t) {
  t.plan(1)
  validator.validate(require('./fixtures/document/binary'), schema, function(err) {
    t.ok(!err)
  })
})

test('date', function(t) {
  t.plan(1)
  validator.validate(require('./fixtures/document/date'), schema, function(err) {
    t.ok(!err)
  })
})

test('oid', function(t) {
  t.plan(1)
  validator.validate(require('./fixtures/document/oid'), schema, function(err) {
    t.ok(!err)
  })
})

test('timestamp', function(t) {
  t.plan(1)
  validator.validate(require('./fixtures/document/timestamp'), schema, function(err) {
    t.ok(!err)
  })
})