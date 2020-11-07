(function () {
  this.name = "Arrow function";

  let o = {
    name: "Regular function",
    thisInRegular() {
      console.log("Example of " + this.name);
    },
    thisInArrow: () => {
      console.log("Example of " + this.name);
    },
  };

  o.thisInRegular();
  o.thisInArrow();
})();
