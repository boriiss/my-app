import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 1, message: 'Hello', likesCounts: 54},
    {id: 2, message: 'How are you?', likesCounts: 10},
    {id: 3, message: 'It\'s my first post', likesCounts: 12}
  ]

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
            <Post message={postData[0].message} id={postData[0].id} likesCounts={postData[0].likesCounts}/>
          </div>
        </div>
    );
}

export default MyPosts;