// app/workspace-list.tsx
type WorkspaceListProps = {
  workspaces: string[];
  selectedWorkspace: string | null;
  onSelectWorkspace: (workspace: string) => void;
};

export default function WorkspaceList({
  workspaces,
  selectedWorkspace,
  onSelectWorkspace,
}: WorkspaceListProps) {
  if (workspaces.length === 0) return null;

  return (
    <ul className="space-y-2">
      {workspaces.map((workspace) => {
        const isSelected = workspace === selectedWorkspace;

        return (
          <li
            key={workspace}
            onClick={() => onSelectWorkspace(workspace)}
            className={`cursor-pointer px-3 py-2 border ${
              isSelected
                ? "border-white bg-white text-black"
                : "border-white text-white"
            }`}
          >
            {workspace}
          </li>
        );
      })}
    </ul>
  );
}
