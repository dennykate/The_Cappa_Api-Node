export const returnErrorMessage = (res, message) => {
  return res.status(404).json({ success: false, message });
};

export const returnSuccessMessage = (res, message, status = 200) => {
  return res.status(status).json({ success: true, ...message });
};

export const isExistInDatabase = async (id, Model) => {
  const data = await Model.findById(id);

  return data;
};
