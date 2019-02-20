import React, { Component } from 'react';
import './AppHeader.css';
import { Icon,Header, Image } from 'semantic-ui-react';
import Links from './Links';

class AppHeader extends React.Component{
    render(){
        return(
            <div className="header"> 
                <Header inverted as='h2'>
                    <Image src="https://cdn.dribbble.com/users/109649/screenshots/954354/lightningbolt.png" />
                    <Header.Content>
                    Jason Cabrera
                    <Header.Subheader> Sophomore at UC San Diego: Pursuing B.S. Mathematics-Computer Science </Header.Subheader>
                    </Header.Content>
                </Header>

                <Links />
            </div>
        )
    }
}

export default AppHeader
