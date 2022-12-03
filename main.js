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
      //code to close instruction screen
      this.$startBtn.addEventListener("click", function (e) {
        e.target.parentNode.classList.add("close");
      });

      //add click event for all option buttons
      this.$optionBtns.forEach((option) => {
        option.addEventListener("click", function (e) {
          //checks if elements are visible and changes them to invisible
          this.$elementsVis = document.querySelectorAll(".visible");
          this.$elementsVis.forEach((element) => {
            element.classList.remove("visible");
            element.setAttribute("visible", "false");
          });

          //selects element you want to show and change to visible
          this.$elementShow = document.querySelectorAll(
            `.${e.target.dataset.name}`
          );
          this.$elementShow.forEach((elementShow) => {
            elementShow.classList.add("visible");
            elementShow.setAttribute("visible", "true");
          });

          //add indicator to button to show which filter is active
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
