export const fName = (state = "Michael", action) => {
  switch (action.type) {
    case "NAME":
      return action.payload;
    default:
      return state;
  }
};

export const Sex = (state = "Male", action) => {
  switch (action.type) {
    case "SEX":
      return action.payload;
    default:
      return state;
  }
};

export const Age = (state = 21, action) => {
  switch (action.type) {
    case "AGE":
      return action.payload;
    default:
      return state;
  }
};

export const Proff = (state = "Student", action) => {
  switch (action.type) {
    case "PROFFRSSION":
      return action.payload;
    default:
      return state;
  }
};
