import Color from "./color";
import Matrix from "./matrix";
import Vec4 from "./vec4";

export default class Face {
    verticies : StaticArray<Vec4>;
    color : Color;
    textureId : u8;
    uv : Float32Array; //2d textures [x,y , x,y , x,y ...]
    constructor(verticies : StaticArray<Vec4>, uv : Float32Array, color : Color, textureId: u8) {
        this.verticies = verticies;
        this.color = color;
        this.uv = uv;
        this.textureId = textureId;
    }
    Project(projection : Matrix) : Face{//the projection matrix should transform to normal coordinates ([-1,1])
        let vertices : StaticArray<Vec4> = new StaticArray<Vec4>(3); 
        for(let i=0; i<this.verticies.length; i++) {
            vertices[i] = this.verticies[i].Product(projection);
        }
        return new Face(vertices, this.uv, this.color, this.textureId);
    }
    ProjectR(projection : Matrix) : void{//will change the verticies (might be a problem. they could be shared between faces)
        for(let i=0; i<this.verticies.length; i++) {
            this.verticies[i].ProductR(projection);
        }
    }
}