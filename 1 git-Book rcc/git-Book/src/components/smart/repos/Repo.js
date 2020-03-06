import React from 'react'
import RepoItem from './RepoItem'

const Repo = ({ repos }) => {
  return (
    <ul className="collection">
      { repos.map(repo => <RepoItem repo={repo} key={repo.id}/>) }
    </ul>
  )
}

export default Repo
