import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  _url ='';
  url='/api';
  //_url = 'http://127.0.0.1/tutoriales/laravel/api/public/api/persona'
  constructor(private http: HttpClient) {
    
   }

   getPokemones(valor:number){
    this._url = 'https://pokeapi.co/api/v2/pokemon/'
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get(this._url+valor,{headers: header });
   }

   //get equipos
  getEquipos()
  {
    console.log(this.url)
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.get(this.url ,{headers: header });
  }




  //agregar equipo
  addEquipo(equipo:Pokemon)
  {
    console.log(equipo)
    
    return this.http.post(this.url, equipo);

    //return this.http.post(this.url, equipo);
  }


}

export interface Pokemon{
  id?:string;
  name?:string;
  img?:string;
  hp?:string;
  experiencia?:string;
  ataque?:string;
  defensa?:string;
  especial?:string;
}
