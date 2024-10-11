import React from "react";

const Particle = ({ type, src, size, sizew, position }) => {
  const styles = {
    position: "absolute",
    ...position, // Apply the provided position styles
    animation: "bounce 3s infinite",
  };

  return (
    <div style={styles}>
      {type === 'dot' ? (
        // Dotted particle created with CSS
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%", // Make it round
            backgroundColor: "orange", // Dotted particle color
            opacity: 0.8, // Optional: adjust opacity
          }}
        />
      ) : (
        // S-shaped particle image
        <img
          src={src} // Use the image source for the S shape
          alt="S Particle"
          style={{
            width: sizew, // Size of the S-shaped particle
            height: size,
          }}
        />
      )}
    </div>
  );
};

export default Particle;
