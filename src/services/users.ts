const API_KEY = process.env.MOCK_API_KEY;

const url = `https://${API_KEY}.mockapi.io/users`;

export const fetchUsers = async () => {
  try {
    const response = await fetch(url);
    const users = await response.json();
    return users;
  } catch (error) {
    // console.log("error fetching users===", error);
  }
};
