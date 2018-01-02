
export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: 'api/session',
    data: {user: {username: user.username, password: user.password}}
  });
};

export const logout = (user) => {
  return $.ajax({
    method: "DELETE",
    url: 'api/session',
    data: {user: {username: user.username, password: user.password}}
  });
};

export const newUser = (user) => {
  return $.ajax({
    method: "POST",
    url: 'api/users',
    data: {user: {username: user.username, password: user.password}}
  });
};
