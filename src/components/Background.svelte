<script>
  import Snow from './Snow.svelte';
</script>

<Snow />

<style>
  :root {
    background-color: black;
  }

  :root::before,
  :root::after {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
  }

  :root::before {
    background-image: linear-gradient(
      to right,
      var(--violet) 0%,
      var(--purple) 50%,
      var(--violet) 100%
    );
    mask: linear-gradient(to top, white 0%, transparent 100%);
  }
  :root::after {
    background-image: linear-gradient(
      to right,
      var(--magenta) 0%,
      var(--pink) 50%,
      var(--magenta) 100%
    );
    mask: linear-gradient(to top, transparent 0%, white 100%);
  }
</style>
