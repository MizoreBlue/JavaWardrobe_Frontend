// api 需要的参数类型

export interface LoginForm {
  username: string
  password: string
}

export interface LoginResponse {
  code: number
  token: string
}

export interface UserInfoResponse {
  code: number
  data: {
    userId: number
    avatar: string
    password: string
    desc: string
    roles: string[]
    buttons: string[]
    routes: string[]
    token: string
  }
}
