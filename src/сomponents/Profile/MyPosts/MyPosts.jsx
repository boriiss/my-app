import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} id={p.id} likesCounts={p.likesCounts} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

    return (
        <div className={classes.posts}>
          <h2>
            My posts
          </h2>
          <div className={classes.newPost}>
            <form action="">
              <div>
                <textarea name="" id="" cols="30" rows="5" ref={newPostElement}></textarea>
              </div>
              <button onClick={addPost}>Add post</button>
            </form>
          </div>  
          <div>
            {postsElements}
          </div>
        </div>
    );
}

export default MyPosts;