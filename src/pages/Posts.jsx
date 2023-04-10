import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../redux/actions/userAction';
import { fetchApiThunk } from '../redux/actions/postsAction';
import '../css/postscss.css';
// import Loading from '../component/loading';--componente apenas com um 'carregando...'

class Posts extends Component {
  state = {
    userName: '',
    phone: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApiThunk());
  }

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
    const { posts } = this.props;// falta implementar o loading
    console.log(posts);
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
        <div className="divcontent">

          {
            posts.map((e, index) => (
              <div className="divposts" key={ index }>
                <p>{e.userId}</p>
                <p>{e.title}</p>
                <p>{e.body}</p>

              </div>))
          }
        </div>

      </div>

    );
  }
}
Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  isLoading: state.posts.isLoading,
});

export default connect(mapStateToProps, null)(Posts);
