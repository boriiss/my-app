import classes from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile) {
      return <Preloader />
    }

    return (
      <div>
        <div>
          <img className={classes.profileImg} src="https://oir.mobi/uploads/posts/2021-06/1624404216_1-oir_mobi-p-bereg-okeana-s-palmami-priroda-krasivo-fot-1.jpg" alt="" />
        </div>
        <div className={classes.desription}>
          <img src={props.profile.photos.large} />
          <p>Обо мне: {props.profile.aboutMe}</p>
        </div>
      </div>
    );
}

export default ProfileInfo;