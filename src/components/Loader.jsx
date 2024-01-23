import ContentLoader from "react-content-loader";

export const Loader = (props) => {
  return (
    <ContentLoader
      viewBox="0 0 400 160"
      backgroundColor="transparent"
      {...props}
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  );
};
