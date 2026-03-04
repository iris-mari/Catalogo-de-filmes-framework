<script>
  import { movies as initialMovies } from './data/movies'
  import MovieCard from './components/MovieCard.svelte'
  import MovieModal from './components/MovieModal.svelte'
  import { onMount } from 'svelte'

  // IMPORTAÇÃO DA IMAGEM LOCAL (Corrigida)
  import zootopiaImg from './data/imgs/zootopia.jpeg'; 

  let query = ''
  let selected = null
  let showModal = false
  let list = []
  let novoTitulo = ''

  onMount(() => {
    list = [...initialMovies]
  })

  $: filtered = list.filter(m => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return m.title.toLowerCase().includes(q) || (m.genres && m.genres.join(' ').toLowerCase().includes(q))
  })

  function adicionarFilme() {
    const nome = novoTitulo.trim().toLowerCase();
    
    if (nome === "zootopia") {
      const zootopia = {
        id: Date.now(),
        title: 'Zootopia',
        year: 2016,
        rating: 8.0,
        poster: zootopiaImg, // Usando sua imagem local importada
        genres: ['Animação', 'Aventura'],
        description: 'Zootopia é uma metrópole vibrante onde animais de todos os ambientes convivem. A trama acompanha Judy Hopps, uma coelha determinada que sonha em ser policial, e Nick Wilde, um raposo vigarista e sagaz. Juntos, eles precisam superar preconceitos e unir forças para desvendar um mistério que ameaça a paz da cidade, revelando que qualquer um pode ser o que quiser.'
      };
      list = [zootopia, ...list];
      novoTitulo = "";
    } else if (novoTitulo.trim() !== "") {
      const generico = {
        id: Date.now(),
        title: novoTitulo,
        poster: 'https://via.placeholder.com/500x750?text=Sem+Poster',
        genres: ['Geral'],
        description: 'Filme adicionado manualmente.'
      };
      list = [generico, ...list];
      novoTitulo = "";
    }
  }

  function removerFilme(id) {
    list = list.filter(m => m.id !== id);
  }

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
  <div class="row mb-4 g-2">
    <div class="col-md-6">
      <input class="form-control" placeholder="Pesquisar..." bind:value={query} />
    </div>
    <div class="col-md-4">
      <input class="form-control" placeholder="Nome do novo filme..." bind:value={novoTitulo} />
    </div>
    <div class="col-md-2">
      <button class="btn btn-success w-100" on:click={adicionarFilme}>Adicionar</button>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {#each filtered as movie (movie.id)}
      <div class="col">
        <div class="card h-100 border-0 shadow-sm">
          <MovieCard {movie} on:select={handleSelect} />
          <div class="p-2 bg-light text-center">
            <button class="btn btn-outline-danger btn-sm w-100" on:click|stopPropagation={() => removerFilme(movie.id)}>
              Remover do Catálogo
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<MovieModal movie={selected} show={showModal} on:close={closeModal} />

<style>
  :global(body) { background-color: #f8f9fa; }
  .card { overflow: hidden; transition: transform 0.2s; }
  .card:hover { transform: translateY(-5px); }
</style>