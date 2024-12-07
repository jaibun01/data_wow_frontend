export interface IResLogin {
    access_token: string
}

export interface IRequsetLogin {
    username: string
    password: string
}

export interface IResGetProfile {
    "sub": string
    "username": string
    "iat": number
    "exp": number
}