import Matrix from "./matrix";
import Vec4 from "./vec4";

export default class Camera {
    pos: Vec4;
    rot: Vec4; //z is the camera zoom
    projection: Matrix; 
    constructor(pos: Vec4, rot: Vec4) {
        this.pos = pos;
        this.rot = rot;
        this.projection = new Matrix();//goofy ahh compiler needs this
        this.UpdateProjectionMatrix();
    }
    Translate(vec4 :Vec4) {
        this.pos.Add(vec4);
    }
    SetPosition(vec4 : Vec4) {
        this.pos = vec4;
    }
    TransformRot() {
        
    }
    UpdateProjectionMatrix() {
        this.projection = new Matrix();
    }
}