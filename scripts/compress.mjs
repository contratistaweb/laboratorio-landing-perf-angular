import imagemin from "imagemin";
import pngquant from "imagemin-pngquant";
import webp from "imagemin-webp";

const directory = "./src/assets/images/*.{web,png}";

(async () => {
  const files = await imagemin([directory], {
    destination: "./src/assets/images/",
    plugins: [pngquant({quality: [0.8,0.08]}), webp({quality: 80})],
  });
  console.log(files);
})();
