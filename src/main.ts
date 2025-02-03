import { Application, Assets } from 'pixi.js';
import { addBackground } from './addBackground';
import { addFishes, animateFishes } from './addFishes';
import { addWaterOverlay, animateWaterOverlay } from './addWaterOverlay';
import { addDisplacementEffect } from './addDisplacementEffect';

//create a PixiJS app
const app = new Application();

//store an array of fish sprites for anim
const fishes:string[] = [];

// Asynchronous IIFE
(async () =>
{
    await setup();
    await preload();

    addBackground(app);
    addFishes(app, fishes);
    addWaterOverlay(app);
    addDisplacementEffect(app);

    //add the fish animation callback to the app's ticker
    app.ticker.add((time) => {
        animateFishes(app, fishes, time);
        animateWaterOverlay(app, time);
    });
})();

async function setup()
{
    //init the app
    await app.init({ background: '#1099bb', resizeTo: window });

    //adding the app to the body
    document.body.appendChild(app.canvas);

}

async function preload()
{
    //create an array of data asset to load
    const assets = [
        { alias: 'background', src: 'https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg' },
        { alias: 'fish1', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish1.png' },
        { alias: 'fish2', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish2.png' },
        { alias: 'fish3', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish3.png' },
        { alias: 'fish4', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish4.png' },
        { alias: 'fish5', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish5.png' },
        { alias: 'overlay', src: 'https://pixijs.com/assets/tutorials/fish-pond/wave_overlay.png' },
        { alias: 'displacement', src: 'https://pixijs.com/assets/tutorials/fish-pond/displacement_map.png' },
    ];

    //load the assets
    await Assets.load(assets);
}
