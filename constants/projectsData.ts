// dayjs
import dayjs, { Dayjs } from 'dayjs';
// type
import { ImageProps } from 'types/imageType';
import { ProjectCategory } from 'types/categoryType';

export interface ProjectDetails {
  category: ProjectCategory[];
  date: Dayjs;
  id: string;
  images: ImageProps[];
  postFileName: string;
  title: string;
}

export interface Project extends ProjectDetails {
  likes: number;
}

const ProjectConstructor = (props: ProjectDetails): Project => {
  const { category, date, id, images, postFileName, title } = props;

  return {
    category,
    date,
    id,
    title,
    images,
    postFileName,
    get likes() {
      let totalLikes = 0;
      if (this.images.length === 0) return 0;

      this.images.forEach((image) => (totalLikes += image.likes));
      return totalLikes;
    },
  };
};

const projectsData: Project[] = [
  ProjectConstructor({
    category: ["photography"],
    date: dayjs().subtract(1, "week"),
    id: "bridephotoshoot",
    postFileName: "bridephotoshoot",
    title:
      "😊 Atender com carinho é o primeiro passo para um sorriso saudável.",
    images: [
      {
        alt: "Duas mulheres uma Dentista de jaleco branco e mascara preta e oculos, a outra uma paciente de cabelo preto e sorrindo deitada em uma cadeira de dentista.",
        width: 6000,
        height: 4000,
        likes: 42,
        src: "/projects/foto_5.jpeg",
      },
    ],
  }),
  ProjectConstructor({
    category: ["design"],
    date: dayjs().subtract(4, "week"),
    id: "hairmaskdesign",
    postFileName: "bridephotoshoot",
    title: "💪 Com dedicação e amor, transformamos sorrisos todos os dias.",
    images: [
      {
        alt: "Denstista mulher sorrindo de jaleco branco atendendo um homem deitado em uma cadeira de dentista.",
        height: 3903,
        likes: 29,
        src: "/projects/foto_4.jpeg",
        width: 3741,
      },
    ],
  }),
  ProjectConstructor({
    category: ["design"],
    date: dayjs().subtract(4, "week"),
    id: "hairmaskdesign",
    postFileName: "bridephotoshoot",
    title: "✨ A felicidade começa com um simples sorriso.",
    images: [
      {
        alt: "Denstista mulher sorrindo, de jaleco branco e cabelo preso.",
        height: 3903,
        likes: 29,
        src: "/projects/foto_2.jpeg",
        width: 3741,
      },
    ],
  }),
  ProjectConstructor({
    category: ["photography"],
    date: dayjs().subtract(19, "week"),
    id: "clothingphotoshoot",
    postFileName: "bridephotoshoot",
    title: "😊 Seu sorriso pode iluminar o dia de alguém!",
    images: [
      {
        alt: "Dentista mulher em pé, com jaleco verde e sorrindo.",
        height: 6000,
        likes: 47,
        src: "/projects/foto_3.jpeg",
        width: 4000,
      },
    ],
  }),
  ProjectConstructor({
    category: ["photography"],
    date: dayjs().subtract(24, "week"),
    id: "modelingphotoshoot",
    postFileName: "bridephotoshoot",
    title: "🎯 Nada pode parar uma mulher corajosa e determinada.",
    images: [
      {
        alt: "Denstista mulher sorrindo, de jaleco branco e cabelo solto.",
        height: 4074,
        likes: 51,
        src: "/projects/foto_1.jpeg",
        width: 3260,
      },
    ],
  }),
];

export default projectsData;
