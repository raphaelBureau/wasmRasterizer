import Color from "./color";
import Texture from "./texture";

export default class TextureSampler {
    //defaut texture sampler
    //simple average
    texture? : Texture;
    Init(texture : Texture) : void {
        this.texture = texture;
    }
    Sample(x : f32, y : f32) : Color {
        return this.texture!.data[Mathf.floor(y*this.texture!.height+0.5)*this.texture!.width+Mathf.floor(x*this.texture!.width+0.5)];
    }
}