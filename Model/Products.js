class Products{
    // constructor(id, ownerId, title, imageUrl, description, price) {
    //     this.id = id;
    //     this.ownerId = ownerId;
    //     this.title = title;
    //     this.imageUrl = imageUrl;
    //     this.description = description;
    //     this.price = price;
    // }
    constructor(id, imageUrl, title, price, quantity, storeName, type) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.storeName = storeName;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
    }
}
export default Products;