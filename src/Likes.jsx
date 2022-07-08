import { rootReducer } from './redux/rootReducer';
import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from './redux/action';

const Likes = (props) => {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLike}>❤ {props.likes}</button>
      <button onClick={props.onDecrementLike}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
  const { likesReducer } = state
  return {
    likes: likesReducer.likes
  }
}

function mapDispatchToPros(dispatch) {
  return {
    onIncrementLike: () => dispatch(incrementLikes()),
    onDecrementLike: () => dispatch(decrementLikes())
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(Likes);