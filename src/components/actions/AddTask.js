import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup,
    Input,
    Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

function AddTask(props) {
    const {
        buttonLabel,
        className
    } = props;

    const [isOpen, setOpen] = useState(false);
    const [ name, setName ] = useState();
    const [ description, setDescription ] = useState();
    const [ isDropdownOpen, setDropdownOpen ] = useState();
    const [ currentPriority, setCurrentPriority ] = useState("None");

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
                description: description,
                priority: currentPriority
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
                    <br />
                    <InputGroup>
                        <Dropdown isOpen={isDropdownOpen} toggle={() => setDropdownOpen(!isDropdownOpen)}>
                            <DropdownToggle caret>
                                Priority: {currentPriority}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => setCurrentPriority("High")}>High</DropdownItem>
                                <DropdownItem onClick={() => setCurrentPriority("Medium")}>Medium</DropdownItem>
                                <DropdownItem onClick={() => setCurrentPriority("Low")}>Low</DropdownItem>
                                <DropdownItem onClick={() => setCurrentPriority(null)}>None</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
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