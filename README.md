# mongodb-ejson-schema

[MongoDB Extended JSON](http://docs.mongodb.org/manual/reference/mongodb-extended-json/) is a standard way of representing MongoDB documents in JSON. This provides a [JSON Schema](http://json-schema.org/) to validate documents.

## why

If you're talking between services in JSON (like to a browser, or producing/consuming mongoexport), you should strictly adhere to this JSON Schema.

This provides an easy way to verify your documents are valid.

It also serves as documentation for what the MongoDB Extended JSON format looks like.

## `schema/document.json`

This is the schema for a document, e.g. something you can store in MongoDB.

## `schema/query.json`

`**TODO** implement this schema`

This is the schema for a query document. This allows for additional field values, e.g. `$set`.

##LICENSE

MIT
