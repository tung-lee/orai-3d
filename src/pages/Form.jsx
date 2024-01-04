import React from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [projectName, setProjectName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [model, setModel] = React.useState("");
  const [previewImage, setPreviewImage] = React.useState("");
  const navigate = useNavigate();

  function createProject() {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const project = {
      id: Date.now(),
      name: projectName,
      description: description,
      model: model,
      previewImage: previewImage,
    };
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects));
    navigate("/models");
  }

  function handleInput(evt, setter) {
    setter(evt.target.value);
  }

  return (
    <>
      <h1 className="">Create Project</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Project Name
          </label>
          <input
            onChange={(evt) => handleInput(evt, setProjectName)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Project Name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            onChange={(evt) => handleInput(evt, setDescription)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Model
          </label>
          <input
            onChange={(evt) => handleInput(evt, setModel)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="temp model URL in public folder"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Preview Image
          </label>
          <input
            onChange={(evt) => handleInput(evt, setPreviewImage)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="temp image URL in public folder"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={createProject}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
