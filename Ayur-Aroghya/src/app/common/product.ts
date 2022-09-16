export class Product {
    static id: any;

    constructor(
    public id:number,
    public name:String,
    public image:String,
    public drug:String,
    public mfg:String,
    public mfgdate:number,
    public usebefore:number,
    public mrp:number,
    public discount:number,
    public quantity:number,
    public catId:number){}
}
