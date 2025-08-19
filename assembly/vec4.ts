export default class Vec4 {
    x: f32;
    y: f32;
    z: f32;
    w: f32;//w exists to make a vector resist translations from homogenous matrices
    constructor(x:f32=0, y:f32=0, z:f32=0, w:f32=1) {
        this.x=x;
        this.y=y;
        this.z=z;
        this.w=w;
    }
    Add(vec4 : Vec4) {
        this.x += vec4.x;
        this.y += vec4.y;
        this.z += vec4.z;
    }
    Sub(vec4 : Vec4) {
        this.x -= vec4.x;
        this.y -= vec4.y;
        this.z -= vec4.z;
    }
    Dot(vec4 : Vec4) :f32 {
        return this.x * vec4.x + this.y * vec4.y + this.z * vec4.z;
    }
    Cross(vec4 : Vec4) : Vec4 {
        return new Vec4(
            this.y*vec4.z-this.z*vec4.y,
            this.z*vec4.x-this.x*vec4.z,
            this.x*vec4.y-this.y*vec4.x,
            this.z
        );
    }
}