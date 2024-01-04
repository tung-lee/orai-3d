import { useNavigate } from "react-router-dom";

export default function List3DModel() {
  const navigate = useNavigate();
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  return (
    <>
      <button
        onClick={() => navigate("/models/add")}
        className="mr-3 bg-green-500"
      >
        Create
      </button>
      <button className="bg-red-500">Delete</button>
      <div className="grid grid-cols-3 gap-4">
        {
          // eslint-disable-next-line
          projects.map((project, index) => {
            return <Model key={index} project={project} />;
          })
        }
      </div>
    </>
  );
}

function Model({ project }) {
  const navigate = useNavigate();
  const { id, name, description, previewImage } = project;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={previewImage} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => navigate(`/:${id}`)}
        >
          Design
        </button>
      </div>
    </div>
  );
}
