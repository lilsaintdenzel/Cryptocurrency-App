import React, {useState, useEffect} from 'react'
import Coin from './components/Coin/Coin';
import Pagination from './components/pagination/pagination';
import './App.css';





const App = () => {
  
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setsPostsPerPage] = useState(10);

  useEffect(() => {
	setLoading(true);
	fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false"
		)
		.then(res => {return res.json()})
		.then(response => {
			console.log(response)
			setCoins(response);
			setLoading(false)
			
		})
		.catch(err => {
			console.error(err);
		});

		},[])

  const handleOnChange = (e) => {
	  setSearch(e.target.value)
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = coins.slice(indexOfFirstPost, indexOfLastPost);

  const filteredCoins = currentPosts.filter(coin  => 
	coin.name.toLowerCase().includes(search.toLowerCase()));


 const paginate = pageNumbers => setCurrentPage(pageNumbers)

  return (
     <div className="coin-app">
        <div className="coin-search">
           <h1 className="coin-text">Search a Cryptocurrency</h1>
		   <form>
			   <input
			    type="text"
               	onChange = {handleOnChange}			
			    placeolder="search"
			    className="coin-input" />
		   </form>
		</div>
      {filteredCoins.map(coin => {
		  return (
			<div>
			  <Coin 
			 
			  key={coin.id} 
			  name={coin.name} 
			  image={coin.image}
			  symbol={coin.symbol}
			  marketcap={coin.market_cap}
			  price={coin.current_price}
			  priceChange={(typeof(coin.price_change_percentage_24h) === 'number') ?
			   coin.price_change_percentage_24h.toFixed(2)
			   :
			   coin.price_change_percentage_24h
			  }
			volume={coin.total_volume}
			  />
		
         
		</div>
		  )
	  })}
		   
	  <Pagination 
			postsPerPage={postsPerPage} 
			totalPages={coins.length}
		    paginate={paginate}
			/>
	 </div>
  );
}


export default App;
