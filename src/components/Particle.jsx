import React from "react";

const Particle = ({ type, src, size, sizew, position }) => {
  const styles = {
    position: "absolute",
    ...position, // Apply the provided position styles
  };

  return (
    <div style={styles} className="particle">
      {type === 'dot' ? (
        // Dotted particle created with CSS
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%", // Make it round
            backgroundColor: "orange", // Dotted particle color
            opacity: 0.8, // Optional: adjust opacity
            animation: "bounce 1s infinite" // Apply bounce animation
          }}
        />
      ) : type === 'round' ? (
        // Round particle image
        <img
          src={src} // Use the image source for the round particle
          alt="Round Particle"
          style={{
            width: `${sizew}px`, // Use sizew for width
            height: `${sizew}px`, // Use sizew for height
            borderRadius: "50%", // Make it round
            animation: "bounce 1s infinite", // Apply bounce animation
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
            animation: "bounce 1s infinite" // Apply bounce animation
          }}
        />
      )}

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px); // Adjust height of bounce here
          }
        }
      `}</style>
    </div>
  );
};

export default Particle;
