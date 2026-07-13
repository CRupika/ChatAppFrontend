const signupReducer = {
    signupLoading: false,
    signupResponse: {},
    signupError: null,
}

const signinReducer = {
    signinLoading: false,
    signinResponse: {},
    signinError: null,
}

const userReducer = {
    loading: false,
    users: [],
    error: null,
}

const conversationReducer = {
    loading: false,
    conversation: null,
    error: null
}

const directMessageReducer = {
    loading: false,
    message: [],
    error: null
}

export const initialStore = {
    signupReducer: signupReducer,
    signinReducer: signinReducer,
    userReducer: userReducer,
    conversationReducer: conversationReducer,
    directMessageReducer:directMessageReducer
}
