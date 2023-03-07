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
          <div>Обо мне: <ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
        </div>
      </div>
    );
}

export default ProfileInfo;