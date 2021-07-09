import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    this.setState({
      title: event.target.value,
    })
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor>
          Título:
          <input
            type="text"
            onChange={ this.updateState }
            data-testid="title-input"
            value={title}
          />
        </label>
      </form>
    )
  }
}

export default AddMovie;
