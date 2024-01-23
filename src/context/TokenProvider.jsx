import { createContext, useContext, useEffect, useState } from "react";
import { getAllTokensId, getTokenInfo } from "../api/NFT";

const TokenContext = createContext();

function TokenProvider({ children }) {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    async function loadTokens() {
      try {
        const data = await getAllTokensId();
        const tokensId = data.tokens;
        console.log(tokensId);
        // Promise.all() mean that we will wait for all the promises to be resolved
        // and then we will get the result of all the promises in an array
        const tokensInfo = await Promise.all(
          tokensId.map((tokenId) => getTokenInfo(tokenId))
        );

        // add the tokenId to the tokenInfo object
        tokensId.forEach((tokenId, index) => {
          tokensInfo[index]["token_id"] = tokenId;
        });

        setTokens(tokensInfo);
        console.log(tokensInfo);
      } catch (err) {
        console.log(err);
      }
    }
    loadTokens();
  }, []);

  return (
    <TokenContext.Provider value={{ tokens, setTokens }}>
      {children}
    </TokenContext.Provider>
  );
}
function useToken() {
  const context = useContext(TokenContext);
  return context;
}

export { TokenProvider, useToken };
