type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const originalProfile: User = {
  name: "John",
  surname: "Travolta",
  email: "travolta@mail.com",
  password: "travoltaSecret",
};

function createOrUpdateUser(initialValues: User, updates: Partial<User>) {
  return { ...initialValues, ...updates };
}

createOrUpdateUser(originalProfile, {
  email: "user@mail.com",
  password: "password123",
});
