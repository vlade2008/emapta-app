import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = {
  getData: async () => {
    try {
      const response = await axios.get(`${API_URL}/referrals`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postData: async data => {
    try {
      const response = await axios.post(`${API_URL}/referrals`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;