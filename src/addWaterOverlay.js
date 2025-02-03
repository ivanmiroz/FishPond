import { Texture, TilingSprite } from 'pixi.js';

//reference to the water overlay
let overlay;

export function addWaterOverlay(app)
{
    //create a water texture object
    const texture = Texture.from('overlay');

    //create a tiling sprite with the water texture and specify the direction
    overlay = new TilingSprite({
        texture,
        width: app.screen.width,
        height: app.screen.height
    });

    //add the overlay to the stage
    app.stage.addChild(overlay);
}

export function animateWaterOverlay(app, time)
{
    //extract the delta time from the ticker object
    const delta = time.deltaTime;

    //animate the overlay
    overlay.tilePosition.x -= delta;
    overlay.tilePosition.y -= delta;
}
