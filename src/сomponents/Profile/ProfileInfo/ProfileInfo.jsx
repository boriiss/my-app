import classes from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus.jsx';

const ProfileInfo = (props) => {
    if(!props.profile) {
      return <Preloader />
    }

    return (
      <div>
        <div className={classes.desription}>
          <img src={props.profile.photos.large} />
          <ProfileStatus status="kdjhf"/>
          <p>Обо мне: {props.profile.aboutMe}</p>
        </div>
      </div>
    );
}

export default ProfileInfo;