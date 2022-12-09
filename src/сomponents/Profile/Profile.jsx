import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div>
        <div>
          <img className={classes.profileImg} src="https://oir.mobi/uploads/posts/2021-06/1624404216_1-oir_mobi-p-bereg-okeana-s-palmami-priroda-krasivo-fot-1.jpg" alt="" />
        </div>
        <div className={classes.desription}>
          ava + desription
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;