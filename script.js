async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

const btnRandom = document.querySelector("#btn-random");
const imgprofile = document.querySelector("#img-profile");
const prname = document.querySelector("#p-name");
const address = document.querySelector("#p-address");
const mail = document.querySelector("#p-email");

btnRandom.onclick = async () => {
  btnRandom.innerText = "Loading . . .";
  btnRandom.disabled = true;

  prname.innerText = resp.data[0].results.name.first;
  address.innerText = resp.data.results.city;
  mail.innerText = resp.data.results.email;
  imgprofile.src = resp.data[i].picture.large;
};

imgprofile.onload = () => {
  btnRandom.innerText = "Generate more ..";
  btnRandom.disabled = false;
};
