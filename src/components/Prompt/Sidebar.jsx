import { Prompt } from "./Prompt";

export const Sidebar = ({isExpanded, setIsExpanded}) => {
  function toggleSidebar() {
    setIsExpanded((prev) => !prev);
  }
  return (
    <div className="sidebar absolute top-0 left-0">
      {isExpanded ? (
        <div className="sidebar-content">
          <Prompt toggleSidebar={toggleSidebar} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
