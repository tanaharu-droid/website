import './App.css'
import ProjectCard from './ProjectCard'
import PublicationCard from './PublicationCard'

function App() {
  const projects = [
    {
      id: "memocon",
      title: "MemoCon",
      year: "2024",
      description: "A prototype interface for air conditioner control based on the Benefit of Inconvenience (BoI)",
      url: "https://openaccess.cms-conferences.org/publications/book/978-1-964867-35-9/article/978-1-964867-35-9_77"
    },

    {
      id: "evhp",
      title: "EVHP",
      year: "2024",
      description: "Solving the vacant house problem in the western district of Hakodate through anthropomorphism."
    }
  ]

  const publications = [
    {
      id: "1",
      title: "Investigating the Relationship between Anthropomorphic Expressions and Preferences Based on Kansei Design",
      venue: "HCI International 2024 - Late Breaking Posters",
      year: "2024",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-78516-0_13"
    },

    {
      id: "2",
      title: "Kansei Evaluation in the Product Design Incorporating Anthropomorphism",
      venue: "第26回日本感性工学会大会",
      year: "2024",
      url: "https://www.jstage.jst.go.jp/article/jskeproceedings/2.1/0/2.1_36/_article/-char/ja/"
    },

    {
      id: "3",
      title: "Air conditioner operating system based on the concept of Benefit of Inconvenience (Bol)",
      venue: "AHFE2024 Hawaii Edition",
      year: "2024",
      url: "https://openaccess.cms-conferences.org/publications/book/978-1-964867-35-9/article/978-1-964867-35-9_77"
    },

    {
      id: "4",
      title: "Kansei Evaluation of Anthropomorphic Expression in Product Design Between Japan and Korea",
      venue: "2025KISD (2025 International Conference of the Korean Institute of Spatial Design)",
      year: "2025",
      url: "https://www.kisd.or.kr/sub/sub0304_next_view.php?cate_idx=19&idx=837&ckattempt=1"
    },

    {
      id: "5",
      title: "Anthropomorphism and the Kansei Evaluation in Product Design Between Japan and Thailand",
      venue: "AHFE2025",
      year: "2025",
      url: "https://openaccess.cms-conferences.org/publications/book/978-1-964867-46-5/article/978-1-964867-46-5_20"
    },

    {
      id: "6",
      title: "Kansei Evaluations of Anthropomorphic Expression in Design Across Various Cultures: Focus on Japan, Korea, and Thailand",
      venue: "ICBAKE2025",
      year: "2025",
      url: "https://www.jstage.jst.go.jp/article/icbake/2025/0/2025_78/_article"
    }
  ]

  return (
    <main>
      <section>
        <h1>
          Haruki Tanaka
        </h1>

        <p>
          Design × Anthropomorphism
        </p>
      </section>

      <section>
        <h2>
          Research
        </h2>

        <article>
          <h3>
            Human-likeness in Design
          </h3>

          <p>
            I study how people perceive human-likeness in artificial objects,
            focusing on anthropomorphism, situation, and Kansei evaluation
          </p>
        </article>
      </section>

      <section>
        <h2>
          Projects
        </h2>
        {
          projects.map((project) =>
            <ProjectCard
              key={project.id}
              title={project.title}
              year={project.year}
              description={project.description}
              url={project.url}
            />
          )
        }

      </section>

      <section>
        <h2>
          Publications
        </h2>
        {
          [...publications]
          .sort((a,b) => Number(b.year) - Number(a.year))
          .map((publication) =>
            <PublicationCard
              key={publication.id}
              title={publication.title}
              venue={publication.venue}
              year={publication.year}
              url={publication.url}
            />
          )
        }

      </section>
    </main>
  )
}

export default App