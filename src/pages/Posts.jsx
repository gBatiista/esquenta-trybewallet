import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Posts extends Component {
  state = {
    userName: '',
    phone: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { dispatch } = this.props;
    const { userName, phone } = this.state;
    dispatch(login({ userName, phone }));
  };

  render() {
    const { userName, phone } = this.state;
    return (
      <div>
        <form>
          <label>
            <input
              type="text"
              name="userName"
              value={ userName }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              name="phone"
              value={ phone }
              onChange={ this.handleChange }
            />

            <button
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar Informações

            </button>
          </label>
        </form>

      </div>
    );
  }
}
Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(Posts);
