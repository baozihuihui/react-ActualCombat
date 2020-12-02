export default function reducer(action, state, payload) {
  switch (action) {
    case "add":
      return { ...state, userList: [...state.userList, payload] };
    case "removeByUserId":
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== payload),
      };
    case "selectUser":
      return {
        ...state,
        selectUserId: payload,
      };
    case "updateUserStatus":
      return {
        ...state,
        userList: state.userList.map((user) => ({ ...user, isOnline: true })),
      };
    default:
      return state;
  }
}
