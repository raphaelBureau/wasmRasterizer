import Color from "./color";
import Cube from "./cube";
import Geo from "./geo";
import Vec4 from "./vec4";

export class Engine {
    geometry : Geo[];
    constructor() {
        this.geometry = new Array();
        let red : Color = new Color(255);
        this.geometry.push(new Cube(new Vec4(0,0,-20),5,0,red));
    }
    Tick(delta: f32) : void {

    }
}