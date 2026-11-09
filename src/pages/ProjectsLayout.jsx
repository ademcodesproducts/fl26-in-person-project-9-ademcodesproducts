import { Outlet } from 'react-router-dom'

function ProjectsLayout() {
  return (
    <section>
      <h1>Projects</h1>
      <Outlet />
    </section>
  )
}

export default ProjectsLayout
