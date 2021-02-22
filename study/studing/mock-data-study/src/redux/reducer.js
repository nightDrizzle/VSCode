let obj = { count: 13 };
export default function reducer(state = obj.count, action) {
  switch (action.type) {
    case "ADD":
      return state + action.data;
      break;

    case "DEL":
      return state - action.data;
      break;
    default:
      return state;
  }
}
