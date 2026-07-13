import SlackLogo from "../components/ui/SlackLogo";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import slack from '../../src/assets/slack.png';
import { useToast } from '../components/ui/Toast';

import CreateWorkspaceCard from "../components/Workspace/CreateWorkspaceCard";
import WorkspaceList from "../components/Workspace/WorkspaceList";


const WorkSpace = () => {

    const [visible, setVisible] = useState(false);
    const [workspaceName, setWorkspaceName] = useState("");

    const createWorkspace = () => {
        console.log(workspaceName);

        // API Call

        setVisible(false);
        setWorkspaceName("");
    };

    console.log('visible ------> 29',visible)
    
    const footer = (
        <div>
            <Button
                label="Cancel"
                outlined
                severity="secondary"
                onClick={() => setVisible(false)}
            />

            <Button
                label="Create"
                onClick={createWorkspace}
            />
        </div>
    );

    return (
        <>
        <div className="flex min-h-screen flex-col items-center">
            <header
                className="grid w-full grid-cols-3 items-center pt-12 pb-10"
            >
                <div class="left-col"></div>
                <div className="text-center">
                    <a
                        target="_self"
                        className="flex items-center justify-center no-underline"
                        href="https://slack.com"
                        rel="noopener noreferrer"
                    >
                        <img
                            alt="Connectly"
                            className="h-[30px]"
                            title="Connectly"
                            src={slack}
                        />
                        <span
                            className="ml-[5px] font-lato text-[35px] font-semibold tracking-[-1px] text-[#1d1c1d]"
                        >
                            Connectly
                        </span>
                    </a>
                </div>
                <div className="right-col"></div>
            </header >
            <div
                className="flex flex-col grow shrink-0"
            >
                <h1
                    className="mt-5 max-w-[700px] text-center text-[48px] font-bold leading-[46px] tracking-[-0.75px] text-black"
                >
                    Welcome back!
                </h1>
                <div
                    className="max-w-[700px] mb-8 text-center text-[18px] leading-[27px] text-[#454245]"
                >
                    you can create a new workspace or choose from an existing one
                </div>
            </div>

            <div className="min-h-[62vh] bg-white flex justify-center">
                <div className="w-full max-w-3xl mt-8">

                    <CreateWorkspaceCard 
                    // onCardClick ={() => setVisible(true)}
                        onCardClick={() => {
                        console.log("Card clicked");
                        setVisible(true);
                    }}
                    />

                    <div className="mt-6 text-xs text-gray-500 leading-5">
                        By continuing, you agree to our Main Services Agreement,
                        User Terms of Service and Slack Supplemental Terms.
                        Additional disclosures are available in our Privacy Policy
                        and Cookie Policy.
                    </div>

                    <div className="flex items-center my-8">
                        <div className="flex-1 border-b"></div>
                        <span className="px-4 text-gray-500 text-sm">
                            OR continue to existing workspaces
                        </span>
                        <div className="flex-1 border-b"></div>
                    </div>

                    <WorkspaceList />

                </div>
            </div>
            <div className="w-full max-w-full">
                <div className="flex flex-col items-center py-8">
                    <footer className="flex w-full justify-center border-0 p-0 text-center">
                        <a
                            target="_blank"
                            href="/legal"
                            rel="noopener noreferrer"
                            className="mb-1 mr-4 text-center text-[15px] font-medium leading-[1.46668] tracking-[-0.2px] text-[#696969] no-underline"
                        >
                            Privacy &amp; Terms
                        </a>

                        <a
                            target="_blank"
                            href="/help/requests/new"
                            rel="noopener noreferrer"
                            className="mb-1 mr-4 text-center text-[15px] font-medium leading-[1.46668] tracking-[-0.2px] text-[#696969] no-underline"
                        >
                            Contact Us
                        </a>

                        <div className="flex">
                            <a
                                target="_blank"
                                href="#"
                                rel="noopener noreferrer"
                                className="mb-1 mr-4 text-center text-[15px] font-medium leading-[1.46668] tracking-[-0.2px] text-[#696969] no-underline"
                            >
                                <div className="flex flex-row items-center justify-center">
                                    <FiGlobe />

                                    <span className="ml-[5px]">
                                        Change region
                                    </span>

                                    <MdKeyboardArrowDown />
                                </div>
                            </a>
                        </div>

                        <span hidden data-sk="popover-trigger"></span>
                    </footer>
                </div>
            </div>
        </div >

         {/* <div
                onClick={() => setVisible(true)}
                className="cursor-pointer"
            >
                Create a new workspace
            </div> */}

            <Dialog
                header="Create New Workspace"
                visible={visible}
                style={{ width: "32rem" }}
                footer={footer}
                draggable={false}
                resizable={false}
                modal
                onHide={() => setVisible(false)}
            >
                <div className="flex flex-col gap-2">

                    <label className="font-medium">
                        Workspace Name
                    </label>

                    <InputText
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        placeholder="Enter workspace name"
                    />

                </div>
            </Dialog>

        </>
    )
}

export default WorkSpace

// import CreateWorkspaceCard from "../components/Workspace/CreateWorkspaceCard";
// import WorkspaceList from "../components/Workspace/WorkspaceList";

// const WorkspacePage = () => {
//     return (

     



//     );
// };

// export default WorkspacePage;