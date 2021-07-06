import React, { Component } from 'react';
import {Modal ,Button ,Form} from 'react-bootstrap';

class DrinksForm extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update Drink</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form id="drinksForm" onSubmit={(event)=>this.props.updateDrink(event)}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={this.props.strDrink} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" name="image" defaultValue={this.props.strDrinkThumb} />
                </Form.Group>

                </Form>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" form="drinksForm" type="submit" onClick={this.props.handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default DrinksForm;
