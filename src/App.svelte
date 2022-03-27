<script>
  import Header from './components/Header.svelte';
  import Container from './components/Container.svelte';
  import Main from './components/Glass.svelte';
  import Background from './components/Background.svelte';
</script>

<Background />
<div class="app">
  <Container>
    <Main>
      <Header />
    </Main>
  </Container>
</div>

<style>
  :root {
    --blue: #52cbeb;
    --cyan: #b9e3fa;
    --violet: #3e204e;
    --purple: #6c4aac;
    --magenta: #f1547d;
    --pink: #d66cc7;

    color: white;
    text-shadow: 0 0 0.1rem;
    min-height: 100vh;
    font-family: 'Fredoka', sans-serif;
    overflow: hidden;
  }

  :global(.body) {
    padding: 0;
    margin: 0;
  }

  .app {
    max-height: 100vh;
    overflow-y: auto;
  }
</style>
