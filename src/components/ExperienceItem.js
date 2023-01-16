import React from 'react';
import { Item } from 'semantic-ui-react';
import '../App.css';

class ExperienceItem extends React.Component {
    render() {
        console.log('experience item props: ', this.props);
        return (
            <>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' src={process.env.PUBLIC_URL + this.props.imageSrc} /> 
                        <Item.Content>
                            <Item.Header as={'h1'} className='item-header'>{this.props.itemHeader}</Item.Header>
                            <Item.Meta>{this.props.itemMeta}</Item.Meta>
                            <Item.Description>
                                {this.props.itemDescription}
                            </Item.Description>
                            <Item.Extra>{this.props.dateAdded}</Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </>
        );
    }
}

export default ExperienceItem;