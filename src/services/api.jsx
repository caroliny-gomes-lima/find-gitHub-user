import axios from "axios";

const baseURL = "https://api.github.com/users";

export async function getUserGithub(username) {
  try {
    const response = await axios.get(`${baseURL}/${username}`);
    return {
      data: response.data,
      notFound: false,
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { data: null, notFound: true };
    }
    return { data: null, notFound: true };
  }
}
