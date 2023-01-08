import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import '../App.css';

class Navbar extends React.Component {
    state = {
    }

    handleItemClick = (e, { name }) => {
        console.log('this is the name of the page: ', name);
        this.setState({ activeItem: name });
    }

    onComponentDidMount() {
        console.log('hi');
        console.log(this.props.location);
    }

    render() {
        const { activeItem } = this.state;
        return (
            <Menu fixed='top' className='navbar'> 
                <Menu.Item
                    name='home'
                    as={NavLink}
                    exact to={'/'}
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>

                <Menu.Item
                    name='projects'
                    active={activeItem === 'projects'}
                    as={NavLink}
                    exact to={'/projects'}
                    onClick={this.handleItemClick}
                >
                    Projects
                </Menu.Item>

                <Menu.Item
                    name='blog'
                    active={activeItem === 'blog'}
                    as={NavLink}
                    exact to={'/blog'}
                    onClick={this.handleItemClick}
                >
                    Blog
                </Menu.Item>        
            </Menu>
        );
    }
}

export default Navbar;