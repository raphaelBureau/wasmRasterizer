import Geo from "./geo";
import Vec4 from "./vec4";
import Face from "./face";
import Color from "./color";

export default class Cube extends Geo {
    faces : StaticArray<Face>;
    constructor(pos: Vec4, size: f32, textureId: u8, color: Color) {
        let indices : Uint16Array = new Uint16Array(16);
        let vertices : StaticArray<Vec4> = new StaticArray<Vec4>(8);
        let faces : StaticArray<Face> = new StaticArray<Face>(12);
        vertices[0] = new Vec4(0,0,0,1);
        vertices[1] = new Vec4(1,0,0,1);
        vertices[2] = new Vec4(1,0,1,1);
        vertices[3] = new Vec4(0,0,1,1);

        vertices[4] = new Vec4(0,1,0,1);
        vertices[5] = new Vec4(1,1,0,1);
        vertices[6] = new Vec4(1,1,1,1);
        vertices[7] = new Vec4(0,1,1,1);

        //every face shares the same uv coordinates (image is copied onto each face)
        let faceUV1 : Float32Array = new Float32Array(6);
        faceUV1[0] = 0;
        faceUV1[1] = 0;
        faceUV1[2] = 0;
        faceUV1[3] = 1;
        faceUV1[4] = 1;
        faceUV1[5] = 0;
        let faceUV2 : Float32Array = new Float32Array(6);
        faceUV2[0] = 0;
        faceUV2[1] = 1;
        faceUV2[2] = 1;
        faceUV2[3] = 1;
        faceUV2[4] = 1;
        faceUV2[5] = 0;
        
        //each face has a reference to a set of verticies
        //if the verticies are transformed they will transform the face
        //face 1
        let faceVerts : StaticArray<Vec4> = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[0];
        faceVerts[1] = vertices[4];
        faceVerts[2] = vertices[1];
        faces[0] = new Face(faceVerts,faceUV1,color,textureId);

        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[4];
        faceVerts[1] = vertices[5];
        faceVerts[2] = vertices[1];
        faces[0] = new Face(faceVerts,faceUV2,color,textureId);

        //face 2
        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[1];
        faceVerts[1] = vertices[5];
        faceVerts[2] = vertices[2];
        faces[0] = new Face(faceVerts,faceUV1,color,textureId);

        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[5];
        faceVerts[1] = vertices[6];
        faceVerts[2] = vertices[2];
        faces[0] = new Face(faceVerts,faceUV2,color,textureId);

        //face 3
        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[2];
        faceVerts[1] = vertices[6];
        faceVerts[2] = vertices[3];
        faces[0] = new Face(faceVerts,faceUV1,color,textureId);

        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[6];
        faceVerts[1] = vertices[7];
        faceVerts[2] = vertices[3];
        faces[0] = new Face(faceVerts,faceUV2,color,textureId);

        //face 4
        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[3];
        faceVerts[1] = vertices[7];
        faceVerts[2] = vertices[0];
        faces[0] = new Face(faceVerts,faceUV1,color,textureId);

        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[7];
        faceVerts[1] = vertices[4];
        faceVerts[2] = vertices[0];
        faces[0] = new Face(faceVerts,faceUV2,color,textureId);

        //face 5
        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[4];
        faceVerts[1] = vertices[7];
        faceVerts[2] = vertices[5];
        faces[0] = new Face(faceVerts,faceUV1,color,textureId);

        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[7];
        faceVerts[1] = vertices[6];
        faceVerts[2] = vertices[5];
        faces[0] = new Face(faceVerts,faceUV2,color,textureId);

        //face 6
        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[3];
        faceVerts[1] = vertices[0];
        faceVerts[2] = vertices[2];
        faces[0] = new Face(faceVerts,faceUV1,color,textureId);

        faceVerts = new StaticArray<Vec4>(3);
        faceVerts[0] = vertices[0];
        faceVerts[1] = vertices[1];
        faceVerts[2] = vertices[2];
        faces[0] = new Face(faceVerts,faceUV2,color,textureId);

        super(pos,vertices,indices);
        this.faces = faces;
    }
    GetFaces(): StaticArray<Face> {
        return this.faces;
    }
}