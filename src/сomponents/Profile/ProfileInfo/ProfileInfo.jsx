import classes from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if(!props.profile) {
      return <Preloader />
    }

    return (
      <div>
        <div className={classes.desription}>
          <img src={props.profile.photos.large} />
          <div>Обо мне: <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></div>
        </div>
      </div>
    );
}

export default ProfileInfo;