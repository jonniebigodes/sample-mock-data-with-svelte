<script>
  import { onMount } from "svelte";
  onMount(async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        status = "success";
        todos = data;
      })
      .catch(() => {
        status = "error";
      });
  });
  export let todos = [];
  export let status = "loading";
</script>

{#if status === "loading"}
  <p class="loading">loading...</p>
{:else}
  {#each todos as todo}
    <div>
      <h1>This is a sample component</h1>
      <div>
        <h2>Has the following props and values</h2>
        <div>
          <h3>id: {todo.id}</h3>
          <h3>userId: {todo.userId}</h3>
          <h3>title: {todo.title}</h3>
          <h3>completed:{todo.completed}</h3>
        </div>
      </div>
    </div>
  {/each}
{/if}
