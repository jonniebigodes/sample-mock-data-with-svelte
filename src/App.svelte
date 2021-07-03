<script>
  import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
  import { setClient } from "svelte-apollo";
  import SampleGraphqlComponent from "./components/SampleGraphqlComponent.svelte";
  const defaultClient = new ApolloClient({
    link: createHttpLink({
      // You should use an absolute URL here
      uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    }),
    cache: new InMemoryCache(),
  });
  setClient(defaultClient);
</script>

<div>
  <h1>Graphql</h1>
  <SampleGraphqlComponent />
</div>
