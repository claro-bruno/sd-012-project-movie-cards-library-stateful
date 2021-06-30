const dictionaries = {
  FormInput: {
    title: 'Título:',
    subtitle: 'Subtítulo:',
    image: 'Imagem',
    storyline: 'Sinopse:',
    rating: 'Avaliação:',
  },
  FormSelect: {
    genre: 'Gênero:',
    selectedGenre: 'Filtrar por gênero',
    action: 'Ação',
    comedy: 'Comédia',
    thriller: 'Suspense',
    '': 'Todos',
  },
  SearchBarInput: {
    searchText: 'Inclui o texto:',
    bookmarkedOnly: 'Mostrar somente favoritos',
  },
};

const translate = (name, dictionary) => name
  .replace(/.*/i, dictionaries[dictionary][name]);

export default translate;
