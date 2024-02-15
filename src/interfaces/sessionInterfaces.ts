interface ISessionRequest {
    email: string
    password: string
}
interface ISessionResponse {
    token: string
}

export { ISessionRequest, ISessionResponse }
