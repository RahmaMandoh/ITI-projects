export class Shap{
    constructor(height){
        if(this.constructor == Shap){
            throw `This class is an abstract class`;
        }
        this.height = height;
    }
    area(){
        return this.height * this.height;
    }
    parameter(){
        return 2 * (this.height + this.height);
    }
    toString(){
        return `The area is ${this.area()}, and the parameter is ${this.parameter()}.`;
    }
}
