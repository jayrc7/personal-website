import React from 'react';
import './AppHeader.css';
import { Header, Image } from 'semantic-ui-react';
import Links from './Links';

class AppHeader extends React.Component{
  render(){
    return(
      <div className="header"> 
        <Header inverted as='h1'>
          <Image src="https://cdn.dribbble.com/users/109649/screenshots/954354/lightningbolt.png" />
            <Header.Content>
              Jason Cabrera
              <Header.Subheader> 
                Junior at UC San Diego: B.S. Computer Science 
              </Header.Subheader>
            </Header.Content>
        </Header>

        <Links />
      </div>
    )
  }
}

export default AppHeader
