import graphql from 'relay-runtime';

graphql`
  query trial1Query {
    hero {
      name
    }
  }

  query trial2Query {
    local {
      color
    }
  }
`;
