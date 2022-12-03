(() => {
  const app = {
    init() {
      this.cacheElements();
      this.eventListeners();
    },
    cacheElements() {
      this.$loaderElement = document.querySelector("#loader");
      this.$startBtn = document.querySelector(".btn-start");
      this.$optionBtns = document.querySelectorAll(".optionBtn");
    },
    eventListeners() {
      this.$startBtn.addEventListener("click", function (e) {
        e.target.parentNode.classList.add("close");
      });
      this.$optionBtns.forEach((option) => {
        option.addEventListener("click", function (e) {
          console.log("click", e.target);
          this.$elementsVis = document.querySelectorAll(".visible");
          this.$elementsVis.forEach((element) => {
            element.classList.remove("visible");
            element.setAttribute("visible", "false");
          });
          this.$elementShow = document.querySelectorAll(
            `.${e.target.dataset.name}`
          );
          this.$elementShow.forEach((elementShow) => {
            elementShow.classList.add("visible");
            elementShow.setAttribute("visible", "true");
          });
          this.$elementsSel = document.querySelector(".selected");
          if (this.$elementsSel) {
            this.$elementsSel.classList.remove("selected");
          }
          e.target.parentNode.classList.add("selected");
        });
      });
    },
  };
  app.init();
})();
