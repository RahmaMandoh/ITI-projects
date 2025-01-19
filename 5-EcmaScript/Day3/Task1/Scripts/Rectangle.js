import { Shap } from "./Shap.js";
export class Rectangle extends Shap{
    constructor(height, width){
        super(height);
        this.width = width;
    }
}