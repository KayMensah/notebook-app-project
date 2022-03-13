const intial = [
    {
        title: "read a book",
        description: "read 50pages on javascript...",
        date: new Date().toDateString(),
        id: 1,
    },
];

const reducer = (state = intial, action) => {
    switch (action.type) {
        case "addNotes":
            return [...state, action.payload];
        case "delete":
            return state.filter((state) => state.id !== action.payload);
        case "edit":
            return state.map((state) =>
                state.id === action.payload.id ? action.payload : state
            );
        default:
            return state;
    }
};
export default reducer;
