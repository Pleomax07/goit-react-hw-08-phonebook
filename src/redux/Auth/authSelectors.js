const getIsLoggedIn = state => state.auth.user.name;

const getUserName = state => state.auth.user.name;

// console.log(getUserName)
const authSelectors = {
  getIsLoggedIn,
  getUserName,
};
export default authSelectors;
