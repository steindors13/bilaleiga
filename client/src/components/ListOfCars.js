import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ListOfCars extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }
    render() {
        const { cars } = this.props.car;
        return(
            <Container>

                <ListGroup>
                    <TransitionGroup>
                        {cars.map(({ _id, name, number }) => (
                          <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                            <Button 
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={this.onDeleteClick.bind(this, _id)}
                            >
                              &times;                                
                            </Button>
                            {name}{"  "}{number}
                            </ListGroupItem>
                          </CSSTransition>  
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ListOfCars.propTypes = {
    getItems: PropTypes.func.isRequired,
    car: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    car: state.car
});

export default connect(mapStateToProps, { getItems, deleteItem })(ListOfCars);