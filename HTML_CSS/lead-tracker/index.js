import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://leads-generator-app-e355f-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const leadRef = ref(db, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

onValue(leadRef, (snapshot) => {
  const snapshotExists = snapshot.exists();

  if (snapshotExists) {
    const data = snapshot.val();
    const myLeads = Object.values(data);
    render(myLeads);
  }
});

deleteBtn.addEventListener("dblclick", function () {
  remove(leadRef);
  ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", function () {
  push(leadRef, inputEl.value);
  inputEl.value = "";
});
