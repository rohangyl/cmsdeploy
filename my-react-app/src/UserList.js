import axios from 'axios';

const getUsersByAdmin = async (adminId) => {
  try {
    const response = await axios.get(`http://localhost:8081/api/admins/${adminId}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Use the getUsersByAdmin function in your UserList component
