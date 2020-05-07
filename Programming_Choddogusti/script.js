class Store {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.prices = {};
        this.stock = {};
        this.totalSales = 0;
    }
    isItemAvailable(itemName) {
        let itemIndex = this.items.indexOf(itemName);
        if(itemIndex == -1) {
            return false;
        } else {
            return true;
        }
    }

    getPrice(name) {
        var isAvailable = this.isItemAvailable(name);
        if(isAvailable == true) {
            var itemPrice = this.prices[name];
            return itemPrice;
        } else {
            console.log("Sorry, we do not have the item");
            
        }
    }

    getTotalSale() {
        console.log(this.totalSales);
    }

    sellItem(name, quantity) {
        var available = this.stock[name];
        if(available < quantity) {
            console.log("Sorry, we do not have enough");
            return;
        } else {
            var itemPrice = this.getPrice(name);
            var currentSale = itemPrice * quantity;
            this.totalSales = this.totalSales + currentSale;
            var remaining = available - quantity;
            this.stock[name] = remaining;
            console.log("Thank's for your purcase");            
        }
    }
    
    addItem(name, quantity, price) {
        var isExisting = this.isItemAvailable(name);
        if(isExisting == true) {
            var available = this.stock[name];
            this.stock[name] = available + quantity;
        } else {
            this.items.push(name);
            this.prices[name] = price;
            this.stock[name] = quantity;
        }
    }
}



let alamStore = new Store("Alam Traders");
    alamStore.addItem("shirt", 40, 300);
    alamStore.addItem("pant", 50, 700);

console.log(alamStore);
console.log(alamStore.getPrice("pant"));
console.log(alamStore.sellItem("shirt", 10));
console.log(alamStore.getTotalSale());















//console.log(alamStore.isItemAvailable("shirt"));
