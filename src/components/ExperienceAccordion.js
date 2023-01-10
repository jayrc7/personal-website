import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

class ExperienceAccordion extends React.Component {
    state = {activeIndex: -1};

    handleClick = (e, titleProps) => {
        console.log('this is the titleProps: ', titleProps);
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }

    render () {
        let { activeIndex } = this.state;
        return (
            <>
                <Accordion styled>
                    {
                        this.props.items.map((item, index) => {
                            return (
                                <>
                                    <Accordion.Title
                                        active={activeIndex === index}
                                        index={index}
                                        onClick={this.handleClick}
                                    >
                                        <span style={{display: 'flex'}}>
                                        <Icon name='dropdown' />
                                            {item.itemName} 
                                        </span>

                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === index}>
                                        <p>
                                            A dog is a type of domesticated animal. Known for its loyalty and
                                            faithfulness, it can be found as a welcome guest in many households
                                            across the world.
                                        </p>
                                    </Accordion.Content>
                                </>
                            );
                        })
                    }
                </Accordion>
            </>
        );
    }
}

export default ExperienceAccordion;