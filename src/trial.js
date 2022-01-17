import graphql from 'relay-runtime';

// FAILS: thread 'main' panicked at 'Expected to have a operation_text operation for `trial2Query`', crates/relay-compiler/src/build_project/generate_artifacts.rs:278:13
// graphql`
//   query trial1Query {
//     hero {
//       name
//     }
//   }
//
//   query trial2Query {
//     local {
//       color
//     }
//   }
// `;

// SOLUTION: add `schemaExtensions` to the config.
// @see https://github.com/facebook/relay/issues/3760#issuecomment-1014907033
//
// SOLUTION: "empty" queries break, therefore workaround with @sibelius hack.
// @see https://github.com/facebook/relay/issues/3760#issuecomment-1014930121
graphql`
  query trial1Query {
    hero {
      name
    }
  }

  query trial2Query {
    # Needed to add __typename
    # See Relay issue here: https://github.com/facebook/relay/issues/2471#issuecomment-624238501
    ... on Query {
      __typename
    }

    local {
      color
    }
  }
`;
