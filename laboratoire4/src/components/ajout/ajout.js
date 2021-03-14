import React from 'react';

import axios from 'axios';

import './ajout.css'

import DepList from '../depList/deplist'

class Ajout extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                nom:'',
                prenom:'',
                code:'',
                departement:''
            }

            this.onChangeNom = this.onChangeNom.bind(this);
            this.onChangePrenom = this.onChangePrenom.bind(this);
            this.onChangeCode = this.onChangeCode.bind(this);
            this.onChangeDepartement = this.onChangeDepartement.bind(this);
        }
    }
    componentDidMount()
    {
        
    }
    onChangeNom(e)
    {
        this.setState({
            nom:e.target.value
        })
    }
    onChangePrenom(e)
    {
        this.setState({
            nom:e.target.value
        })
    }
    onChangeCode(e)
    {
        this.setState({
            code:e.target.value
        })
    }
    onChangeDepartement(e)
    {
        this.setState({
            departement:e.target.value
        })
    }


    onSubmit(e)
    {
        const Student = 
        {
            code : this.state.code,
            nom: this.state.nom,
            prenom: this.state.prenom,
            departement:this.state.departement
        }
        console.log(Student);


        axios.post('http://localhost:3405/new',Student)
        .then(res=>console.log(res.data));

        this.setState({
            code :'',
            nom:'',
            prenom:'',
            code:''
        })

    }



    render()
    {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                
                <div className="form-group">
                <h1>AJOUTER ETUDIANT</h1>
                    <label>--Choisir ici-- </label>
                
                </div>
                <DepList/>
                <div className="form-group">
                    <label>Nom : </label>
                    <input type="text" required className="form-control" value={this.state.nom} onChange={this.onChangeNom}/>
                </div>
                <div className="form-group">
                    <label>Prenom : </label>
                    <input type="text" required className="form-control" value={this.state.prenom} onChange={this.onChangePrenom}/>
                </div>
                <div className="form-group">
                    <label>Code : </label>
                    <input type="text" required className="form-control" value={this.state.code} onChange={this.onChangeCode}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="AJOUT" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}


export default Ajout;