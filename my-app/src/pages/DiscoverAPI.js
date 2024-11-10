// getAllUsers
export async function getAllUsers() {
    const response = await fetch('https://disc-assignment-5-users-api.onrender.com/api/users', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    
    // Ensure each user object has the required fields
    return data.map(user => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      bio: user.bio,
      major: user.major,
      graduationYear: user.graduationYear,
      profilePicture: user.profilePicture,
      created_at: user.created_at,
    }));
  }
  