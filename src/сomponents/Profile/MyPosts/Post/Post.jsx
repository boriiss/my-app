import classes from './Post.module.css';

const Post = (props) => {
    return (
      <div className={classes.postItem}>
        <img src="https://static.independent.co.uk/2022/08/21/10/newFile-1.jpg?quality=75&width=982&height=726&auto=webp" alt="" />
        {props.message}
        <div>like {props.likesCounts}</div>
      </div>
    );
}

export default Post;