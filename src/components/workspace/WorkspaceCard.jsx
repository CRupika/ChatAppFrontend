import { Card } from "primereact/card";

const WorkspaceCard = ({ workspace, onClick }) => {
  return (
    <Card
      className="cursor-pointer hover:shadow-4 transition-duration-200"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">

        <div className="flex items-center gap-4">

          <div className="w-11 h-11 bg-gray-600 text-white rounded flex items-center justify-center font-bold text-lg">
            {workspace.name.charAt(0).toUpperCase()}
          </div>

          <div>

            <h3 className="m-0 text-lg font-semibold">
              {workspace.name}
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">

              <i className="pi pi-users"></i>

              <span>{workspace.members} members</span>

              <span>•</span>

              <span>{workspace.lastLogin}</span>

            </div>

          </div>

        </div>

        <i className="pi pi-arrow-right text-lg"></i>

      </div>
    </Card>
  );
};

export default WorkspaceCard;