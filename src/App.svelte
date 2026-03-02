<script>
  import { movies } from './data/movies'
  import MovieCard from './components/MovieCard.svelte'
  import MovieModal from './components/MovieModal.svelte'
  import { onMount } from 'svelte'

  let query = ''
  let selected = null
  let showModal = false
  let list = []

  onMount(() => {
    list = movies
  })

  $: filtered = list.filter(m => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return m.title.toLowerCase().includes(q) || m.genres.join(' ').toLowerCase().includes(q)
  })

  function handleSelect(e) {
    selected = e.detail.movie
    showModal = true
  }

  function closeModal() {
    showModal = false
  }
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Catálogo de Filmes</a>
  </div>
</nav>

<div class="container">
  <div class="row mb-3">
    <div class="col-md-8">
      <input class="form-control" placeholder="Pesquisar por título ou gênero..." bind:value={query} />
    </div>
  </div>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {#each filtered as movie (movie.id)}
      <div class="col">
        <MovieCard {movie} on:select={handleSelect} />
      </div>
    {/each}
    {#if filtered.length === 0}
      <div class="col-12">
        <div class="alert alert-warning">Nenhum filme encontrado.</div>
      </div>
    {/if}
  </div>
</div>

<MovieModal movie={selected} show={showModal} on:close={closeModal} />

<style>
  :global(body) { padding-top: 0.5rem; }
</style>
