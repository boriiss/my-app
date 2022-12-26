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

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

    return (
        <div className={classes.posts}>
          <h2>
            My posts
          </h2>
          <div className={classes.newPost}>
              <div>
                <textarea name="" id="" cols="30" rows="5" ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
              </div>
              <button onClick={addPost}>Add post</button>
          </div>  
          <div>
            {postsElements}
          </div>
        </div>
    );
}

export default MyPosts;