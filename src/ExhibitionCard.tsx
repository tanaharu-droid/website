function ExhibitionCard(props: {
    title: string
    year: string
    date: string
    venue: string
    description: string
    images?: string[]
}) {
    return (
        <article>
            <h3>
                {props.title}
            </h3>

            <p>
                Year: {props.year}
            </p>

            <p>
                Date: {props.date}
            </p>

            <p>
                Venue: {props.venue}
            </p>

            <p>
                {props.description}
            </p>

            {props.images && (
                <img
                    src={props.images[0]}
                    alt={props.title}
                    className="exhibition-image"
                />
            )}
        </article>
    )
}

export default ExhibitionCard