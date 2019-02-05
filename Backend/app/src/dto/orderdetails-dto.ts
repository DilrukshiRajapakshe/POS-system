export class OrderDetailsDTO{
    constructor(public orderId:number,public itemCode:string,public qty:number,public unitPrice:number){}
}