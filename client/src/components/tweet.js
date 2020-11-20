function Tweet(props) {
    const {tweets} = props.tweets;
    return (
        <ul className="tweet">
            {tweets && tweets.map((tweet) => (
                <li className="tweet__item" key={tweet.id} >
                    <p>{tweets.tweet} </p>
                </li>
            ))}
        </ul>
    )
}

export default Tweet;