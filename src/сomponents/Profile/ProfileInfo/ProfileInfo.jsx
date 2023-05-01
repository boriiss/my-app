import classes from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
      return <Preloader />
    }

    return (
      <div>
        <div className={classes.desription}>
          <img src={profile.photos.large} />
          <div>Обо мне: <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
        </div>
      </div>
    );
}

export default ProfileInfo;