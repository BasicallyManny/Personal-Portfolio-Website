import type { ISourceOptions } from "tsparticles-engine";

const stars: ISourceOptions = {
    background: {
        color: {
            value: "#000000",
        },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1,
    },
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                area: 800,
            },
            limit: 0,
            max: 0,
        },
        color: {
            value: "#ffffff",
            animation: {
                enable: false,
                speed: 1,
                sync: true,
            },
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 1,
            random: false,
            animation: {
                enable: false,
                speed: 1,
                sync: false,
                startValue: "random",
                destroy: "none",
            },
        },
        size: {
            value: { min: 2, max: 4 },
            random: true,
            animation: {
                enable: false,
                speed: 40,
                sync: false,
                startValue: "random",
                destroy: "none",
            },
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "out",
            },
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
            angle: {
                offset: 0,
                value: 90,
            },
            center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
            },
            path: {
                enable: false,
                delay: {
                    value: 0,
                },
            },
            trail: {
                enable: false,
                length: 10,
            },
        },
    },
    detectRetina: true,
};

export default stars;
