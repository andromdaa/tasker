import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';

function AddTask(props) {
    const {
        buttonLabel,
        className
    } = props;

    const [isOpen, setOpen] = useState(false);
    const [ name, setName ] = useState();
    const [ description, setDescription ] = useState();

    const toggle = () => setOpen(!isOpen);

    async function postTask() {
        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: props.addTo,
                name: name,
                description: description
            })
        };
        await fetch(`http://localhost:8080/tasks`, options);
        toggle();
    }



    return (
        <div>
            <Button outline color="primary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={isOpen} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add Task</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <Input placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    </InputGroup>
                    <br />
                    <InputGroup>
                        <Input placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                    </InputGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => postTask()}>Add</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}


export default AddTask;