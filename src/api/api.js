import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8dd5623d-5be2-47f4-8fd9-17809eacbc7d"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
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
      console.warn('Obsolete method.Please profileApi object.');
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
  }
}

export const authAPI = {
  me() {
      return instance.get(`auth/me`)
  }
}
