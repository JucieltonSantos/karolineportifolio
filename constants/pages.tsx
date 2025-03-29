// type
export interface Page {
  title?: string;
  description?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'Dra. Karoline Maria',
    description:
      'Dentista especializada em estética, prótese e trazer sua autoestima de volta.',
  }
};

export default pages;
