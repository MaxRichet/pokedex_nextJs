export default async function Home() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const posts = await data.json();
  for(let i: number = 0; i < posts.results.length; i++){
    
  }
  return (
    <ul>
      {posts.results.map((post: any) => (
        <li key={post.name}>{post.name}</li>
      ))}
    </ul>
  )
}
