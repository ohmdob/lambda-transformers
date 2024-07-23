## This package is modify transformer.js to fit in aws lambda and efs to store model  
https://github.com/xenova/transformers.js/tree/main

aws lambda package size must less than 250mb but transformer.js is 258 mb


### I'm try to purge onnxruntime-web

```javascript
import { env, pipeline } from '@lambda/transformers';

env.localModelPath = '/mnt/efs/yourmodel';
env.allowRemoteModels = false;

async function init() {
    const classifier = await pipeline('zero-shot-image-classification', 'Xenova/clip-vit-base-patch16');
    const url = 'https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/football-match.jpg';
    const output = await classifier(url, ['a photo of a car', 'a photo of a football match']);
    console.log(output)
}

init();
```