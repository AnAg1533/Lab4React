import React from 'react';
import {Link} from 'react-router-dom';
class GenListe extends React.Component
{   

    render()
    {
        return (
                <tr>
                    <td>{this.props.Student.code}</td>
                    <td>{this.props.Student.prenom}</td>
                    <td>{this.props.Student.nom}</td>
                    <td><a href="#" onClick={()=>{this.props.deleteUtil(this.props.utulisateur._id)}}>SUPPRIMER</a></td>||
                    <td><Link to={"/edit/" + this.props.Student._id}>Edition</Link></td>
                </tr>
            )
    } 
}

export default GenListe;