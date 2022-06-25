export const getCategories = (data) => {
  return {
    type: "FETCH",
    payload: data,
  };
};
