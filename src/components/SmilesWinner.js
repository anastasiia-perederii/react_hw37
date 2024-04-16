const SmilesWinner = ({winner}) => {
    return winner
        ? <p>Winner: {winner.symbol}</p>
        : <p>No winner yet!</p>;
};

export default SmilesWinner;
