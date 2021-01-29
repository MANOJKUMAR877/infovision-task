import axios from "axios";
const apiFetch = async () => {
  try {
    let apiValue = await axios.get(
      ` https://5fc952922af77700165ae75d.mockapi.io/api/task/line-chart`
    );
    return apiValue;
  } catch (error) {
    return error;
  }
};

export default apiFetch;
