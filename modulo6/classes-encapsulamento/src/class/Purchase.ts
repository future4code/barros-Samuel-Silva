export class Purchase{
    constructor ( 
        private id: string,
        private userId: string,
        private productId: string,
        private quantify: number,
        private totalPrice: number){
            this.id = id;
            this.userId = userId;
            this.productId = productId;
            this.quantify = quantify;
            this.totalPrice = totalPrice;
    }
}

export class PurchaseDB{
    constructor ( 
        private id: string,
        private user_id: string,
        private product_id: string,
        private quantify: number,
        private total_price: number){
            this.id = id;
            this.user_id = user_id;
            this.product_id = product_id;
            this.quantify = quantify;
            this.total_price = total_price;
    }
}