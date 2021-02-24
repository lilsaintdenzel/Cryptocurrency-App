import React from 'react';
// import  './pagination.css';

const Pagination = ({postsPerPage, totalPages, paginate}) => {

    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(totalPages / postsPerPage); i++) {
          pageNumbers.push(i);
    }

    return(
        
          <div className="pagination">
              {pageNumbers.map(number => (
                  
                      <a onClick={() => paginate(number)} href="#" className="page-link">
                          {number + 1}
                      </a>
                  
              ))}

            </div>
          
        
    )
}

export default Pagination;
