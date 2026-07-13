import WorkspaceCard from "./WorkspaceCard";

const workspaces = [
  {
    id: 1,
    name: "Ruby",
    members: 0,
    lastLogin: "Last sign-in 1 day ago",
    email: "rupika355@gmail.com",
  },
];

const WorkspaceList = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-1">
        Ready to launch
      </h2>

      <p className="text-gray-500 mb-4">
        {workspaces[0].email}
      </p>

      <div className="flex flex-col gap-4">
        {workspaces.map((workspace) => (
          <WorkspaceCard
            key={workspace.id}
            workspace={workspace}
          />
        ))}
      </div>
    </>
  );
};

export default WorkspaceList;