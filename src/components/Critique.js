import React, { Component } from 'react';
import { proj, tag } from './projects.js';
import './Critique.css';
import { Button, Transition, Container, Segment, Header, Label} from 
        'semantic-ui-react';

class Critique extends React.Component{
    render(){
        return(
            <div className="display"> 	
					<br/>
					<Container inverted text>
						<Header textAlign="left" inverted as='h1'>
							<h1> Critique </h1>

							<p className="ptext"> 
The following critique is in response to the notion that the Turing Test is a valid way to determine whether a machine can actually think or not. <a target="_blank" href="https://plato.stanford.edu/entries/turing-test/"> Here </a> is the article that dives into the Turing Test. 
							</p>

							<p className="ptext"> 
This test, developed by Alan Turing in 1950, is executed as follows: 
Place a human and a machine in some sort of black box so that they can’t be seen by the evaluator (who is a human). 
The evaluator will then have a text based conversation with the machine and the human, being unaware of which one is which. 
If after having the conversation, the evaluator can’t tell the machine and the human’s responses apart then the machine has passed the Turing Test. Else, it didn’t pass. 
								
							</p>
							<p className="ptext"> 
								According to Alan Turing in the 1950’s, he raised the point that if a machine were to someday pass this test, then it’s enough to bring up the question of whether that machine can think or not. 
							</p>
							<p className="ptext"> 
As Artificial Intelligence assistants are becoming more and more integrated into society, their ability to understand us will obviously improve to the point where they will be able to fool the evaluator and pass the Turing Test 10 out of 10 times. However, even when artificial intelligence gets to this point, I strongly disagree with claiming that a machine can therefore think for itself. 
							
							</p>
							<p className="ptext"> 
The machine couldn’t possibly be able to think for itself even at that point because at it’s core, it’s simpy a program that processes speech to text, parses that text, and uses some sort of syntactic and semantic algorithm to produce an output. That’s it. All it does is respond to what the person says. It doesn’t actually think for itself, but executes lines of code that algorithmically makes a response. It doesn’t contrive a single thought when giving a response, it calculates the response.
							
							</p>
							<p className="ptext"> 
Feelings are also necessary in being able to achieve the ability to think on a human level. Our feelings influence the way we think of going about a certain situation or conversation. If we are mad at someone, the way we respond to them willl obviously show that through our choice of words. However, a computer can’t determine whether it’s upset by someone or not. Even if it can, it is programmed to do so, it doesn’t actually feel the need to be angry at this person, again it’ll only calculate that “need”. It is an artificial way of producing emotion, not at the same level of how humans can produce emotions therefore we can’t equate the two. Saying that a computer can think for itself is like saying that algorithms and feelings are interchangeable with each other. That is clearly not the case, by the definition of a computer's algorithm it is a sequence of steps that’ll be executed so long as the computer is still capable. Feelings on the other hand are much more complicated than that.
							
							</p>
							<p className="ptext"> 
Overall, the way that artificial intelligence produces outputs is a fundamental issue for me when determining whether a computer can think on a human level or not. The engineer that designed the artificial intelligence programmed it on how to “think”, therefore it cannot break those boundaries set by the engineer and so it’s not actually the program thinking but it’s only following the algorithm the engineer programmed it to follow. I don’t believe the Turing Test is a valid way to determine whether a machine can think or not because I feel that it’s impossible for a machine to think in the first place. 	
							
							</p>
						</Header>

					</Container>
            </div> 
        )
    }
}

export default Critique;
