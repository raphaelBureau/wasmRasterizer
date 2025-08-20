import Color from "./color";
import Face from "./face";
import Matrix from "./matrix";
import Vec4 from "./vec4";

export default class Geo {
    pos : Vec4;
    vertices : StaticArray<Vec4>;
    indices: Uint16Array;
    constructor(pos: Vec4, vertices: StaticArray<Vec4>, meshIndices: Uint16Array) {
        this.pos = pos;
        this.vertices = vertices;
        this.indices = meshIndices;
    }
    Transform(mat: Matrix) : void {
        this.pos = mat.VProduct(this.pos);
        for(let i = 0; i<this.vertices.length;i++) {
            this.vertices[i] = mat.VProduct(this.vertices[i]);
        }
    }
    Translate(vec4 : Vec4) : void {
        this.pos.AddR(vec4);
        for(let i = 0; i<this.vertices.length;i++) {
            this.vertices[i].AddR(vec4);
        }
    }
    GetFaces() : StaticArray<Face> {//default method for triangle mesh. must be overriden if shape is not made of triangles
        let faces : StaticArray<Face> = new StaticArray<Face>(this.indices.length/3);
        for(let i=0; i<faces.length;i++) {
            //since our faces are disposed every frame we dont need to do a deep vector copy
            let vertices : StaticArray<Vec4> = new StaticArray<Vec4>(3);
            let uv : Float32Array = new Float32Array(6);
            let color: Uint8Array = new Uint8Array(4);
            for(let j=0; j<3; j++) {
                vertices[j] = this.vertices[this.indices[3*i+j]];
            }
            uv[0] = 0;
            uv[1] = 0;
            uv[2] = 0;
            uv[3] = 1;
            uv[4] = 1;
            uv[5] = 1;
            faces[i] = new Face(vertices,uv,new Color(255),0);
        }
        return faces;
    }
}