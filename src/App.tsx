import { useState } from 'react'
import './App.css'
import ProjectCard from './ProjectCard'
import PublicationCard from './PublicationCard'
import ExhibitionCard from './ExhibitionCard'



function App() {
  const [showPublications, setShowPublications] = useState(true)
  const [showProjects, setShowProjects] = useState(true)
  const [showExhibitions, setShowExhibitions] = useState(true)

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
    },

    {
      id: "anime",
      title: "Anthropomorphic design | collage animation",
      year: "2024",
      description: "An attempt to present research in a pop style using collage animation.",
      url: "https://www.youtube.com/watch?v=ej5M6IG2eCo"
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
    },

    {
      id: "7",
      title: "Investigating the Relationship Between Situational Changes and Anthropomorphism in Product Design – Focusing on Lighting Fixture Design –",
      venue: "第27回日本感性工学会大会",
      year: "2025",
      url: "https://www.jstage.jst.go.jp/article/jskeproceedings/3.1/0/3.1_419/_article/-char/ja"
    }
  ]

  const exhibitions = [
    {
      id: "humanlikeness-exhibition-2025",
      title: "デザインにおける人間らしさ展",
      year: "2025",
      date: "November 26–27, 2025",
      venue: "Future University Hakodate 3F Museum",
      description: "A solo exhibition presenting research and design works related to human-likeness in design, developed from undergraduate to master's studies.",
      images: [
        "/website/exhibitions/humanlikeness-2025-1.png"
      ]
    }
  ]

  const links = [
    {
      id: "orcid",
      name: "ORCID",
      url: "https://orcid.org/0009-0005-2363-2515"
    },

    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/tanaharu-droid"
    }
  ]

  return (
    <main>

      <nav className="nav-bar">
        <a href="#profile">Profile</a>
        <a href="#projects">Projects</a>
        <a href="#publications">Publications</a>
        <a href="#exhibitions">Exhibitions</a>
      </nav>

      <section id="hero" className="hero">
        <div>
          <h1>
            Haruki Tanaka
          </h1>

          <p>
            Design × Anthropomorphism
          </p>
        </div>

        <img
          src="/website/profile.png"
          alt="Portrait of Haruki Tanaka"
          className="profile-image"
        />

      </section>

      <section id="profile">
        <h2>
          Profile
        </h2>

        <p>
          Doctoral student (first year)  <br />
          Future University Hakodate
        </p>

        <p>
          I study how people perceive human-likeness in artificial objects,
          focusing on anthropomorphism, situation, and Kansei evaluation.
        </p>

        <h3>
          Links
        </h3>

        <ul className="link-list">
          {
            links.map((link) =>
              <li key={link.id}>
                <a href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                </a>
              </li>
            )
          }
        </ul>

        <h3>
          Research Interests
        </h3>

        <ul>
          <li>Anthropomorphism</li>
          <li>Human-likeness in Design</li>
          <li>Kansei Design</li>
          <li>Cognitive Science</li>
        </ul>
      </section>

      <section id="projects">
        <h2>
          Projects
        </h2>

        <button
          className="toggle-button"
          onClick={() => setShowProjects(!showProjects)}>
          {showProjects ? "Hide Projects" : "Show Projects"}
        </button>

        <div className={showProjects ? "project-list open" : "project-list closed"}>

          {
            [...projects]
              .sort((a, b) => Number(b.year) - Number(a.year))
              .map((project) =>
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  year={project.year}
                  description={project.description}
                  url={project.url}
                />
              )
          }
        </div>
      </section>

      <section id="publications">
        <h2>
          Publications
        </h2>

        <button
          className="toggle-button"
          onClick={() => setShowPublications(!showPublications)}>
          {showPublications ? "Hide Publications" : "Show Publications"}
        </button>

        <div className={showPublications ? "publication-list open" : "publication-list closed"}>
          {
            [...publications]
              .sort((a, b) => Number(b.year) - Number(a.year))
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
        </div>
      </section>

      <section id="exhibitions">
        <h2>
          Exhibitions
        </h2>

        <button
          className="toggle-button"
          onClick={() => setShowExhibitions(!showExhibitions)}>
          {showExhibitions ? "Hide Exhibitions" : "Show Exhibitions"}
        </button>

        <div className={showExhibitions ? "exhibition-list open" : "exhibition-list closed"}>
          {
            [...exhibitions]
              .sort((a, b) => Number(b.year) - Number(a.year))
              .map((exhibition) =>
                <ExhibitionCard
                  key={exhibition.id}
                  title={exhibition.title}
                  year={exhibition.year}
                  date={exhibition.date}
                  venue={exhibition.venue}
                  description={exhibition.description}
                  images={exhibition.images}
                />
              )
          }
        </div>
      </section>

      <nav className="nav-bar">
        <a href="#">Top</a>
      </nav>

    </main >
  )
}

export default App