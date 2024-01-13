import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="/logo.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="text-7xl">AI NFT Generator</h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContainerAnimation}
            >
              <p className="max-w-md font-nromal text-white-600 text-base">
                Create your unique and exclusive NFT with new 3D tool.{" "}
                <strong>
                  Within 30-60 seconds, anyone can deploy their NFTs on the
                  Blockchain.
                </strong>
              </p>

              <CustomButton
                type="filled"
                title="Design It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
