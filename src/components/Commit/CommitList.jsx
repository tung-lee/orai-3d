import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTokenInfo } from "../../api/NFT";
import { CommitItem } from "./CommitItem";
import { CloseButton } from "../Prompt/CloseButton";

export const CommitList = ({
  setDecalImageURL,
  isShowCommits,
  setIsShowCommits,
}) => {
  const [commits, setCommits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function loadCommits() {
      try {
        const tokenFound = await getTokenInfo(id);
        const tokenInfo = tokenFound.token_info;
        setCommits(tokenInfo.commits);
        console.log(tokenInfo.commits);
      } catch (err) {
        console.log(err);
      }
    }
    loadCommits();
  }, []);

  function handleShowCommits() {
    setIsShowCommits(!isShowCommits);
  }

  return (
    <>
      {isShowCommits ? (
        <div
          className="absolute"
          style={{ top: "-150px", left: "70px", zIndex: 1 }}
        >
          <div className="bg-[#0d0d0d]">

          
          <CloseButton toggleSidebar={handleShowCommits}/>
          <table className="border border-solid border-[#000000b2]">
            <tr>
              <th
                className="[font-family:'Gabarito-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[normal] whitespace-nowrap uppercase w-[190px] border border-solid border-collection-1-line px-[20px] py-[10px]"
                style={{ color: "white" }}
              >
                Commit(ID)
              </th>
              <th
                className="[font-family:'Gabarito-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[normal] whitespace-nowrap uppercase w-[190px] border border-solid border-collection-1-line"
                style={{ color: "white" }}
              >
                Prompt
              </th>
              <th
                className="[font-family:'Gabarito-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[normal] whitespace-nowrap uppercase w-[230px] border border-solid border-collection-1-line"
                style={{ color: "white" }}
              >
                Creator
              </th>
            </tr>
            {commits.map((commit) => (
              <CommitItem
                setCommits={setCommits}
                commit={commit}
                key={commit.id}
                setDecalImageURL={setDecalImageURL}
              />
            ))}
          </table>
          </div>
        </div>
      ) : null}
    </>
  );
};
