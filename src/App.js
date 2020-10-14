import React, {useState} from 'react';
import './css/App.css';
import Article from "./components/Article";
import AddArticleForm from "./components/AddArticleForm";

function App() {
    const  [articleList, setArticleList] = useState([]);
    function addToArticleList(data){
        let newList =[...articleList, data];
        setArticleList(newList);
    }


  return (
    <div className="App">
        <AddArticleForm onAddArticleForm={addToArticleList}/>
        {articleList.map(art=><Article data={art} key={art.key}/>)}
    </div>
  );
}

export default App;
