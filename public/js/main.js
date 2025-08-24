const deleteBtn = document.querySelectorAll(".fa-trash");
// // find the span inside of something that has the class of item

Array.from(deleteBtn).forEach((element) => {
  element.addEventListener("click", deleteBusiness);
});

async function deleteBusiness() {
  const bizName = this.parentNode.childNodes[1].innerText;
  const industryName = this.parentNode.childNodes[0].innerText;
  const siteName = this.parentNode.childNodes[2].innerText;
  const pNumber = this.parentNode.childNodes[3].innerText;
  const address = this.parentNode.childNodes[4].innerText;
  const cityName = this.parentNode.childNodes[5].innerText;
  const stateName = this.parentNode.childNodes[6].innerText;
  const zip = this.parentNode.childNodes[7].innerText;
  try {
    const response = await fetch("deleteBusiness", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bName: bizName,
        iName: industryName,
        webName: siteName,
        teleName: pNumber,
        adDress: address,
        cName: cityName,
        sName: stateName,
        zipCOde: zip,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

function copyright() {
  const date = document.getElementById("date");
  const year = new Date();

  if (date) {
    date.innerHTML = year.getFullYear();
  }
}

window.onload = () => {
  copyright();
};
