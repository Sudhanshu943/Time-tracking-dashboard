fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const dailyBtn = document.getElementById("daily");
    const weeklyBtn = document.getElementById("weekly");
    const monthlyBtn = document.getElementById("monthly");

    const removeActiveClass = () => {
      dailyBtn.classList.remove("active");
      weeklyBtn.classList.remove("active");
      monthlyBtn.classList.remove("active");
    };

    const displayData = (timeframe) => {
      data.forEach((item) => {
        const box = document.querySelector(
          `.box-${item.title.toLowerCase().replace(/\s+/g, "")}`
        );
        box.querySelector(
          ".time"
        ).textContent = `${item.timeframes[timeframe].current}hrs`;
        box.querySelector(".previous").textContent = `${
          timeframe === "daily"
            ? "Yesterday"
            : timeframe === "weekly"
            ? "Last Week"
            : "Last Month"
        } - ${item.timeframes[timeframe].previous}hrs`;
      });
    };

    dailyBtn.addEventListener("click", () => {
      removeActiveClass();
      dailyBtn.classList.add("active");
      displayData("daily");
    });

    weeklyBtn.addEventListener("click", () => {
      removeActiveClass();
      weeklyBtn.classList.add("active");
      displayData("weekly");
    });

    monthlyBtn.addEventListener("click", () => {
      removeActiveClass();
      monthlyBtn.classList.add("active");
      displayData("monthly");
    });
  })
  .catch((error) => console.error("Error:", error));
