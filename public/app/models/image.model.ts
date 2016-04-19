/**
 * Created by benbraide on 4/19/2016.
 */

export interface Image{
    left: string,
    right: string,
    ext: string,
    meta: string,
    width: number,
    height: number,
    x: number,
    y: number
}

export class ImageClass implements Image{
    left: string;
    right: string;
    ext: string;
    meta: string;
    width: number;
    height: number;
    x: number;
    y: number;

    constructor(image: Image){
        this.left = image.left;
        this.left = image.right;

        this.ext = image.ext;
        this.meta = image.meta;

        this.width = image.width;
        this.height = image.height;

        this.x = image.x;
        this.y = image.y;
    }
}

export let mockImage = {
    left: "left",
    right: "right",
    ext: "ext",
    meta: "meta",
    width: 0,
    height: 0,
    x: 0,
    y: 0
}