// dayjs
import dayjs from "dayjs";
// lib
import { createPost } from "utility/createBlogPost";
// type
import { BlogPost } from "types/blogPostType";

const blogPosts: BlogPost[] = [
  createPost({
    category: ["photography"],
    date: dayjs().subtract(6, "week"),
    id: "top-5-tratamentos-dentais-mais-buscados-em-osasco",
    image: {
      alt: "Top 5 tratamentos Dentais Mais Buscados em Osasco – Qual Combina Com Você?",
      height: 1080,
      likes: 98,
      src: "/posts/top-5-tratamentos-dentais-mais-buscados-em-osasco.png",
      width: 1080,
    },
    filename: "top-5-tratamentos-dentais-mais-buscados-em-osasco",
    title:
      "Top 5 tratamentos Dentais Mais Buscados em Osasco – Qual Combina Com Você?",
  }),
  createPost({
    category: ["photography"],
    date: dayjs().subtract(6, "week"),
    id: "dicas-para-um-sorriso-bem-cuidado-em-osasco",
    image: {
      alt: "Dicas incríveis para um Sorriso Bem Cuidado: Grandes Conselhos de uma Dentista em Osasco",
      height: 1080,
      likes: 76,
      src: "/posts/dicas-para-um-sorriso-bem-cuidado-em-osasco.png",
      width: 1080,
    },
    filename: "dicas-para-um-sorriso-bem-cuidado-em-osasco",
    title:
      "Dicas incríveis para um Sorriso Bem Cuidado: Grandes Conselhos de uma Dentista em Osasco",
  }),
  createPost({
    category: ["photography"],
    date: dayjs().subtract(6, "week"),
    id: "primeira-consulta-dentista-infantil-em-osasco",
    image: {
      alt: "O Momento Ideal para a Primeira Consulta: Orientações de um Dentista para crianças em Osasco",
      height: 1080,
      likes: 120,
      src: "/posts/primeira-consulta-dentista-infantil-em-osasco.png",
      width: 1080,
    },
    filename: "primeira-consulta-dentista-infantil-em-osasco",
    title:
      "O Momento Ideal para a Primeira Consulta: Orientações de um Dentista para crianças em Osasco",
  }),
  createPost({
    category: ["photography"],
    date: dayjs().subtract(6, "week"),
    id: "aparelho-invisivel-em-osasco-vale-a-pena",
    image: {
      alt: "Aparelho Invisível em Osasco Vale a Pena Investir?",
      height: 1080,
      likes: 83,
      src: "/posts/aparelho-invisivel-em-osasco-vale-a-pena.png",
      width: 1080,
    },
    filename: "aparelho-invisivel-em-osasco-vale-a-pena",
    title: "Aparelho Invisível em Osasco Vale a Pena Investir?",
  }),
];

export default blogPosts;
