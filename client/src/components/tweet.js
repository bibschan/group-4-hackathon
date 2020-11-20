import '../'

function Tweet(props) {
    // const {tweets} = props.tweets;
    return !props.tweets ? <h2>Loading...</h2> :
    (
        <div className="tweet">
            <ul className="tweet__list">
                {props.tweets && props.tweets.map((tweet) => (
                    <li className="tweet__item" key={tweet.id}>
                        <p>{tweet.tweet} </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tweet;