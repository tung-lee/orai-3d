import { approveCommit } from "../../api/NFT";

export const CommitItem = ({ commit, setCommits, setDecalImageURL }) => {
  function viewCommit(eueno_url) {
    console.log(eueno_url)
    setDecalImageURL(eueno_url)
  }

  function handleApproveCommit({ tokenId, commitId }) {

    console.log(commitId)
    const tx = approveCommit({
      token_id: tokenId,
      commit_id: commitId,
    });
    console.log(tx);
    setCommits((prev) =>
      prev.map((item) => {
        if (item.id === commitId) {
          return {
            ...item,
            is_approved: true,
          };
        }
        return item;
      })
    );
  }

  return (
    <tr className="[font-family:'Gabarito-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[normal] whitespace-nowrap text-text-color">
      <td
        className="border-r border-solid border-collection-1-line px-[20px] py-[10px] truncate"
        onClick={() => viewCommit(commit.eueno_url)}
      >
        {commit.id}
      </td>
      <td className="border-r border-solid border-collection-1-line px-[20px] py-[10px] truncate">
        {commit.prompt}
      </td>
      <td className="border-r border-solid border-collection-1-line px-[20px] py-[10px] truncate">
        <div className="flex items-center justify-center">
          {commit.owner.substring(0, 10)}...
          {!commit.is_approved ? (
            <>
              <button className="mx-[10px] p-[4px] border border-solid border-collection-1-line">
                Reject
              </button>
              <button
                onClick={() =>
                  handleApproveCommit({
                    tokenId: "2",
                    commitId: commit.id,
                  })
                }
                className="mr-[10px] p-[4px] bg-[#fff] text-black"
              >
                Approve
              </button>
            </>
          ) : null}
        </div>
      </td>
    </tr>
  );
};
