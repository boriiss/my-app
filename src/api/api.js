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
      return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId){
      return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}

export const headerAPI = {
  checkAuth(){
      return instance.get(`auth/me`).then(response => {
          return response.data;
        });
  }
}

export const userAPI = {
  getUserProfile(userId){
      return instance.get(`profile/${userId}`).then(response => {
          return response.data;
        })
  }
}
