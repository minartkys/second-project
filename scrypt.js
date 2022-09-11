const btn = document.querySelector(".btn");

async function setRequest() {
  const ts = Math.round(new Date().getTime() / 1000);
  const sign = md5(`89341e792125cf739689211d4e37b3a6f18f1${ts}`);

  let url = `https://www.futsell.ru/ffa19/api/pop/id/89341/ts/${ts}/sign/${sign}/sku/FFA19PS4/`;
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500/",
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
btn.addEventListener("click", setRequest);
