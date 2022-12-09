import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.posts}>
          <h2>
            My posts
          </h2>
          <div className={classes.newPost}>
            <form action="">
              <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
              </div>
              <button>Add post</button>
            </form>
          </div>  
          <div>
            <Post message="Hello" />
            <Post message="How are you?" />
            <Post message="It's my first post"/>
          </div>
        </div>
    );
}

export default MyPosts;