import React, { Component } from "react";
import "./animal.css";
// import { withRouter } from 'react-router'

export default class AnimalForm extends Component {
    // Set initial state
    state = {
        animalName: "",
        breed: "",
        employeeId: "",
        ownerId: "",
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating animal object, and
          invoking the function reference passed from parent component
       */
    constructNewAnimal = evt => {
        if (this.state.employee === "") {
            window.alert("Please select a caretaker");
        } if (this.state.owner === "") {
            window.alert("Please select an owner");
        } else {
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                // Make sure the employeeId is saved to the database as a number since it is a foreign key.
                employeeId: parseInt(this.state.employeeId),
                ownerId: parseInt(this.state.ownerId)
            };

            // Create the animal and redirect user to animal list
            this.props.addAnimal(animal)
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="animalName"
                            placeholder="Animal name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="breed"
                            placeholder="Breed"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="owner">Owner Name</label>
                        <select
                            defaultValue=""
                            name="owner"
                            id="ownerId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select an employee</option>
                            {this.props.owners.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select
                            defaultValue=""
                            name="employee"
                            id="employeeId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select an employee</option>
                            {this.props.employees.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="button"
                        onClick={this.constructNewAnimal}
                        className="btn btn-primary"
                    >
                        Submit
                     </button>
                </form>
            </React.Fragment>
        );
    }
}

// export default withRouter(AnimalForm)