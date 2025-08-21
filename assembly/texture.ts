import Color from "./color";
import TextureSampler from "./textureSampler";

export default class Texture {
    data : StaticArray<Color>;
    width: u32;
    height: u32;
    sampler : TextureSampler
    constructor(imageData : Uint8Array, width : u32, height : u32, sampler : TextureSampler) { 
        //js will send the image as bytes. for simplicity i will convert them to the Color class
        //then the rasterizer will convert it back to bytes in order to send it to js
        this.width = width;
        this.height = height;
        this.sampler = sampler;
        sampler.Init(this);
        let data : StaticArray<Color> = new StaticArray<Color>(imageData.length/4);
        for(let i : u64=0; i<imageData.length/4;i++) {
            let i4 : u64 = i*4; //maximum image size could be 32u x 32u
            data[i] = new Color(imageData[i4],imageData[i4+1],imageData[i4+2],imageData[i4+3]);
        }
        this.data = data;
    }
    Sample(x : f32, y : f32) {
        this.sampler.Sample(x,y);
    }
}