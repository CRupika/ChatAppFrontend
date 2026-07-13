import { Card } from "primereact/card";

const CreateWorkspaceCard = ({onCardClick}) => {
  return (
    <Card
      className="bg-orange-50 cursor-pointer hover:shadow-4 transition-duration-200"
    //   onClick = {onCardClick}
     onClick={() => {
        console.log("Card clicked");
        onCardClick();
    }}
    >
      <div className="flex justify-center items-center gap-4">

        <div className="bg-white w-10 h-10 rounded flex justify-center items-center shadow-2">

          <i className="pi pi-plus text-xl"></i>

        </div>

        <h2 className="text-lg font-semibold m-0">
          Create a new workspace
        </h2>

      </div>
    </Card>
  );
};

export default CreateWorkspaceCard;