import { useState, useEffect } from 'react';
import UserCard from "./components/UserCard";
import Card from "./components/Card";


const App = () => {
  const [timeframe, setTimeframe] = useState(['weekly', 'Last Week']);
  const [data, setData] = useState(null);

  const getData = async() => {
    const res = await fetch('data.json'); 
    setData(await res.json());
  }

  useEffect(() => {
    getData();
  }, []);
  
  const changeTime = (time) => {
    setTimeframe(time);
  }

  if (data) {
    return (
      <main className="main">
        <div className="center">
          <div className="container">
            <UserCard name={'Jeremy Robson'} changeTime={changeTime}/>
            {
              data.map(d => <Card key={d.title} data={d} timeframe={timeframe}/>)
            }
          </div>
        </div>
      </main>
    )
  }
}

export default App;
