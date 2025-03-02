const stars = {
    background: {
      color: {
        value: "#000000", // Black background
      },
    },
    particles: {
      number: {
        value: 50, // Number of stars
      },
      color: {
        value: "#ffffff", 
      },
      shape: {
        type: "circle", 
      },
      opacity: {
        value: 1,
        random: false,
      },
      size: {
        value: 4,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      modes: {
        repulse: {
          distance: 100,
        },
        push: {
          quantity: 4,
        },
      },
    },
  };
  
  export default stars;