function ProjectCard(props: {
  title: string
  year: string
  description: string
  url?: string
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
        {props.description}
      </p>

      {props.url && (<a href={props.url} target="_blank" rel="noreferrer">
        View Project
      </a>)}

    </article>
  )
}

export default ProjectCard