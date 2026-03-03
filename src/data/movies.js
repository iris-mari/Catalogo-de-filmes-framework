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
    description: 'Após os eventos devastadores de Guerra Infinita, o universo está em ruínas. Com a ajuda dos aliados restantes, os Vingadores precisam se reunir mais uma vez para desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, custe o que custar.'
  },
  {
    id: 2,
    title: 'Avatar',
    year: 2020,
    rating: 7.0,
    poster: avatar,
    genres: ['Fantasia'],
    description: 'No exuberante mundo de Pandora, os seres humanos usam corpos híbridos chamados Avatares para explorar o ambiente. O filme acompanha um fuzileiro naval paraplégico que se vê dividido entre seguir ordens e proteger o mundo que aprendeu a amar.'
  },
  {
    id: 3,
    title: 'Harry Potter',
    year: 2001,
    rating: 8.2,
    poster: hp,
    genres: ['Fantasia'],
    description: 'A vida de um órfão comum muda drasticamente quando ele descobre que é um bruxo e foi convidado para estudar na Escola de Magia e Bruxaria de Hogwarts. Ao lado de seus amigos, ele enfrenta segredos sombrios sobre seu passado e o retorno de um grande vilão.'
  },
  {
    id: 4,
    title: 'It',
    year: 2017,
    rating: 7.3,
    poster: it,
    genres: ['Terror'],
    description: 'Em uma pequena cidade onde crianças começam a desaparecer, um grupo de amigos se une para investigar o mistério. Eles descobrem que o culpado é uma entidade milenar que assume a forma do palhaço Pennywise e se alimenta dos medos de suas vítimas.'
  },
  {
    id: 5,
    title: 'Noiva Cadáver',
    year: 2005,
    rating: 7.3,
    poster: noivamorta,
    genres: ['Animação'],
    description: 'Nesta obra visualmente deslumbrante de Tim Burton, Victor acidentalmente recita seus votos de casamento para um esqueleto de noiva enquanto ensaia na floresta. Ele é levado para o vibrante Mundo dos Mortos e precisa encontrar uma forma de voltar para sua verdadeira noiva.'
  },
  {
    id: 6,
    title: 'Piratas do Caribe',
    year: 2006,
    rating: 5.3,
    poster: pc,
    genres: ['Comédia'],
    description: 'O excêntrico pirata Jack Sparrow vê sua vida virar de cabeça para baixo quando seu antigo rival rouba seu navio e sequestra a filha do governador. Uma aventura cheia de maldições astecas, batalhas navais e muito humor pelos mares do Caribe.'
  }
];