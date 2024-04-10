import React from 'react';

const SmilesWinner = ({ emojis, showResults }) => {
    let winner = null;
    if (showResults) {
        let maxCount = -1;
        let winnerIndex = -1;

        emojis.forEach((emoji, index) => {
            if (emoji.count > maxCount) {
                maxCount = emoji.count;
                winnerIndex = index;
            }
        });

        const allEqualCounts = emojis.every(emoji => emoji.count === emojis[0].count);

        if (winnerIndex !== -1 && !allEqualCounts) {
            winner = emojis[winnerIndex];
        }
    }

    if (winner) {
        return <p>Winner: {winner.symbol}</p>;
    } else if (showResults) {
        return <p>No winner yet!</p>;
    }

    return null;
};

export default SmilesWinner;
