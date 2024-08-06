import React,{memo} from 'react';

const Home = memo(() => {
    const arry=[]
    for(let i=0;i<1000;i++){
        arry.push(i)
    }
    return (
        <div>
            <h1>Home</h1>
           
          {
           arry.map((item,index)=>{
               return <div key={index}>{item}</div>
           })
          }
        </div>
    )
})

export default Home;    