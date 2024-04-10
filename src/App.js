import React from 'react';
import SmilesWinner from './components/SmilesWinner';
import './components/styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [
                { symbol: '😊', count: 0 },
                { symbol: '😂', count: 0 },
                { symbol: '😍', count: 0 },
                { symbol: '🙄', count: 0 },
                { symbol: '😵', count: 0 },
                { symbol: '😎', count: 0 },
            ],
            showResults: false,
        };
    }

    handleEmojiClick = (index) => {
        this.setState(prevState => ({
            emojis: prevState.emojis.map((emoji, i) => {
                if (i === index) {
                    return { ...emoji, count: emoji.count + 1 };
                }
                return emoji;
            })
        }));
    };

    handleShowResults = () => {
        this.setState({ showResults: true });
    };

    render() {
        const { emojis, showResults } = this.state;

        return (
            <div className="container">
                <h2>Smiles Voting App</h2>
                <ul>
                    {emojis.map((emoji, index) => (
                        <li key={index} onClick={() => this.handleEmojiClick(index)}>
                            {emoji.symbol}
                            <span>Clicks: {emoji.count}</span>
                        </li>
                    ))}
                </ul>
                <button onClick={this.handleShowResults}>Show Results</button>
                <SmilesWinner emojis={emojis} showResults={showResults} />
            </div>
        );
    }
}

export default App;
