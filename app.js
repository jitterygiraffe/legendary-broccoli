//inserting logo animation 
import { DotLottie } from '@lottiefiles/dotlottie-web';

const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: "https://lottie.host/embed/8d787c88-dea9-435f-b897-03e3b0d13024/HujG4dG3QL.lottie", // replace with your .lottie or .json file URL
});
