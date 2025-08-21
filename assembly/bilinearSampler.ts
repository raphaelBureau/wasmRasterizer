import Color from "./color";
import TextureSampler from "./textureSampler";

export default class BilinearSampler extends TextureSampler {
    Sample(x: f32, y: f32): Color {
        let texX : f32 = x * this.texture!.width;
        let texY : f32 = y * this.texture!.height;
        let fracX : f32 = texX - Mathf.floor(texX);
        let fracY : f32 = texY - Mathf.floor(texY);
        let centerX : u32 = Math.floor(texX);
        let centerY : u32 = Math.floor(texY);
        let colorPicked : Color = this.texture!.data[centerY*this.texture!.width+centerX];
        let factor : f32 = 0;
        let red : f32 =0;
        let green : f32 =0;
        let blue : f32 =0;
        let alpha : f32 =0;
        if(fracX > 0.5) {
            if(fracY > 0.5) {
                
            }
            else{

            }
        }
        else{
            if(fracY > 0.5) {

            }else{

            }
        }
        return new Color(red,green,blue,alpha);
    }
}