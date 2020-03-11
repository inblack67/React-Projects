import React from 'react'

const RepoItem = ({ repo }) => {

  return (

    <li className="collection-item">
      <a href={repo.html_url}>
        { repo.name }
      </a>
    </li>
  )
}

export default RepoItem
