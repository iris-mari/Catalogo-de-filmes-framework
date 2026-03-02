// 1. Importações (Certifique-se que a extensão .jpeg ou .jpg está igual ao arquivo na pasta)
import avengers from './imgs/avengers.jpeg';
import avatar from './imgs/avatar.jpeg';
import hp from './imgs/hp.jpeg';
import it from './imgs/it.jpeg';
import noivamorta from './imgs/noivamorta.jpeg';
import pc from './imgs/pc.jpeg';

export const movies = [
  {
    id: 1,
    title: 'Avengers',
    year: 2019,
    rating: 8.4,
    poster: avengers, // Use a variável, sem aspas
    genres: ['Ação'],
    description: 'Heróis se unem para salvar o mundo.'
  },
  {
    id: 2,
    title: 'Avatar',
    year: 2020,
    rating: 7.0,
    poster: avatar,
    genres: ['Fantasia'],
    description: 'Uma aventura mágica em um mundo azul.'
  },
  {
    id: 3,
    title: 'Harry Potter',
    year: 2001,
    rating: 8.2,
    poster: hp,
    genres: ['Fantasia'],
    description: 'O menino que sobreviveu vai para Hogwarts.'
  },
  {
    id: 4,
    title: 'It',
    year: 2017,
    rating: 7.3,
    poster: it,
    genres: ['Terror'],
    description: 'Um palhaço aterroriza a cidade de Derry.'
  },
  {
    id: 5,
    title: 'Noiva Cadáver',
    year: 2005,
    rating: 7.3,
    poster: noivamorta,
    genres: ['Animação'],
    description: 'Um jovem se casa acidentalmente com uma noiva morta.'
  },
  {
    id: 6,
    title: 'Piratas do Caribe',
    year: 2006,
    rating: 5.3,
    poster: pc,
    genres: ['Comédia'],
    description: 'Um inspetor atrapalhado tenta resolver um crime.'
  }
];