function Fashion(name, product, location){
    this.name = name;
    this.product =product;
    this.location = location;

}

function Customer(name, product){
    this.name = name;
    this.product = product;

}

Object.setPrototypeOf(Customer.prototype, Fashion.prototype);
// Customer.prototype = Object.create(Fashion.prototype);

Fashion.prototype.makeOrders = function (){
    return `${this.name} has an order for the ${this.product} in ${this.location}`;
}
Customer.prototype.productOrdered = function(){
    return `${this.name} has ordered ${this.product}`;
}




const fashion = new Fashion("Panacya", "Jeans", "Nairobi");
const customer = new Customer("Vivian","Skirt");

console.log(fashion);
console.log(fashion.name);
console.log(fashion.makeOrders());
console.log(customer.productOrdered());
console.log(customer.makeOrders());


