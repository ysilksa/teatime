// getAllUsers
export async function getAllUsers() {
    const users = await fetch('http://localhost:3030/api/users', {
      method: 'GET',
    });
    if (!users.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await users.json();
    
    // ensure required fields are met 
    return data;
  } 
  

// getUserbyID
export const getUserbyID = async (userID) => {
    const users = await fetch(`http://localhost:3030/api/data/users/${userID}`, {
        method: 'GET',
      });
    if (!users.ok) {
        throw new Error('Failed to fetch users')
    }

    const user = await users.json();

    return user;

};