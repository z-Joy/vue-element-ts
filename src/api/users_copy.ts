import request from '@/utils/request-test'

export const getUserInfo = (data: any) =>
  request({
    url: 'mock/users-info.json',
    method: 'get',
    data
  })

export const testRequest = (data: any) =>
  request({
    url: 'mock/success.json',
    method: 'get',
    data
  })

export const login = (data: any) =>
  request({
    url: 'mock/login.json',
    method: 'get',
    data
  })

export const logout = () =>
  request({
    url: '/users/logout',
    method: 'post'
  })
