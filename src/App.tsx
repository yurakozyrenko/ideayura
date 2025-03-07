export const App = () => {
  const ideas = [
    { nick: 'cool-idea-yura-1', name: 'Idea 1', description: 'Idea 1 description...' },
    { nick: 'cool-idea-yura-2', name: 'Idea 2', description: 'Idea 2 description...' },
    { nick: 'cool-idea-yura-3', name: 'Idea 3', description: 'Idea 3 description...' },
    { nick: 'cool-idea-yura-4', name: 'Idea 4', description: 'Idea 4 description...' },
    { nick: 'cool-idea-yura-5', name: 'Idea 5', description: 'Idea 5 description...' },
  ]

  return (
    <div>
      <h1>Ideayura</h1>
      {ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        )
      })}
    </div>
  )
}
