const ProjectList = ({ projects }: any) => {
    return (
      <div>
        {projects.map((item: any) => {
          return (
            <div key={item.title}>
              <img src={item.image} alt="" width={200} />
              <h3>{item.title}</h3>
              <p>{item.shortDescription}</p>
              <a href={item.github}>Github</a>
              <a href={item.live}>Live</a>
            </div>
          )
        })}
      </div>
    )
  }
  
  export default ProjectList