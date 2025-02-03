import { DisplacementFilter, Sprite } from 'pixi.js';

export function addDisplacementEffect(app)
{
    //create a sprite from the preloaded displacement asset
    const sprite = Sprite.from('displacement');

    //set the base texture wrap to repeat to allow the texture UVs to be tiled and repeated
    sprite.texture.baseTexture.wrapMode = 'repeat';

    //create a displacement filter using the sprite texture
    const filter = new DisplacementFilter({
        sprite,
        scale: 50
    });

    //add the filter to the stage
    app.stage.filters = [filter];
}
