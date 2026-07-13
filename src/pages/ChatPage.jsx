import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../services/action/actioncreator/ChatAction/UserAction";
import { useToast } from '../components/ui/Toast';
import { createConversation } from "../services/action/actioncreator/ChatAction/ConversationAction";
import { getMessages, sendMessage, editMessage, deleteMessage } from "../services/action/actioncreator/ChatAction/DirectMessageAction";

const messages = [
    {
        id: 1,
        text: "Hello 👋",
        mine: false,
    },
    {
        id: 2,
        text: "Hi John!",
        mine: true,
    },
    {
        id: 3,
        text: "How are you?",
        mine: false,
    },
    {
        id: 4,
        text: "I'm doing great 😊",
        mine: true,
    },
];

const Chat = () => {

    const [selectedUser, setSelectedUser] = useState(null)
    const [newMessage, setNewMessage] = useState("")
    const { showToast } = useToast();
    const dispatch = useDispatch();

    const { users } = useSelector(
        state => state.userReducer
    );

    const { message } = useSelector(state => state?.directMessageReducer)

    console.log('message ----> 42', message)

    const { conversation } = useSelector(state => state?.conversationReducer)

    console.log('conversation ----> 46', conversation)

    console.log('conversation ------> 41', conversation?.conversation_id)

    useEffect(() => {
        if (conversation) {
            dispatch(
                getMessages(conversation?.conversation_id)
            );
        }
    }, [conversation]);

    const currentUser = JSON.parse(
        localStorage.getItem("user")
    );

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    useEffect(() => {

        if (users.length > 0 && !selectedUser) {

            setSelectedUser(users[0]);

            dispatch(
                createConversation(users[0].id)
            );

        }

    }, [users]);

    const handleConversation = (user) => {
        console.log('HANDLE -----> 68', user)
        setSelectedUser(user);
        // console.log('userId -----> 230', userId)

        console.log("Calling createConversation");

        dispatch(createConversation(user?.id))
    }

    const handleSend = () => {

        if (!newMessage.trim()) return;

        dispatch(
            sendMessage({
                conversationId: conversation.conversation_id,
                message: newMessage
            })
        );

        setNewMessage("");
    };

    const handleEditMessage = (msg) => {
        console.log("Edit message", msg);
        // TODO: dispatch(editMessage({ id: msg.id, ... }))

        // dispatch(
        //     editMessage(
        //         message.id,
        //         {
        //             conversation_id: conversation.conversation_id,
        //             message: editedText
        //         }
        //     )
        // );

    };

    const handleDeleteMessage = (msg) => {
        console.log("Delete message", msg);
        // TODO: dispatch(deleteMessage(msg.id))
    };

    console.log('=======> 234', users);

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center p-6">

            <div className="w-full max-w-7xl h-[90vh] bg-white rounded-xl shadow-xl flex overflow-hidden">

                {/* Sidebar */}
                <div className="w-80 border-r flex flex-col">

                    {/* Header */}
                    <div className="p-4 border-b">

                        <h2 className="text-xl font-bold">
                            Conversations
                        </h2>

                        <div className="mt-4 flex items-center border rounded-lg px-3 py-2">

                            <i className="pi pi-search text-gray-400"></i>

                            <input
                                type="text"
                                placeholder="Search..."
                                className="ml-3 w-full outline-none"
                            />

                        </div>

                    </div>

                    {/* Conversation List */}

                    <div className="flex-1 overflow-y-auto">

                        {users.map((conversation) => (
                            <div
                                key={conversation.id}
                                className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 ${selectedUser?.id === conversation.id ? "bg-blue-50" : ""
                                    }`}
                            >
                                <div className="w-12 h-12 rounded-full !bg-[rgb(97,31,105)] text-white flex items-center justify-center font-semibold">
                                    {conversation.username.charAt(0)}

                                </div>
                                <div
                                    key={conversation?.id}
                                    onClick={() => handleConversation(conversation)}
                                >
                                    <h3 className="font-semibold">
                                        {conversation.username}
                                    </h3>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Window */}

                <div className="flex-1 flex flex-col">

                    {/* Header */}

                    <div className="border-b p-4 flex items-center justify-between">

                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 rounded-full !bg-[rgb(97,31,105)] text-white flex items-center justify-center font-semibold">
                                {selectedUser?.username?.charAt(0).toUpperCase() || ""}
                            </div>

                            <div>

                                <h2 className="font-semibold text-lg">
                                    {selectedUser?.username || "Selected User"}
                                </h2>

                                <span className="text-sm text-green-500">
                                    ● Online
                                </span>

                            </div>

                        </div>

                        <div className="flex gap-4 text-gray-500">

                            <i className="pi pi-phone cursor-pointer hover:text-blue-600"></i>

                            <i className="pi pi-video cursor-pointer hover:text-blue-600"></i>

                            <i className="pi pi-ellipsis-v cursor-pointer hover:text-blue-600"></i>

                        </div>

                    </div>

                    {/* Messages */}

                    <div className="flex-1 bg-gray-50 overflow-y-auto p-6 space-y-4">

                        {/* {message.map((msg) => {

                            const isMine =
                                msg.sender_id === currentUser.id;

                            return (
                                <div
                                    key={msg.id}
                                    className={`flex ${isMine
                                        ? "justify-end"
                                        : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-xs px-4 py-3 rounded-2xl ${isMine
                                            ? "!bg-[rgb(97,31,105)] text-white"
                                            : "bg-white border"
                                            }`}
                                    >
                                        {msg.message}
                                    </div>

                                </div>
                            )
                        })} */}

                        {message.map((msg) => {

                            const isMine = msg.sender_id === currentUser.id;

                            return (
                                <div
                                    key={msg.id}
                                    className={`group flex items-center gap-2 ${isMine ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    {/* Icons only show for my own messages */}
                                    {isMine && (
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <i
                                                className="pi pi-pencil text-gray-400 hover:text-blue-600 cursor-pointer text-sm"
                                                onClick={() => handleEditMessage(msg)}
                                            ></i>
                                            <i
                                                className="pi pi-trash text-gray-400 hover:text-red-600 cursor-pointer text-sm"
                                                onClick={() => handleDeleteMessage(msg)}
                                            ></i>
                                        </div>
                                    )}

                                    <div
                                        className={`max-w-xs px-4 py-3 rounded-2xl ${isMine
                                            ? "!bg-[rgb(97,31,105)] text-white"
                                            : "bg-white border"
                                            }`}
                                    >
                                        {msg.message}
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                    {/* Footer */}

                    <div className="border-t p-4 flex items-center gap-3">

                        <button className="text-gray-500 hover:text-blue-600">

                            <i className="pi pi-paperclip text-xl"></i>

                        </button>

                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e?.target?.value)}
                        />

                        <button
                            className="!bg-[rgb(97,31,105)] text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-700"
                            onClick={handleSend}
                        >

                            <i className="pi pi-send"></i>

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Chat