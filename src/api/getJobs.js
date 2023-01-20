import axios from "axios";

const getJobs = async () => {
  const url = process.env.VUE_APP_URL || "http://localhost:3000";
  const response = await axios.get(`${url}/jobs`);
  return response.data;
};

export default getJobs;
