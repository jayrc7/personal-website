import React from 'react';
import { Item, Divider } from 'semantic-ui-react';
import '../App.css';

class Blog extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <>
                <div style={{marginTop: '60px'}}>
                    <h1 className='subtitle'> Blog </h1>
                    <Item.Group>
                        <Divider />
                        <Item style={{cursor: 'pointer'}} as='a' target='__blank' href={process.env.PUBLIC_URL + '/Recommender Systems Research Paper - Jason Cabrera.pdf'}>
                            <Item.Image size='small' src={process.env.PUBLIC_URL + '/CaseStudiesCourseImg.jpeg'} />
                            <Item.Content>
                                <Item.Header as={'a'} className='item-header'>Building a Movie Recommender System Using Movie Ratings and the Surprise Scikit Library</Item.Header>
                                <Item.Meta>Research Paper for CS 395T: Case Studies of Machine Learning Graduate Course</Item.Meta>
                                <Item.Description>
                                    My first machine learning research paper! Underwent research on which prediction algorithm to use for a collaborative-based filtering movie recommender system.
                                </Item.Description>
                                <Item.Extra>Added on 01/07/22</Item.Extra>
                            </Item.Content>
                        </Item>
                        <Divider />
                    </Item.Group>
                </div>
            </>
        );
    }
}

export default Blog;