import React from 'react';
import SearchBar from './SearchBar';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleCHange = this.handleCHange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  handleCHange({ target}) {
    const { name, value } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; 
    this.setState({[name]: value });
  }

  
  render() {
    const { onclick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="firsT">
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ title }
            onChange= { atualizaroaddmovie }
          />
        </label>
      </form>
    );
  }
}
export default AddMovie;
