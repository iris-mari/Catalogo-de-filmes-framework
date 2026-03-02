<script>
  export let movie = null
  export let show = false
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  function close() {
    dispatch('close')
  }
</script>

{#if show && movie}
  <div class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.5);">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{movie.title} <small class="text-muted">({movie.year})</small></h5>
          <button type="button" class="btn-close" aria-label="Close" on:click={close}></button>
        </div>
        <div class="modal-body d-flex gap-3">
          <img src={movie.poster} alt={movie.title} class="img-fluid" style="width:200px; height:auto; object-fit:cover;" />
          <div>
            <p><strong>Gêneros:</strong> {movie.genres.join(', ')}</p>
            <p><strong>Avaliação:</strong> ⭐ {movie.rating}</p>
            <p>{movie.description}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" on:click={close}>Fechar</button>
        </div>
      </div>
    </div>
  </div>
{/if}
