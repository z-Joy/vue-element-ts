import request from '@/utils/request'

export const getUserInfo = (data: any) =>
  request({
    url: 'usersInfo',
    method: 'post',
    data
  })

export const login = (data: any) =>
  request({
    url: 'usersLogin',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: 'usersLogout',
    method: 'post'
  })
