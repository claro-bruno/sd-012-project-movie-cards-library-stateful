import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // subtitle: '',
      // title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input"
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
