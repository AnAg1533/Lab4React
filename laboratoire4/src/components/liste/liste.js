import React from 'react';
//import genListe apres l'avoire cree
import axios from 'axios';
import GenListe from '../genliste/genliste'

class Liste extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Students:[],
            Depts:[]
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:3405/liste')
        .then(response=>
            {
                console.log(response.data);
                if(response.data.length>0)
                {
                    this.setState({
                        Students:response.data
                    })
                }
            })
            axios.get('http://localhost:3405/listeDep')
            .then(response=>{
                console.log(response.data);
                if(response.data.length>0)
                {
                    this.setState({
                        Depts:response.data
                    })
                }
            })
        .catch((error)=>
        {
            console.log(error);
        })
    };

    userList()
    {
        return this.state.Students.map(currentStudent=>
            {
                return<GenListe Student={currentStudent}deleteUtil={this.deleteUtil}key={currentStudent._id}/>;
            })
    }

    deleteUtil(id)
    {
        axios.delete('http://localhost:3405/etudiant'+id)
        .then(res=>console.log(res.data));
        this.setState(

            {
                Students:this.state.Students.filter(el=>el._id !==id)
            }
        )
    }


    render()
    {
        return (
            <div className="container">
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Code</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Liste;