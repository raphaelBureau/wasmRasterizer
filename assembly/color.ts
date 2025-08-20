export default class Color {
    red : u8;
    green : u8;
    blue : u8;
    alpha : u8;
    constructor(red: u8 = 0, green: u8 = 0, blue : u8 = 0, alpha : u8 = 255) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
}