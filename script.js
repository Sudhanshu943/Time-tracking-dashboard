fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const dailyBtn = document.getElementById("daily");
    const weeklyBtn = document.getElementById("weekly");
    const monthlyBtn = document.getElementById("monthly");

    dailyBtn.addEventListener(
      "click",
      (dailyData = () => {
        data.forEach((item) => {
          const box = document.querySelector(
            `.box-${item.title.toLowerCase()}`
          );
          box.querySelector(
            ".time"
          ).textContent = `${item.timeframes.daily.current}hrs`;
          box.querySelector(
            ".previous"
          ).textContent = `Yesterday - ${item.timeframes.daily.previous}hrs`;
        });
      })
    );
    weeklyBtn.addEventListener(
      "click",
      (weeklyData = () => {
        data.forEach((item) => {
          const box = document.querySelector(
            `.box-${item.title.toLowerCase()}`
          );
          box.querySelector(
            ".time"
          ).textContent = `${item.timeframes.weekly.current}hrs`;
          box.querySelector(
            ".previous"
          ).textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;
        });
      })
    );
    monthlyBtn.addEventListener(
      "click",
      (monthlyData = () => {
        data.forEach((item) => {
          const box = document.querySelector(
            `.box-${item.title.toLowerCase()}`
          );
          box.querySelector(
            ".time"
          ).textContent = `${item.timeframes.monthly.current}hrs`;
          box.querySelector(
            ".previous"
          ).textContent = `Last Month - ${item.timeframes.monthly.previous}hrs`;
        });
      })
    );
  })
  .catch((error) => console.error("Error:", error));
