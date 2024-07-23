import { env, pipeline } from './transformers.js';

env.localModelPath = '/Users/frozen/popmed/tf/models';
env.allowRemoteModels = false;

async function init() {

    console.log(env.localModelPath)

    const classifier = await pipeline('zero-shot-image-classification', 'Xenova/clip-vit-base-patch16', { cache_dir: '/Users/frozen/popmed/tf/models' });
    const url = 'https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/football-match.jpg';
    const output = await classifier(url, ['a photo of a car', 'a photo of a football match']);
    console.log(output)
}

init();