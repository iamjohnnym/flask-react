import React from 'react';


const AddUser = (props) => {
    return (
        <form class=".addUser" onSubmit={(event) => props.addUser(event)}>
            <div className='field'>
                <input
                    name="username"
                    className="input is-large"
                    type="text"
                    placeholder="Enter a Username"
                    value={props.username}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <div className="field">
                <input
                    name="email"
                    className="input is-large"
                    type="email"
                    placeholder="Enter an email address"
                    value={props.email}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <input
                type="submit"
                className="button is-primary is-large is-fullwidth"
                value="submit"
            />
        </form>
    )
};

export default AddUser;
