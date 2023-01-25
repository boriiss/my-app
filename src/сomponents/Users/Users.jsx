import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
  if(props.users.length === 0) {
    props.setUsers([
      {id: 1, photoUrl: 'https://img5tv.cdnvideo.ru/webp/shared/files/202210/1_1592599.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Moskow', country: 'Russia'}},
      {id: 2, photoUrl: '', followed: true, fullName: 'Dmitry', status: 'I am a no boss', location: {city: 'Moskow', country: 'Russia'}},
      {id: 3, photoUrl: '', followed: false, fullName: 'Dmitry', status: 'I am a so so boss', location: {city: 'Moskow', country: 'Russia'}}
    ])
  }

  return (
    <div>
        {
          props.users.map( u => <div key={u.id}>
            <span>
              <div>
                <img src={u.photoUrl} alt="" className={styles.userPhoto} />
              </div>
              <div>
                { u.followed 
                    ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button> 
                    : <button onClick={() => { props.follow(u.id) }}>Follow</button> }
              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </span>
            </span>
          </div>
          )
        }
    </div>
  );
}

export default Users;