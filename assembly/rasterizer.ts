import Face from "./face";
import Texture from "./texture";
import Vec4 from "./vec4";

export default class Rasterizer {
    frameBuffer : Uint8Array;
    depthBuffer: Float32Array;
    width: u32;
    height: u32;
    textures: StaticArray<Texture>;
    constructor(width : u32, height: u32) {
        this.frameBuffer = new Uint8Array(width*height*4);
        this.depthBuffer = new Float32Array(width*height);
        this.textures = new StaticArray<Texture>(256);
        this.width = width;
        this.height = height;

        this.ClearDepthBuffer();
        this.ClearFrameBuffer();
    }
    ClearFrameBuffer() : void {
        for(let i=0; i<this.frameBuffer.length; i++) {
            this.frameBuffer[i] = 0;
        }
    }
    ClearDepthBuffer() : void {
        for(let i =0; i<this.depthBuffer.length; i++) {
            this.depthBuffer[i] = _Float.MAX_VALUE;
        }
    }
    RasterizeTriangle(face: Face) : void {//using normalised coordinates ([-1,1])
        //primary culling pass
        if(face.verticies[0].z < 0 || face.verticies[1].z < 0 || face.verticies[2].z < 0) {
            return;
        }
        //back-face culling
        if(face.verticies[0].Sub(face.verticies[1]).Crz(face.verticies[0].Sub(face.verticies[2])) < 0) {
            return;
        }

    }
}