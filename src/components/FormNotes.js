import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./FormNotes.css";
import { v4 as uuid } from "uuid";
const FormNotes = () => {
    const dispatch = useDispatch();
    const [Notes, setNotes] = useState({ title: "", description: "" });
    const handleChange = (e) => {
        setNotes((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const submit = (e) => {
        const note = {
            ...Notes,
            id: uuid(),
            date: new Date().toDateString(),
        };
        e.preventDefault();
        if (Notes.title && Notes.description) {
            dispatch({ type: "addNotes", payload: note });
        }
        setNotes({ title: "", description: "" });
    };
    return (
        <div>
            <form className="form-style" onSubmit={submit}>
                <h1>STUDENT'S NOTEBOOK</h1>
                <div className="input1">
                    <label>Title:</label>
                    <br />
                    <input
                        type={"text"}
                        name="title"
                        placeholder={"Enter Title"}
                        value={Notes.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="input2">
                    <label>Description:</label>
                    <br />
                    <textarea
                        name="description"
                        placeholder="Enter Description"
                        value={Notes.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FormNotes;
