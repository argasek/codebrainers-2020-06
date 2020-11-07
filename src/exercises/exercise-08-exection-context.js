// Example of reaching context of someObject via:

// ...arrow function
(function () {
  this.contextName = "Global context";
  let someObject;
  (function () {
    someObject = {
      items: [1, 2, 3, 4],
      contextName: "Object context",
      iterateOverItems: function () {
        const showItemAndContextName = (item) => {
          console.log(item);
          console.log(this.contextName);
        };
        this.items.forEach(showItemAndContextName)
      }
    };
  })();

  someObject.iterateOverItems();
})();

// ...context binding
(function () {
  this.contextName = "Global context";
  let someObject;
  (function () {
    someObject = {
      items: [1, 2, 3, 4],
      contextName: "Object context",
      iterateOverItems: function () {
        const showItemAndContextName = function (item) {
          console.log(item);
          console.log(this.contextName);
        };
        this.items.forEach(function (item) {
          showItemAndContextName.call(this, item);
        })
      }
    };
  })();

  someObject.iterateOverItems();
})();

// ...context binding during function execution
(function () {
  this.contextName = "Global context";
  let someObject;
  const that = this;
  (function () {
    someObject = {
      items: [1, 2, 3, 4],
      contextName: "Object context",
      iterateOverItems: function () {
        const showItemAndContextName = function (item) {
          console.log(item);
          console.log(this.contextName);
        };
        showItemAndContextName();
        showItemAndContextName.call(this);
      }
    };
  })();

  someObject.iterateOverItems();
})();

