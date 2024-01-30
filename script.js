// userList.innerHTML = '';
const reset = document.querySelector("#reset");
const fname = document.querySelector(".firstName");
const lname = document.querySelector(".lastName");
const coun = document.querySelector(".country");
const pno = document.querySelector(".phoneNum");
const st = document.querySelector(".state");
const ct = document.querySelector(".city");
const vlg = document.querySelector(".village");

function display() {
  const localStorageData = localStorage.getItem("user");
  if (localStorageData) {
    const parsedData = JSON.parse(localStorageData);
    const sizeOfData = parsedData.length;
    fname.innerHTML = parsedData[sizeOfData - 1]["First Name"];
    lname.innerHTML = parsedData[sizeOfData - 1]["Last Name"];
    coun.innerHTML = parsedData[sizeOfData - 1]["Country"];
    pno.innerHTML = parsedData[sizeOfData - 1]["Phone Number"];
    st.innerHTML = parsedData[sizeOfData - 1]["State"];
    ct.innerHTML = parsedData[sizeOfData - 1]["City"];
    vlg.innerHTML = parsedData[sizeOfData - 1]["Village"];
  } else {
    let userData = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")): [];

    const firstName = prompt("Enter your first name :");
    if (!firstName) {
      alert("First name cannot be empty.");
      return;
    }

    const lastName = prompt("Entre your last name");
    if (!lastName) {
      alert("Last name cannot be empty.");
      return;
    }

    const country = prompt("Enter your country");
    if (!country) {
      alert("Country cannot be empty.");
      return;
    }

    const phoneNum = prompt("Enter your Phone Number");
    if (!phoneNum || isNaN(phoneNum) || phoneNum.length !== 10) {
      alert("Phone number must be a 10-digit number.");
      return;
    }

    const state = prompt("Enter your state");
    if (!state) {
      alert("State cannot be empty.");
      return;
    }

    const city = prompt("Enter your city");
    if (!city) {
      alert("City cannot be empty.");
      return;
    }

    const village = prompt("Enter your village");
    if (!village) {
      alert("Village cannot be empty.");
      return;
    }

    const data = {
      "First Name": firstName,
      "Last Name": lastName,
      Country: country,
      "Phone Number": phoneNum,
      State: state,
      City: city,
      Village: village,
    };
    userData.push(data);
    const stringData = JSON.stringify(userData);
    localStorage.setItem("user", stringData);

    display();
  }
}
display();

reset.addEventListener("click", () => {
  localStorage.removeItem("user");
  display();
});
