<div class="glass">
  <slot />
</div>

<style>
  .glass {
    margin: 5vh 5vw;
    width: 100%;

    box-shadow: 0 1rem 5rem 0 rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(3px);
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
</style>
