<script>
  import { db } from '../db.svelte';

  const { spaces } = db;

  const whatIAm =
    spaces.length > 1
      ? `${spaces.slice(0, -1).join(', ')} and a ${
          spaces[spaces.length - 1]
        }`.toLowerCase()
      : spaces.length === 1
      ? spaces[0].toLowerCase()
      : null;
</script>

{#if whatIAm}
  <section class="spaces">
    <h3>What am I?</h3>
    <p>
      I am a {whatIAm}.
    </p>
  </section>
{/if}

<style>
  .spaces {
    text-align: center;
  }
</style>
