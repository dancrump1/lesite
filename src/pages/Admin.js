import React from 'react';
import Nav from '../components/Nav';

class Admin extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                You found the admin page!
                <div>
                    <form>
                        <input placeholder="username"></input>
                        <input placeholder="password"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Admin;