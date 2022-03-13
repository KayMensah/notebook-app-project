import React, { useState } from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./FormList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
export const FormList = () => {
    const dispatch = useDispatch();
    const Notes = useSelector((state) => state);
    const [show, setshow] = useState(false);
    const [modal, setmodal] = useState({ title: "", description: "" });
    const edit = (e) => {
        const newNote = { ...modal };
        dispatch({ type: "edit", payload: newNote });
        console.log(newNote);
        setshow(false);
    };

    return (
        <div className="form-lists">
            <h1>Notes</h1>
            {Notes.length > 0 ? (
                <>
                    {" "}
                    <table>
                        <thead>
                            <th>Notes</th>
                            <th>edit</th>
                            <th>delete</th>
                            <th>date</th>
                            <th>view details</th>
                        </thead>
                        {Notes.map((note) => {
                            return (
                                <List
                                    note={note}
                                    show={setshow}
                                    modal={setmodal}
                                />
                            );
                        })}
                    </table>
                    <Modal
                        show={show}
                        className="modal"
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <ModalBody>
                            <label htmlFor="">title</label>
                            <div>
                                {" "}
                                <input
                                    type="text"
                                    value={modal.title}
                                    onChange={(e) =>
                                        setmodal({
                                            ...modal,
                                            title: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <br />
                            <label htmlFor="">description</label>
                            <div>
                                <input
                                    type="text"
                                    value={modal.description}
                                    onChange={(e) =>
                                        setmodal({
                                            ...modal,
                                            description: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </ModalBody>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => setshow(false)}
                            >
                                close
                            </Button>
                            <Button variant="primary" onClick={edit}>
                                save
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ) : (
                <p>enter notes to display here!</p>
            )}
        </div>
    );
};
