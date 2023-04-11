import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addInfo } from '../redux/actions/userAction';
import { fetchApiThunk } from '../redux/actions/postsAction';
import '../css/Posts.css';
import Loading from '../component/loading';

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
    dispatch(addInfo({ userName, phone }));
  };

  render() {
    const { userName, phone } = this.state;
    const { posts, isLoading } = this.props;

    if (isLoading) {
      return <Loading />;
    }

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
  ...state.posts,
});

export default connect(mapStateToProps, null)(Posts);
