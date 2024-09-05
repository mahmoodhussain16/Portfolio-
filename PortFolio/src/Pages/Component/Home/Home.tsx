import ProjectList from "../../../Components/projectlist"

const projects = [
    {
      title: 'Count down timer',
      shortDescription: 'this is my first project',
      image: 'https://images.unsplash.com/photo-1725511925243-ac4f330ddcfb?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'link',
      liveLink: 'link',
    },
    {
      title: 'project 2',
      shortDescription: 'this is my 4th project',
      image: 'https://images.unsplash.com/photo-1725511925243-ac4f330ddcfb?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'link',
      liveLink: 'link',
    },
    {
      title: 'project 3',
      shortDescription: 'this is my third project',
      image: 'https://images.unsplash.com/photo-1725511925243-ac4f330ddcfb?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'link',
      liveLink: 'link',
    },
  ]


const Home =()=>{
return (
    <div>
        <h1>hello</h1>
        <ProjectList projects={projects}/>
    </div>
)
}
export default Home