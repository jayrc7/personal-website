import React from 'react';
import { Menu } from 'semantic-ui-react';
import '../App.css';
import { withRouter } from 'react-router';

class Navbar extends React.Component {
    state = {
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.history.push({
            pathname: '/' + (name === 'home' ? '' : name),
            state: { activeItem: name }
        });
    }

    componentDidMount() {
        const reloadedPage = this.props.location.pathname.split('/')[1];
        this.setState({activeItem: reloadedPage === '' ? 'home' : reloadedPage});
    }

    render() {
        const { activeItem } = this.state;
        return (
            <Menu fixed='top' className='navbar'> 
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>

                <Menu.Item
                    name='experience'
                    active={activeItem === 'experience'}
                    onClick={this.handleItemClick}
                >
                    Experience
                </Menu.Item>

                <Menu.Item
                    name='projects'
                    active={activeItem === 'projects'}
                    onClick={this.handleItemClick}
                >
                    Projects
                </Menu.Item>

                <Menu.Item
                    name='blog'
                    active={activeItem === 'blog'}
                    onClick={this.handleItemClick}
                >
                    Blog
                </Menu.Item>        
            </Menu>
        );
    }
}

export default withRouter(Navbar);