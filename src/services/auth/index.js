export const login = (email, pwd) => {
  return true
}

export const logout = (user) => {
  return false
}

export const requirePwd = (user) => {

}

export const setNewPwd = (pwd) => {

}

export const fakeAuth = {
  isAuth: false,
  login(cb) {
    this.isAuth = true
    setTimeout(cb, 100)
  },
  logout(cb) {
    this.isAuth = false
    setTimeout(cb, 100)
  }
}