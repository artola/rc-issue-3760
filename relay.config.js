'use strict';

module.exports = {
  schema: 'schema.main.graphql',
  schemaExtensions: ['src'],
  src: 'src',
  noFutureProofEnums: true,
  language: 'flow',
  artifactDirectory: 'src/__generated__',
};
