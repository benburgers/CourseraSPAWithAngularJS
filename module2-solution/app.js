(function () {
    "use strict";

    angular
        .module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    function ShoppingListCheckOffService() {
        const service = this;
        service.toBuy = [
            { name: "cookies", quantity: 10 },
            { name: "water bottles", quantity: 5 },
            { name: "ice creams", quantity: 15 },
            { name: "headsets", quantity: 2 },
            { name: "keyboards", quantity: 1 }
        ];
        service.alreadyBought = [];

        service.getItemsToBuy = () => {
            return this.toBuy;
        }

        service.getItemsAlreadyBought = () => {
            return this.alreadyBought;
        }

        service.buy = (itemToBuy) => {
            const itemIndex = service.toBuy.indexOf(itemToBuy);
            service.toBuy.splice(itemIndex, 1)[0];
            service.alreadyBought.push(itemToBuy);
        }
    }

    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {
        const itemBuyer = this;
        itemBuyer.service = ShoppingListCheckOffService;
        itemBuyer.toBuy = itemBuyer.service.getItemsToBuy();
        itemBuyer.buy = itemBuyer.service.buy;
    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        const itemKeeper = this;
        itemKeeper.service = ShoppingListCheckOffService;
        itemKeeper.alreadyBought = this.service.getItemsAlreadyBought();
    }
})();