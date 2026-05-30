function PublicationCard(props: {
  title: string
  venue: string
  year: string
  url?: string
}) {
  return (
    <article>
      <h3>
        {props.title}
      </h3>

      <p>
        Venue: {props.venue}
      </p>

      <p>
        Year: {props.year}
      </p>

      {props.url && (<a href={props.url} target="_blank" rel="noreferrer">
        View Paper
      </a>)}

    </article>
  )
}

export default PublicationCard