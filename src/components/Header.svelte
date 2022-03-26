<script>
  import { writable } from 'svelte/store';

  let { adjectives } = DATABASE;

  const adjectiveIsAnimating = writable(
    new Array(adjectives.length).fill(false).fill(true, 0, 1)
  );

  const leaveAdjective = (adjectiveIndex) => {
    let isAnimating = $adjectiveIsAnimating;
    let nextAdjectiveIndex = adjectiveIndex + 1;
    if (nextAdjectiveIndex > $adjectiveIsAnimating.length - 1) {
      nextAdjectiveIndex = 0;
    }
    isAnimating[adjectiveIndex] = false;
    isAnimating[nextAdjectiveIndex] = true;
    $adjectiveIsAnimating = isAnimating;
  };
</script>

<header>
  <h1>Pedro Cardoso da Silva</h1>
  <h4>
    {#each adjectives as adjective, adjectiveIndex}
      {#if $adjectiveIsAnimating[adjectiveIndex]}
        <div on:animationend={() => leaveAdjective(adjectiveIndex)}>
          {adjective}
        </div>
      {/if}
    {/each}
  </h4>
</header>

<style>
  header {
    text-align: center;
  }

  h4 {
    letter-spacing: 1px;
    text-shadow: none;
    position: relative;
    height: 1rem;
  }
  h4 div {
    position: absolute;
    inset: 0;
    opacity: 0;
    animation: motion-blur 3s linear;
  }

  @keyframes motion-blur {
    0% {
      opacity: 0;
    }

    10% {
      opacity: 1;
    }

    90% {
      opacity: 1;
      filter: blur(0);
    }

    100% {
      opacity: 0;
      filter: blur(0.25rem);
    }
  }
</style>
