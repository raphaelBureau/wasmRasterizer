import { Engine } from "./engine";
//this class serves as the intermediary between wasm and js

let engine : Engine = new Engine();

export function Tick(delta : f32): void {
    engine.Tick(delta);
}

export function Init(): void {
}

export function SetResolution(width : u32, height : u32) : void {
    
}