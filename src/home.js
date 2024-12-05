import  { useState } from 'react';

const Home = () => {

   const [tasks, setTacks] = useState([
        {task: "Prepare Food", id: 1},
        {task: "Learn", id: 2},
        {task: "Sleep", id: 3},
        {task: "Play", id: 4}
   ]);

    return ( 
        <div className="home">
           {tasks.map((ab) => (
            <div className='task-preview' key={tasks.id}>
                <h2>{ blog.title }</h2>
            </div>

           ))}
        </div>
     );
}
 
export default Home;