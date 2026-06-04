// 统一管理用户相关接口
import request from '@/utils/requests'
import type { LoginForm, LoginResponse, UserInfoResponse } from '../type'

enum API {
  LOGIN_URL = '/user/login',
  LOGOUT_URL = '/user/logout',
  INFO_URL = '/user/info',
}

// 暴露请求函数
export const LoginAPI = (data: LoginForm) => request.post<LoginResponse>(API.LOGIN_URL, data)

export const LogoutAPI = () => request.post(API.LOGIN_URL)

export const GetInfoAPI = () => request.get<UserInfoResponse>(API.INFO_URL)
