<script>
  import gql from "graphql-tag";
  import { query } from "svelte-apollo";
  const AllFilmsQuery = gql`
    query AllFilmsQuery {
      allFilms {
        films {
          title
          episode_id: episodeID
          opening_crawl: openingCrawl
        }
      }
    }
  `;
  const filmsResult = query(AllFilmsQuery);
</script>

{#if $filmsResult.loading}
  Loading...
{:else if $filmsResult.error}
  Error: {$filmsResult.error.message}
{:else}
  {#each $filmsResult.data.allFilms.films as film}
    {film.title}
    <p>{film.opening_crawl}</p>
  {/each}
{/if}
