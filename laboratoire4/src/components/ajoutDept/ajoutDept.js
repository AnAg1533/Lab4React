import React from 'react';

import axios from 'axios';



class Ajout extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state=
            {
                nom:'',
                superviseur:'',
                code:'',
            }

            this.onChangeNom = this.onChangeNom.bind(this);
            this.onChangeCode = this.onChangeCode.bind(this);
            this.onChangeSuperviseur = this.onChangeSuperviseur.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
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
    onChangeSuperviseur(e)
    {
        this.setState({
            superviseur:e.target.value
        })
    }
    onChangeCode(e)
    {
        this.setState({
            code:e.target.value
        })
    }
    onSubmit(e)
    {
        const Departement = 
        {
            code : this.state.code,
            nom: this.state.nom,
            superviseur: this.state.superviseur,
        }
        console.log(Departement);
        //axios.post('http://localhost:3405/new',Departement)
        //.then(res=>console.log(res.data));

       // this.setState({
         //   code :'',
           // nom:'',
            //superviseur:''
        //})

    }



    render()
    {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                
                <h1>AJOUT DE DEPARTEMENT</h1>
                <div className="form-group">
                    <label>SUPERVISEUR : </label>
                    <input type="text" required className="form-control" value={this.state.superviseur} onChange={this.onChangeSuperviseur}/>
                </div>
                <div className="form-group">
                    <label>DEPARTEMENT : </label>
                    <input type="text" required className="form-control" value={this.state.nom} onChange={this.onChangeNom}/>
                </div>
                <div className="form-group">
                    <label>CODE : </label>
                    <input type="text" required className="form-control" value={this.state.code} onChange={this.onChangeCode}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="AJOUTER DEPARTEMENT" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}


export default Ajout;