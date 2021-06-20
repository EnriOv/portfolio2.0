import { useEffect, useRef } from "react";

import anime from 'animejs/lib/anime.es.js';

const WelcomeCompLogic = () => {
    const animationRef = useRef(null);
    
    useEffect(() => {
        animationRef.current = anime({
            targets: ".rotate-pie",
            rotate: {
                value: -90,
                delay: function(el, i) {
                    return i * 800;
                },
                easing: "easeInOutSine"
            },
            direction: "alternate",
            loop: true
        });
        animationRef.current = anime({
            targets: ".rotate-pie",
            keyframes: [
                {rotate: -90},
                {rotate: 90}
            ],
            duration: 2000,
            easing: "easeInOutSine",
            direction: "alternate",
            loop: true
        });
    }, []);

    return {}
}

export default WelcomeCompLogic;
