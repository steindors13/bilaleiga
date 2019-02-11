import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ListOfCars extends Component {
    state = {
        cars: [
            {id: uuid(), name: 'Toyota', number: 'LM 789' },
            {id: uuid(), name: 'Skoda', number: 'KH 839' },
            {id: uuid(), name: 'Isuzu', number: 'BN 431' },
            {id: uuid(), name: 'Mazda', number: 'CB 322' }
        ]
    }

    render() {
        const { cars } = this.state;
        return(
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={ () => {
                        const name = prompt('Enter Car');
                        if(name) {
                            this.setState(state => ({
                                cars: [...state.cars, { id: uuid(), name}]
                            }));
                        }
                    }}
                >Add Car
                </Button>

                <ListGroup>
                    <TransitionGroup>
                        {cars.map(({ id, name }) => (
                          <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                            <Button 
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => {
                                    this.setState(state => ({
                                        cars: state.cars.filter(car => car.id !== id)
                                    }));
                                }}
                            >
                              &times;                                
                            </Button>
                            {name}</ListGroupItem>
                          </CSSTransition>  
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ListOfCars;