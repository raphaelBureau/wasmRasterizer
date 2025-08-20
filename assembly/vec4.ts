import Matrix from "./matrix";

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
    Add(vec4 : Vec4) : Vec4 {
        return new Vec4(this.x+vec4.x, this.y+vec4.y, this.z+vec4.z, this.w);
    }
    AddR(vec4 : Vec4) :void {//dosent create a new vector (fuck immutability)
        this.x += vec4.x;
        this.y += vec4.y;
        this.z += vec4.z;
    }
    Sub(vec4 : Vec4) : Vec4 {
        return new Vec4(this.x-vec4.x, this.y-vec4.y, this.z-vec4.z, this.w);
    }
    SubR(vec4 : Vec4) : void {
        this.x -= vec4.x;
        this.y -= vec4.y;
        this.z -= vec4.z;
    }
    @operator('+')
    Plus(vec4: Vec4) : Vec4 {
        return new Vec4(this.x + vec4.x, this.y + vec4.y, this.z + vec4.z, this.w);
    }
    @operator('-')
    static __sub(a: Vec4, b:Vec4) : Vec4 {
        return new Vec4(a.x - b.x, a.y - b.y, a.z - b.z, a.w);
    }
    @operator('*')
    Dot(vec4 : Vec4) :f32 {
        return this.x * vec4.x + this.y * vec4.y + this.z * vec4.z;
    }
    @operator('^')
    Cross(vec4 : Vec4) : Vec4 {
        return new Vec4(
            this.y*vec4.z-this.z*vec4.y,
            this.z*vec4.x-this.x*vec4.z,
            this.x*vec4.y-this.y*vec4.x,
            this.z
        );
    }
    Crz(vec4: Vec4) : f32 { //acts if the vector is 2d (x,y) returns z value
        return this.x*vec4.y-this.y*vec4.x
    }
    Unit() : Vec4 {
        let len : f32 = Mathf.sqrt(this.x*this.x + this.y*this.y + this.z*this.z); 
        return new Vec4(this.x/len,this.y/len,this.z/len,this.z);
    }
    UnitR() : void { //saves memory (fucks with immutability)
        let len : f32 = Mathf.sqrt(this.x*this.x + this.y*this.y + this.z*this.z); 
        this.x/=len;
        this.y/=len;
        this.z/=len;
    }
    Product(mat : Matrix) : Vec4 {
        return mat.VProduct(this);
    }
    ProductR(mat : Matrix) : void {
        this.x = mat.content[0]*this.x + mat.content[1]*this.y + mat.content[2]*this.z + mat.content[3]*this.w;
        this.y = mat.content[4]*this.x + mat.content[5]*this.y + mat.content[6]*this.z + mat.content[7]*this.w;
        this.z = mat.content[8]*this.x + mat.content[9]*this.y + mat.content[10]*this.z + mat.content[11]*this.w;
        this.w = mat.content[12]*this.x + mat.content[13]*this.y + mat.content[14]*this.z + mat.content[15]*this.w;
    }
    Inverse() : Vec4 {
        return new Vec4(-this.x, - this.y, -this.z, this.w);
    }
    InverseR() : void { //saves memory (fucks with immutability)
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
    }
}