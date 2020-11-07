(function () {
    this.name = "Arrow function";
    let o;
    (function () {
        o = {
            items: [1, 2, 3, 4],
            name: "Regular function",
            thisInRegular() {
                console.log("Example of " + this.name);
            },
            thisInArrow: () => {
                console.log("Example of " + this.name);
            },
            applySquares: function () {
                const doSth = (item) => {
                    console.log(item);
                    console.log(this.name);
                };
                this.items.forEach(doSth)
            }
        };
    })();
    
    o.applySquares();
    // o.thisInRegular();
    // o.thisInArrow();
})();
