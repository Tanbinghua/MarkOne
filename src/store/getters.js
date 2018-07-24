const getters = {
  nickname: state => state.user.nickname,
  avatar: state => state.user.avatar,
  create_at: state => state.user.create_at,
  email: state => state.user.email,
  phone: state => state.user.phone,
  last_login: state => state.user.last_login,
  name: state => state.user.name,
  type: state => state.user.type,
  is_admin: state => state.user.is_admin
}
export default getters
