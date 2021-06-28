import SearchBar from './components/SearchBar';

const { searchText, onSearchTextChange } = this.props.SearchBar;

const inputsInfos = [
  {
    labelId: 'text-input-label',
    labelText: 'Inclui o texto',
    inputId: 'text-input',
    inputType: 'text',
    valueInput: searchText,
    onChangeInput: onSearchTextChange,
  },
  // {
  //   labelText: 'Mostrar somente favoritos',
  //   labelId: 'checkbox-input-label',
  // },
];

export default inputsInfos;
