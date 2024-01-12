import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NewChallenge from './NewChallenge.jsx';

const Header = () => {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  const handleStartAddNewChallenge = () => {
    setIsCreatingNewChallenge(true);
  };

  const handleDone = () => {
    setIsCreatingNewChallenge(false);
  };

  return (
    <>
      <AnimatePresence>
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>

      <header id="main-header">
        <h1>Your Challenges</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
          onClick={handleStartAddNewChallenge}
          className="button"
        >
          Add Challenge
        </motion.button>
      </header>
    </>
  );
};

export default Header;