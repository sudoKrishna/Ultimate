"use client";

import { useState } from "react";
import WorkspaceList from "./workspace-list";

export default function Home() {
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaces, setWorkspaces] = useState<string[]>([]);
  const [selectWorkspaces, setSelectWorkspaces] = useState<string | null>(null);


  const handleSelectWorkspaces = (workspace : string) => {
    setSelectWorkspaces(workspace);
  }

  const addWorkspace = () => {
    if (!workspaceName.trim()) return;
    setWorkspaces((prev) => [...prev, workspaceName]);
    setWorkspaceName("");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md border border-white p-6">
        <input
          type="text"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
          placeholder="Workspace name"
          className="w-full mb-3 px-3 py-2 bg-black text-white border border-white"
        />

        <button
          onClick={addWorkspace}
          className="w-full mb-4 py-2 bg-white text-black"
        >
          Add Workspace
        </button>

        <WorkspaceList 
        workspaces={workspaces}
        selectedWorkspace={selectWorkspaces} 
        onSelectWorkspace={handleSelectWorkspaces}
        />
      </div>
    </div>
  );
}
