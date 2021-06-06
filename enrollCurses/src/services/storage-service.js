export default {
  set(parameterName, data) {
    localStorage.setItem(parameterName, JSON.stringify(data));
  },
  get(parameterName) {
    return JSON.parse(localStorage.getItem(parameterName));
  },
  clear() {
    localStorage.clear();
  },
};
