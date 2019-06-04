async function getBattles() {
  const request = new Request("https://api.got.show/api/show/battles");

  const response = await fetch(request);
  const data = response.json();
  return data;
}
(async () => {
  const l = await getBattles();
  console.log(l[0]);
  console.log("stop");
})();
