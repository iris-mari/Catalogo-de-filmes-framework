<script>
  import { createEventDispatcher } from 'svelte'
  export let movie
  const dispatch = createEventDispatcher()

  function open() {
    dispatch('select', { movie })
  }
</script>

<div class="card h-100">
  <img src={movie.poster} class="card-img-top" alt={movie.title} />
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">{movie.title}</h5>
    <p class="card-text text-muted mb-2">{movie.year} • {movie.genres.join(', ')}</p>
    <div class="mt-auto d-flex justify-content-between align-items-center">
      <span class="badge bg-secondary">⭐ {movie.rating}</span>
      <button class="btn btn-sm btn-primary" on:click={open}>Ver detalhes</button>
    </div>
  </div>
</div>

<style>
  img { object-fit: cover; height: 700px;}
</style>
