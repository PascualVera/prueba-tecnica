export async function getUsers() {
  try {
    const response = await fetch("https://s2grupo-b4529-default-rtdb.europe-west1.firebasedatabase.app/users.json");
    const users = await response.json();
    return users?.map(user => ({
      user_name: `${user.name} ${user.surname}`,
      age: user.age,
      available: user.available,
      last_login: new Date(user.last_login * 1000).toLocaleDateString("es-ES")
    }));
  } catch (error) {
    console.error(error.message);
  }
}
