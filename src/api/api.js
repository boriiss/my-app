import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fa77153b-f55b-4ea8-b337-3b2ec9c34fbb"
    }
})

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
          }).then(response => {
            return response.data;
          });
    },
    follow(userId){
      return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
      return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
      return profileAPI.getProfile(userId);
  }
}

export const profileAPI = {
  getProfile(userId){
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status){
    return instance.put(`profile/status`, { status })
  },
  savePhoto(photoFile){
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProlife(profile){
    return instance.put(`profile`, profile)
  }
}

export const authAPI = {
  me() {
      return instance.get(`auth/me`)
  },
  login(email, password, rememerMe = false) {
    return instance.post(`auth/login`, {email, password, rememerMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}
