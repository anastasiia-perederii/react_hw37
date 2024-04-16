const EmojiItem = ({symbol, count, onClick}) => {
    return (
        <li onClick={onClick}>
            {symbol}
            <span>Clicks: {count}</span>
        </li>
    );
};

export default EmojiItem;
