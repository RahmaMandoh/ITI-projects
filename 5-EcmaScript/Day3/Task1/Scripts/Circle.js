import { Shap } from "./Shap.js";

export class Circle extends Shap{
    constructor(r){
        super(r);
    }
    area(){
        return Math.PI * Math.pow(this.height, 2);
    }
    parameter(){
        return 2 * Math.PI * this.height;
    }
}