import React from 'react';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    }

    this.addTitle = this.addTitle.bind(this);
  }

  addTitle(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título:
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.addTitle }
            />
        </label>
      </form>
    );
  }
}

export default AddMovie;