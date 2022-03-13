import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import "./List.css";
const List = ({ note, modal, show }) => {
    const dispatch = useDispatch();
    const deleteNote = (id) => {
        dispatch({ type: "delete", payload: id });
    };
    const handleEdit = () => {
        modal({
            ...note,
        });
        show(true);
    };
    const [details, setdetails] = useState(false);

    return (
        <>
            <tr>
                <td>{note.title}</td>
                <td>
                    <FiEdit onClick={handleEdit} className="edit" />
                </td>
                <td>
                    <RiDeleteBinLine
                        onClick={() => deleteNote(note.id)}
                        className="delete"
                    />
                </td>
                <td>{note.date}</td>
                <td>
                    <a href="#" onClick={() => setdetails(!details)}>
                        view details
                    </a>{" "}
                </td>
            </tr>
            {details && (
                <tr style={{ color: "green", fontWeight: "bold" }}>
                    <td colSpan={7}>* {note.description}</td>
                </tr>
            )}
        </>
    );
};

export default List;
