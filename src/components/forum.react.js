var Forum = React.createClass({
	getInitialState: function(){
		return {
			allAnswers: {
				'1': {
					body: "Isnt that about time travel?",
					correct: false
				},
				'2': {
					body: "React and Flux are a tool?",
					correct: false
				},
				'3': {
					body: "React is a synonym for 'respond'?",
					correct: false
				}
			}
		}
	},
    render: function(){
        return (
			<div>
				<ForumHeader allAnswers={this.state.allAnswers} />
			</div>
		);
		
//		React.createElement('div', null, React.createElement(ForumHeader, {allAnswers: this.state.allAnswers}));
    }
});