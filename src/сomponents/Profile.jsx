import classes from './Profile.module.css';

const Profile = () => {
    return (
      <div className={classes.content}>
        <div>
          <img src="https://oir.mobi/uploads/posts/2021-06/1624404216_1-oir_mobi-p-bereg-okeana-s-palmami-priroda-krasivo-fot-1.jpg" alt="" />
        </div>
        <div className={classes.desription}>
          ava + desription
        </div>
        <div className={classes.posts}>
          <h2>
            My posts
          </h2>
          <div className={classes.newPost}>
            New post
          </div>  
          <div>
            <div>
              post1
            </div>
            <div>
              post2
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;