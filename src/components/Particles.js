import React from 'react'
import { useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import useWindowSize from './useWindowSize'
import checkDevice from './checkDevice' 

function ParticlesComponent() {
    const size  =useWindowSize();
    const isMobile = checkDevice(size)

    const particlesInit = useCallback(async engine => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        ///await console.log(container);
    }, []);

    if (isMobile) {
        return (
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "black",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    fullScreen: {
                        zIndex: -1,
                    },
                    particles: {
                        color: {
                            value: "rgba(30, 143, 255, 0.478)",
                        },
                        links: {
                            color: "rgba(30, 143, 255, 0.478)",
                            distance: 50,
                            enable: true,
                            opacity: 0.8,
                            width: 2,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: false,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "none",
                        },
                        size: {
                            value: { min: 2, max: 6 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        );
    } else {
        return (
            < Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "black",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    fullScreen: {
                        zIndex: -1,
                    },
                    particles: {
                        color: {
                            value: "rgba(30, 143, 255, 0.478)",
                        },
                        links: {
                            color: "rgba(30, 143, 255, 0.478)",
                            distance: 150,
                            enable: true,
                            opacity: 0.8,
                            width: 2,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: false,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "none",
                        },
                        size: {
                            value: { min: 2, max: 6 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        )
    }

}

export default ParticlesComponent;