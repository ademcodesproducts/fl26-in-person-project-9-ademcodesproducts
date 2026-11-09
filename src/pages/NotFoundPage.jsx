import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="error-page">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/" className="btn btn-primary">Return home</Link>
    </div>
  )
}

export default NotFoundPage
