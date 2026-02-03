import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProposalScreen = ({ onYesClick }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [holdProgress, setHoldProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const noButtonRef = useRef(null);
  const holdTimerRef = useRef(null);
  const holdStartRef = useRef(null);

  // Romantic messages that cycle through
  const romanticMessages = [
    "You are the love of my life 💕",
    "Every moment with you is magical ✨",
    "You make my heart skip a beat 💓",
    "I want to spend forever with you 🌟",
    "You are my everything, my always 💖",
    "My love for you grows stronger every day 🌹",
    "You complete me in every way 💑",
    "Together, we can conquer the world 🌍"
  ];

  // Cycle through romantic messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % romanticMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-move button on mobile every 0.8 seconds
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    const autoMoveInterval = setInterval(() => {
      const newPosition = getRandomPosition();
      setNoButtonPosition(newPosition);
      setDodgeCount(prev => prev + 1);
      // Reset hold progress when button moves
      setHoldProgress(0);
      setIsHolding(false);
      if (holdTimerRef.current) {
        clearInterval(holdTimerRef.current);
      }
    }, 800); // Move every 0.8 seconds

    return () => clearInterval(autoMoveInterval);
  }, []);

  // Calculate random position within viewport bounds
  const getRandomPosition = () => {
    const button = noButtonRef.current;
    if (!button) return { x: 0, y: 0 };

    const buttonRect = button.getBoundingClientRect();
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;

    // Get viewport dimensions
    const maxX = window.innerWidth - buttonWidth - 40; // 40px padding
    const maxY = window.innerHeight - buttonHeight - 40;

    // Generate random position
    const randomX = Math.random() * maxX - (window.innerWidth / 2 - buttonWidth / 2);
    const randomY = Math.random() * maxY - (window.innerHeight / 2 - buttonHeight / 2);

    return { x: randomX, y: randomY };
  };

  // Handle hover over "No" button (desktop only)
  const handleNoHover = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return; // Don't trigger on mobile, auto-move handles it

    const newPosition = getRandomPosition();
    setNoButtonPosition(newPosition);
    setDodgeCount(prev => prev + 1);
  };

  // Handle press start (3-second hold requirement)
  const handlePressStart = () => {
    setIsHolding(true);
    holdStartRef.current = Date.now();

    // Update progress every 50ms
    holdTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - holdStartRef.current;
      const progress = Math.min((elapsed / 3000) * 100, 100);
      setHoldProgress(progress);

      if (progress >= 100) {
        // They held for 3 seconds, but button will move before they can complete it
        clearInterval(holdTimerRef.current);
      }
    }, 50);
  };

  // Handle press end
  const handlePressEnd = () => {
    setIsHolding(false);
    setHoldProgress(0);
    if (holdTimerRef.current) {
      clearInterval(holdTimerRef.current);
    }
  };

  // Handle click on "No" button (only works if held for 3 seconds, which is nearly impossible)
  const handleNoClick = () => {
    if (holdProgress < 100) {
      // Not held long enough, move the button
      const newPosition = getRandomPosition();
      setNoButtonPosition(newPosition);
      setDodgeCount(prev => prev + 1);
    }
  };

  // Get playful message based on dodge count
  const getPlayfulMessage = () => {
    if (dodgeCount > 15) return "Please? I promise to love you forever! 🥺💕";
    if (dodgeCount > 10) return "My heart breaks a little each time... 💔";
    if (dodgeCount > 8) return "You know you want to say yes! 😊";
    if (dodgeCount > 5) return "Come on, you can't catch me! 😜";
    if (dodgeCount > 3) return "I'll keep dodging until you say yes! 😄";
    return "";
  };

  return (
    <motion.div
      className="proposal-screen"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating hearts background */}
      <div className="hearts-background">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`heart heart-${i + 1}`}>💕</div>
        ))}
      </div>

      {/* Love letter style container */}
      <motion.div
        className="love-letter"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {/* Romantic header */}
        <motion.div
          className="romantic-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="heart-divider">💕 ✨ 💕</div>
        </motion.div>

        {/* Main question */}
        <motion.h1
          className="proposal-question"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Will you marry me? 💍
        </motion.h1>

        {/* Heartfelt message */}
        <motion.p
          className="heartfelt-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          From the moment I met you, I knew you were the one. You bring joy to my days,
          warmth to my heart, and meaning to my life. I can't imagine a future without you by my side.
        </motion.p>

        {/* Cycling romantic messages */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessageIndex}
            className="cycling-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {romanticMessages[currentMessageIndex]}
          </motion.p>
        </AnimatePresence>

        {/* Love reasons */}
        <motion.div
          className="love-reasons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="reason-item">
            <span className="reason-icon">🌹</span>
            <span className="reason-text">You make me a better person</span>
          </div>
          <div className="reason-item">
            <span className="reason-icon">⭐</span>
            <span className="reason-text">Your smile lights up my world</span>
          </div>
          <div className="reason-item">
            <span className="reason-icon">💝</span>
            <span className="reason-text">I cherish every moment with you</span>
          </div>
        </motion.div>

        {/* Romantic quote */}
        <motion.p
          className="romantic-quote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          "In all the world, there is no heart for me like yours.
          In all the world, there is no love for you like mine."
        </motion.p>

        {/* Buttons container */}
        <div className="buttons-container">
          {/* Yes Button - stable and easy to click */}
          <motion.button
            className="yes-button"
            onClick={onYesClick}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            Yes! Forever & Always 💖
          </motion.button>

          {/* No Button - dodges on hover/click, requires 3-second hold */}
          <motion.button
            ref={noButtonRef}
            className="no-button"
            onMouseEnter={handleNoHover}
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onMouseLeave={handlePressEnd}
            onTouchStart={(e) => {
              e.preventDefault();
              handlePressStart();
            }}
            onTouchEnd={handlePressEnd}
            onTouchCancel={handlePressEnd}
            onClick={handleNoClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              opacity: { delay: 1.4, duration: 0.5 }
            }}
            style={{ position: 'relative' }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>No 😢</span>
            {/* Hold progress indicator */}
            {isHolding && (
              <motion.div
                className="hold-progress"
                initial={{ width: 0 }}
                animate={{ width: `${holdProgress}%` }}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  background: 'rgba(255, 107, 157, 0.3)',
                  borderRadius: '50px',
                  zIndex: 1,
                }}
              />
            )}
          </motion.button>
        </div>

        {/* Playful message after multiple dodges */}
        {dodgeCount > 3 && (
          <motion.p
            className="dodge-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {getPlayfulMessage()}
          </motion.p>
        )}

        {/* Bottom heart divider */}
        <motion.div
          className="heart-divider bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          💕 ✨ 💕
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProposalScreen;
