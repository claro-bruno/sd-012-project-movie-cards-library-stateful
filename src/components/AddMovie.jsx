import React from 'react';
import AddMovie1 from './AddMovie1';
import AddMovie2 from './AddMovie2';

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
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovie1
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          change={ this.handleChange }
        />
        <AddMovie2
          storyline={ storyline }
          change={ this.handleChange }
          rating={ rating }
          genre={ genre }
        />
      </form>
    );
  }
}

export default AddMovie;
