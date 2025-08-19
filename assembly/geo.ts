import Matrix from "./matrix";
import Vec4 from "./vec4";

export default class Geo {
    pos : Vec4;
    vertices : Vec4[];
    indices: u16[];
    constructor(pos: Vec4, vertices: Vec4[], meshIndices: u16[]) {
        this.pos = pos;
        this.vertices = vertices;
        this.indices = meshIndices;
    }
    Transform(mat: Matrix) {
        this.pos = mat.VProduct(this.pos);
        for(let i = 0; i<this.vertices.length;i++) {
            this.vertices[i] = mat.VProduct(this.vertices[i]);
        }
    }
    Translate(vec4 : Vec4) {
        this.pos.Add(vec4);
        for(let i = 0; i<this.vertices.length;i++) {
            this.vertices[i].Add(vec4);
        }
    }
}