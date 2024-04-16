import React from 'react';
import SmilesWinner from './components/SmilesWinner';
import EmojiItem from "./components/EmojiItem";
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [
                {symbol: '😊', count: 0},
                {symbol: '😂', count: 0},
                {symbol: '😍', count: 0},
                {symbol: '🙄', count: 0},
                {symbol: '😵', count: 0},
                {symbol: '😎', count: 0},
            ],
            showResults: false,
        };
    }

    handleEmojiClick = (index) => {
        this.setState(prevState => ({
            emojis: prevState.emojis.map((emoji, i) => (
                i === index ? {...emoji, count: emoji.count + 1} : emoji
            ))
        }));
    };

    getWinner = () => {
        let maxCount = -1;
        let winnerIndex = -1;

        this.state.emojis.forEach((emoji, index) => {
            if (emoji.count > maxCount) {
                maxCount = emoji.count;
                winnerIndex = index;
            }
        });

        return winnerIndex !== -1 ? this.state.emojis[winnerIndex] : null;
    };

    showResults = () => {
        this.setState({showResults: true});
    };

    render() {
        const {emojis, showResults} = this.state;
        const winner = this.getWinner();

        return (
            <div className="container">
                <h1>Emoji Voting App</h1>
                <ul>
                    {emojis.map((emoji, index) => (
                        <EmojiItem
                            key={index}
                            symbol={emoji.symbol}
                            count={emoji.count}
                            onClick={() => this.handleEmojiClick(index)}
                        />
                    ))}
                </ul>
                <button onClick={this.showResults}>Show Results</button>
                {showResults && <SmilesWinner winner={winner}/>}
            </div>
        );
    }
}

export default App;