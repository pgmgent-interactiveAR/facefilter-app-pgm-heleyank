(() => {
  const app = {
    init() {
      this.cacheElements();
      this.generateUI();
      this.eventListeners();
    },
    cacheElements() {
      this.$loaderElement = document.querySelector("#loader");
      this.$startBtn = document.querySelector(".btn-start");
    },
    generateUI() {},
    eventListeners() {
      document.addEventListener("DOMContentLoaded", function () {
        this.$sceneElement = document.querySelector("a-scene");
        this.$sceneElement.addEventListener("loaded", function (e) {
          this.$loaderElement.style.display = "none";
        });
      });
      this.$startBtn.addEventListener("click", function (e) {
        e.target.parentNode.classList.add("close");
      });
    },
  };
  app.init();
})();
