import { describe, it, expect } from 'vitest';
import { movies } from './data/movies.js';

describe('Validação do Catálogo de Filmes', () => {
  it('deve ter pelo menos um filme na lista', () => {
    expect(movies.length).toBeGreaterThan(0);
  });

  it('o primeiro filme deve ser "Avengers"', () => {
    expect(movies[0].title).toBe('Avengers');
  });

  it('todos os filmes devem ter um título e um ano', () => {
    movies.forEach(movie => {
      expect(movie.title).toBeDefined();
      expect(movie.year).toBeTypeOf('number');
    });
  });
});