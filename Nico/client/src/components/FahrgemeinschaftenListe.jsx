import React from 'react'

const FahrgemeinschaftenListe = () => {
  return (
    <div className='list-group'>
        <table className="table table-hover table-dark"></table>
        <thead>
        <tr className="bg-primary">
            <th scope="col">Abfahrtsort</th>
            <th scope="col">Abfahrtszeit</th>
            <th scope="col">Buchen</th>
        </tr>
        </thead>
        <tbody>
           <tr>
                <td>Neuhausen</td>
                <td>Neuhausen</td>
                <td><button className="btn btn-warning">Buchen</button></td>
            </tr> 
        </tbody>
      
    </div>
  )
}

export default FahrgemeinschaftenListe
