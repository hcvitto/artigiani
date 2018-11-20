const signup = (email, pwd) => {
  localStorage.setItem('user', {
    id: 1,
    email: email
  });
  console.log(localStorage.getItem('user'))
}
/*
const login = (email, pwd) => {
  return true
}

const logout = (user) => {
  return false
}

const requirePwd = (user) => {

}

const setNewPwd = (pwd) => {

}
*/


export const fakeAuth = {
  isAuth: false,
  login(cb) {
    this.isAuth = true
    setTimeout(cb, 100)
  },
  logout(cb) {
    this.isAuth = false
    setTimeout(cb, 100)
  },
  signup(email, pwd) {
    setTimeout((email, pwd) => {
      signup(email, pwd)
    }, 100)
  }
}