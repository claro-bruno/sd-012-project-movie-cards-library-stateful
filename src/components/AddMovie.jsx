import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.nomefun = this.nomefun.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { onclick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          {' '}
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ title }
          />
        </label>
      </form>
    );
  }
}
export default AddMovie;
