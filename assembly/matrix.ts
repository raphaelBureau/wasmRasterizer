import Vec4 from "./vec4";

export default class Matrix { //only for a 4d matrix
    content : Float32Array;
    constructor(v00:f32=1,v01:f32=0,v02:f32=0,v03:f32=0,
                v10:f32=0,v11:f32=1,v12:f32=0,v13:f32=0,
                v20:f32=0,v21:f32=0,v22:f32=1,v23:f32=0,
                v30:f32=0,v31:f32=0,v32:f32=0,v33:f32=1,
    ) { //creates identity
        this.content = new Float32Array(16);
        this.content[0] = v00;
        this.content[1] = v01;
        this.content[2] = v02;
        this.content[3] = v03;
        this.content[4] = v10;
        this.content[5] = v11;
        this.content[6] = v12;
        this.content[7] = v13;
        this.content[8] = v20;
        this.content[9] = v21;
        this.content[10] = v22;
        this.content[11] = v23;
        this.content[12] = v30;
        this.content[13] = v31;
        this.content[14] = v32;
        this.content[15] = v33;
    }
    @operator('*')
    Product(mat2 : Matrix) : Matrix{
        return new Matrix(//i dont trust the compiler so i unwrapped everyting
            this.content[0] * mat2.content[0] + this.content[1] * mat2.content[4] + this.content[2] * mat2.content[8] + this.content[3] * mat2.content[12],
            this.content[0] * mat2.content[1] + this.content[1] * mat2.content[5] + this.content[2] * mat2.content[9] + this.content[3] * mat2.content[13],
            this.content[0] * mat2.content[2] + this.content[1] * mat2.content[6] + this.content[2] * mat2.content[10] + this.content[3] * mat2.content[14],
            this.content[0] * mat2.content[3] + this.content[1] * mat2.content[7] + this.content[2] * mat2.content[11] + this.content[3] * mat2.content[15],

            this.content[4] * mat2.content[0] + this.content[5] * mat2.content[4] + this.content[6] * mat2.content[8] + this.content[7] * mat2.content[12],
            this.content[4] * mat2.content[1] + this.content[5] * mat2.content[5] + this.content[6] * mat2.content[9] + this.content[7] * mat2.content[13],
            this.content[4] * mat2.content[2] + this.content[5] * mat2.content[6] + this.content[6] * mat2.content[10] + this.content[7] * mat2.content[14],
            this.content[4] * mat2.content[3] + this.content[5] * mat2.content[7] + this.content[6] * mat2.content[11] + this.content[7] * mat2.content[15],

            this.content[8] * mat2.content[0] + this.content[9] * mat2.content[4] + this.content[10] * mat2.content[8] + this.content[11] * mat2.content[12],
            this.content[8] * mat2.content[1] + this.content[9] * mat2.content[5] + this.content[10] * mat2.content[9] + this.content[11] * mat2.content[13],
            this.content[8] * mat2.content[2] + this.content[9] * mat2.content[6] + this.content[10] * mat2.content[10] + this.content[11] * mat2.content[14],
            this.content[8] * mat2.content[3] + this.content[9] * mat2.content[7] + this.content[10] * mat2.content[11] + this.content[11] * mat2.content[15],

            this.content[12] * mat2.content[0] + this.content[13] * mat2.content[4] + this.content[14] * mat2.content[8] + this.content[15] * mat2.content[12],
            this.content[12] * mat2.content[1] + this.content[13] * mat2.content[5] + this.content[14] * mat2.content[9] + this.content[15] * mat2.content[13],
            this.content[12] * mat2.content[2] + this.content[13] * mat2.content[6] + this.content[14] * mat2.content[10] + this.content[15] * mat2.content[14],
            this.content[12] * mat2.content[3] + this.content[13] * mat2.content[7] + this.content[14] * mat2.content[11] + this.content[15] * mat2.content[15],
        )
    }
    VProduct(vec4: Vec4) : Vec4 {
        return new Vec4(//treat vector as vertical matrix
            this.content[0]*vec4.x + this.content[1]*vec4.y + this.content[2]*vec4.z + this.content[3]*vec4.w,
            this.content[4]*vec4.x + this.content[5]*vec4.y + this.content[6]*vec4.z + this.content[7]*vec4.w,
            this.content[8]*vec4.x + this.content[9]*vec4.y + this.content[10]*vec4.z + this.content[11]*vec4.w,
            this.content[12]*vec4.x + this.content[13]*vec4.y + this.content[14]*vec4.z + this.content[15]*vec4.w,
        );
    }
    Det() : f32{ //sarrus closed form det
        return this.content[0] * this.content[5] * this.content[10] +
               this.content[1] * this.content[6] * this.content[8] + 
               this.content[2] * this.content[4] * this.content[9] -
               this.content[2] * this.content[5] * this.content[8] -
               this.content[1] * this.content[4] * this.content[10] -
               this.content[0] * this.content[6] * this.content[9]
    }
    GetTranslation(vec4: Vec4) : Matrix {
        return new Matrix(
            1,0,0,vec4.x,
            0,1,0,vec4.y,
            0,0,1,vec4.z,
            0,0,0,vec4.w
        );
    }
    GetScale(factor: f32) : Matrix {
        return new Matrix(
            factor,0,0,0,
            0,factor,0,0,
            0,0,factor,0,
            0,0,0,1
        );
    }
    GetVScale(vec4: Vec4) : Matrix {
        return new Matrix(
            vec4.x,0,0,0,
            0,vec4.y,0,0,
            0,0,vec4.z,0,
            0,0,0,vec4.w
        );
    }
}