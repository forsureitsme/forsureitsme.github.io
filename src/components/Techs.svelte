<script>
  import { db } from '../db.svelte';

  const { techs } = db;
</script>

{#if techs}
  <section class="techs">
    <h3>Technologies I've used</h3>
    <div class="techs__table">
      {#each techs as tech}
        <div class="tech">
          {tech}
        </div>
      {/each}
    </div>
  </section>
{/if}

<style>
  .techs {
    text-align: center;
  }

  .techs__table {
    display: grid;
  }
</style>
