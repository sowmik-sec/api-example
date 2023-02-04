const loadUserFetch = () => {
  const url = `https://randomuser.me/api/?gender=female`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUser(data))
    .catch((error) => console.log(error));
};

const loadUserAsync = async () => {
  const url = `https://randomuser.me/api/?gender=female`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data);
  } catch (error) {
    console.log(error);
  }
};

const displayUser = (user) => {
  console.log(
    user.results[0].name.title,
    user.results[0].name.first,
    user.results[0].name.last
  );
};
