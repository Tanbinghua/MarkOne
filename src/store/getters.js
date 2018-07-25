const getters = {
  nickname: state => state.nickname,
  avatar: state => state.avatar,
  created_at: state => state.created_at,
  email: state => state.email,
  phone: state => state.phone,
  last_login: state => state.last_login,
  name: state => state.name,
  type: state => state.type,
  is_admin: state => state.is_admin
}
export default getters
