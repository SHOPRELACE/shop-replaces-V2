particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00f7ff"
        },
        shape: {
            type: "polygon",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 6
            }
        },
        opacity: {
            value: 0.3,
            random: true,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00f7ff",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});