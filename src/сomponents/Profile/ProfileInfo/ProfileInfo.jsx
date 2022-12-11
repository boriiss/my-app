import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img className={classes.profileImg} src="https://oir.mobi/uploads/posts/2021-06/1624404216_1-oir_mobi-p-bereg-okeana-s-palmami-priroda-krasivo-fot-1.jpg" alt="" />
        </div>
        <div className={classes.desription}>
          ava + desription
        </div>
      </div>
    );
}

export default ProfileInfo;