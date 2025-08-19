import Geo from "./geo";

export default class Rasterizer {
    frameBuffer : Uint8Array;
    depthBuffer: Float32Array;
    width: u32;
    height: u32;
    constructor(width : u32, height: u32) {
        this.frameBuffer = new Uint8Array(width*height*4);
        this.depthBuffer = new Float32Array(width*height);
        this.width = width;
        this.height = height;
    }
    RasterizeGeo(geo: Geo) {
        
    }
}