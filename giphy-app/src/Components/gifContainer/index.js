import React from "react";
import { Link } from "react-router-dom";

function index({ items,onClickNext,onClickPrev}) {


  return (
    <div className="container bg-white vh-100 py-5" style={{marginBottom:200}}>

			<div className="row">
				{items.map((item) => (
					<div className="col" key={item.id}>
						<Link to={`/display/${item.id}`}>
							<img src={item.images.fixed_height_small.url} />
						</Link>
					</div>
				))}
			</div>
{
  items &&(
    <div className="d-flex mt-5 justify-content-between">
     <button className="bg-dark px-5" style={{color:"white"}} onClick={onClickNext}>Next</button>
      <button className="bg-dark px-5" style={{color:"white"}} onClick={onClickPrev}>Previous</button>
    </div>
    
  )
}
     
		</div>
	);
}

export default index;
