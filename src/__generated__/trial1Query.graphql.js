/**
 * @generated SignedSource<<40673a97ffa13e21bdf8ada99afd85fe>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type trial1Query$variables = {||};
export type trial1QueryVariables = trial1Query$variables;
export type trial1Query$data = {|
  +hero: {|
    +name: string,
  |},
|};
export type trial1QueryResponse = trial1Query$data;
export type trial1Query = {|
  variables: trial1QueryVariables,
  response: trial1Query$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "trial1Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "hero",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "trial1Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "hero",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b1ded81ae04720896ebf36a2572d9df3",
    "id": null,
    "metadata": {},
    "name": "trial1Query",
    "operationKind": "query",
    "text": "query trial1Query {\n  hero {\n    __typename\n    name\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "f5f841278cad64190c9a332838fa2705";

module.exports = ((node/*: any*/)/*: Query<
  trial1Query$variables,
  trial1Query$data,
>*/);
