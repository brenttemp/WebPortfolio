'use strict';
const _ = require('underscore')

const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great'},
  { subject: 'Elephants', verb: 'are', object: 'large'},
];

const verbs = _.pluck(sentences, 'verb')
for(let verb of verbs) {
console.log(`found verb: ${verb}`)
}
