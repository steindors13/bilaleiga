import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import uuid from 'uuid';

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        number: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.number]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            id: uuid(),
            name : this.state.name,
            number : this.state.number
        }
        
        // add item via addItem action
        this.props.addItem(newItem);

        // close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >Add Car</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="car">Car</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="car"
                                    placeholder="Add Car"
                                    onChange={this.onChange}
                                    />
                                    <Input
                                    type="text"
                                    name="number"
                                    id="car"
                                    placeholder="Add Number"
                                    onChange={this.onChange}
                                    />
                                <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                >
                                    Add Car
                                </Button>
                            </FormGroup>
                        
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    car: state.car
})

export default connect(mapStateToProps, { addItem })(ItemModal);