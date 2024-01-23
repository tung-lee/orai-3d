import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download, mint, commits } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";
import { Chatbot } from "../components/Prompt";
import { commit } from "../api/NFT";
import { useParams } from "react-router-dom";
import { CommitList } from "../components/Commit/CommitList";
import { toast } from "react-toastify";

const Customizer = ({ decalImageURL ,setDecalImageURL }) => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");

  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [generatingImg, setGeneratingImg] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false); // Prompt sidebar
  const [isShowCommits, setIsShowCommits] = useState(false); // CommitList
  const [isLoading, setIsLoading] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const {id} = useParams();

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <Chatbot
            prompt={prompt}
            setPrompt={setPrompt}
            messages={messages}
            setMessages={setMessages}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            genImgAndUploadToEueno={genImgAndUploadToEueno}
            isLoading={isLoading}
          />
        );
      case "mint":
        return (
          <div className="absolute" style={{ bottom: "90px", right: "-120px" }}>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              onClick={handleCommit}
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">Commit</span>
            </a>
          </div>
        );
        case "commits":
          return <CommitList setDecalImageURL={setDecalImageURL} isShowCommits={isShowCommits} setIsShowCommits={setIsShowCommits}/>
      default:
        return null;
    }
  };

  function handleCommit() {
    const tx = commit({
      token_id: id,
      prompt,
      eueno_url: decalImageURL
    });
    console.log(tx);
  }

  async function genImgAndUploadToEueno(prompt) {
    console.log(prompt);
    try {
      setIsLoading(true);
      const respBot = await fetch(
        `${import.meta.env.VITE_BACKEND_BOT_ENDPOINT}/chatimage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
          }),
        }
      );
      setIsLoading(false);
      const data = await respBot.json();
      const {answer, image_url} = data;
      console.log(data);

      setMessages((prev) => [
        ...prev,
        {
          type: "text",
          isUser: false,
          message: answer,
        },
        {
          type: "image",
          isUser: false,
          message: image_url,
        },
      ]);

      const respEueno = await fetch(
        `${import.meta.env.VITE_BACKEND_EUENO_ENDPOINT}/eueno/upload-image`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataEueno = await respEueno.json();
      console.log(dataEueno);
      const { file } = dataEueno.data;

      setDecalImageURL(file);
    } catch (err) {
      console.log(err);
      toast.error("Eueno error");
    }
  }

  const handleSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const response = await fetch("http://localhost:8080/api/v1/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {
                      if (tab.name === "aipicker") {
                        setIsExpanded(true);
                      }
                      setActiveEditorTab(tab.name);
                    }}
                  />
                ))}
                <Tab
                  key={"mint"}
                  tab={{ name: "mint", icon: mint }}
                  handleClick={() => {
                    setActiveEditorTab("mint");
                  }}
                />
                <Tab
                  key={"commits"}
                  tab={{ name: "commits", icon: commits }}
                  handleClick={() => {
                    setIsShowCommits(true);
                    setActiveEditorTab("commits");
                  }}
                />
                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
