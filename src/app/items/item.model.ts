

export class Item {
    public id: number;
    public name : string;
    public category:string;
    public description:string;
    public  price : number ;
    public quantity : number;
    public status:string;
    public totalavailable:number;
    public imagepath: string;

    constructor(id : number,name : string,category:string,description:string,price : number,quantity : number,status:string,totalavailable:number,imagepath: string){
        this.id = id;
        this.name=name;
        this.category=category;
        this.description=description;
        this.price=price; 
        this.quantity=quantity;
        this.status=status;
        this.totalavailable=totalavailable;
        this.imagepath=imagepath;
       

    }

}