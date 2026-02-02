import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CelebrationScreen = () => {
  const [confetti, setConfetti] = useState([]);

  // Generate confetti particles
  useEffect(() => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      rotation: Math.random() * 360,
    }));
    setConfetti(particles);
  }, []);

  return (
    <motion.div
      className="celebration-screen"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      {/* Confetti particles */}
      <div className="confetti-container">
        {confetti.map((particle) => (
          <motion.div
            key={particle.id}
            className="confetti"
            style={{
              left: `${particle.x}%`,
            }}
            initial={{
              y: -100,
              opacity: 1,
              rotate: 0,
            }}
            animate={{
              y: window.innerHeight + 100,
              opacity: 0,
              rotate: particle.rotation,
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating hearts */}
      <div className="celebration-hearts">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="celebration-heart"
            style={{
              left: `${(i * 8) % 100}%`,
            }}
            initial={{ y: window.innerHeight, opacity: 0, scale: 0 }}
            animate={{
              y: -100,
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Main celebration message */}
      <motion.div
        className="celebration-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.h1
          className="celebration-title"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Yay! I knew it ❤️
        </motion.h1>

        <motion.p
          className="celebration-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          You've made me the happiest person alive! 💕
        </motion.p>

        <motion.div
          className="celebration-emoji"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.3, duration: 0.8, type: "spring", bounce: 0.6 }}
        >
          💍✨🎉
        </motion.div>

        {/* Additional romantic messages */}
        <motion.p
          className="celebration-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          I promise to love you, cherish you, and stand by your side through every adventure life brings us. 🌟
        </motion.p>

        <motion.p
          className="celebration-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
        >
          You are my today and all of my tomorrows. Forever starts now! 💑
        </motion.p>

        {/* Romantic quote */}
        <motion.p
          className="celebration-quote"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          "Together is a wonderful place to be" 💑
        </motion.p>

        {/* Love declaration */}
        <motion.div
          className="love-declaration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <p className="declaration-text">
            I love you more than words can express 💖
          </p>
          <p className="declaration-text">
            You are my forever and always 🌹
          </p>
          <p className="declaration-text">
            Here's to our beautiful journey together! 🥂
          </p>
        </motion.div>
      </motion.div>

      {/* Sparkle effects */}
      <div className="sparkles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CelebrationScreen;
