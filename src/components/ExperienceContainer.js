import React from 'react';
import ExperienceItem from './ExperienceItem';
import ExperienceAccordion from './ExperienceAccordion';

class ExperienceContainer extends React.Component {
    render () {
        return (
            <div className='experience-container'>
                <ExperienceItem 
                    imageSrc={this.props.data.imgSrc}
                    itemHeader={this.props.data.title}
                    itemMeta={this.props.data.role}
                    itemDescription={this.props.data.description}
                    dateAdded={this.props.data.startAndEndDates}
                />

                {this.props.data.items && <ExperienceAccordion items={this.props.data.items} />}
            </div>
        );
    }
}

export default ExperienceContainer;