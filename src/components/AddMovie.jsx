// implement AddMovie component here ;)
import React from 'react';
import PropTypes from 'prop-types';
import InputSelect from './inputs/InputSelect';
import InputTextarea from './inputs/InputTextarea';
import InputTitle from './inputs/InputTitle';
import InputSubtitle from './inputs/InputSubtitle';
import InputImage from './inputs/InputImage';
import InputRating from './inputs/InputRating';

const defaultState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = defaultState;

    this.handleChange = this.handleChange.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  // handleChange(e) {
  //   const { name } = e.target;
  //   const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  clickSubmit(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(defaultState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="form-group">
        <h2 className="formTitle">Cadastro de novos filmes</h2>
        <section className="form">
          <div className="form-group">
            <div className="form-group col-md-6">
              <InputTitle value={ title } onChange={ this.handleChange } />
            </div>
            <div className="form-group col-md-6">
              <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
            </div>
            <div className="form-group col-md-6">
              <InputImage value={ imagePath } onChange={ this.handleChange } />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group col-md-6">
              <InputTextarea value={ storyline } onChange={ this.handleChange } />
            </div>
            <div className="form-group col-md-6">
              <InputSelect value={ genre } onChange={ this.handleChange } />
            </div>
            <div className="form-group col-md-2">
              <InputRating value={ rating } onChange={ this.handleChange } />
            </div>
          </div>
        </section>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.clickSubmit }
          className="btn btn-primary"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
