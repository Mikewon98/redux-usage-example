export const fName = (fName) => {
  return {
    type: "NAME",
    payload: fName,
  };
};

export const Sex = (Sex) => {
  return {
    type: "SEX",
    payload: Sex,
  };
};

export const Age = (Age) => {
  return {
    type: "AGE",
    payload: Age,
  };
};

export const Proff = (Proff) => {
  return {
    type: "PROFFESSION",
    payload: Proff,
  };
};
