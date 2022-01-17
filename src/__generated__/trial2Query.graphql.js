/**
 * @generated SignedSource<<ae7068860dd1636debf93cbd8107f15b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type trial2Query$variables = {||};
export type trial2QueryVariables = trial2Query$variables;
export type trial2Query$data = {|
  +__typename: string,
  +local: ?{|
    +color: ?string,
  |},
|};
export type trial2QueryResponse = trial2Query$data;
export type trial2Query = {|
  variables: trial2QueryVariables,
  response: trial2Query$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Local",
        "kind": "LinkedField",
        "name": "local",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "color",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "trial2Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "trial2Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8a0857a76363fb5d1b27d72d8a780c2b",
    "id": null,
    "metadata": {},
    "name": "trial2Query",
    "operationKind": "query",
    "text": "query trial2Query {\n  __typename\n}\n"
  }
};
})();

(node/*: any*/).hash = "fdf8b737269ae67ec1c4792fa335c015";

module.exports = ((node/*: any*/)/*: Query<
  trial2Query$variables,
  trial2Query$data,
>*/);
