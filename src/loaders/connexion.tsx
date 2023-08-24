import DataUser from "../services/DataUser";

export const loader = async () => {
  const data = DataUser.getInstance();
  return data.loadUsers();
};
