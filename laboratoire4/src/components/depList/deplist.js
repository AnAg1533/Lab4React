import React from 'react';
import axios from 'axios';

class DepListe extends React.Component
{
    render()
    {
        return(
            <select className="form-control " aria-label="Default select example">
                    <option selected>Departement</option>
                    <option value="1">Informatique</option>
                    <option value="2">Reseaux</option>
                    <option value="3">Arts appliques</option>
                </select>
        )
    }
}

export default DepListe;