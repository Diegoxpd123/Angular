import { Component } from '@angular/core';
import {  Pokemon, PokemonesService } from './services/pokemones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemones';
  public pokemones: Array<any> = [];
  public isataque =1;
  public isimg =1;
  public isname =1;
  public ishp =1;
  public isexperiencia =1;
  public isdefensa =1;
  public isespecial =1;

  


  constructor(
    private pokemonService: PokemonesService
  ){
    console.log("aca si")
    this.pokemonService.getEquipos().subscribe((res: any)=>
    {console.log(res)

    })
    for(let i = 1 ; i < 151 ; i++){
    this.pokemonService.getPokemones(i).subscribe((resp: any)=>
    {
      let equipo: Pokemon ={
        id:'',
        name:'',
        img:'',
        hp:'',
        experiencia:'',
        ataque:'',
        defensa:'',
        especial:''
      };
      let pokemon: any =[]
      pokemon.id=resp.id
      pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${resp.id}.png`
      pokemon.name =resp.name
      pokemon.hp = resp.stats[0].base_stat
      pokemon.experiencia= resp.base_experience
      pokemon.ataque = resp.stats[1].base_stat
      pokemon.defensa = resp.stats[2].base_stat
      pokemon.especial = resp.stats[3].base_stat
      equipo.id=resp.id
      equipo.name =resp.name
      equipo.img =pokemon.img
      equipo.hp = resp.stats[0].base_stat
      equipo.experiencia= resp.base_experience
      equipo.ataque = resp.stats[1].base_stat
      equipo.defensa = resp.stats[2].base_stat
      equipo.especial = resp.stats[3].base_stat
      //console.log(equipo)
      this.pokemones.push(pokemon)
      this.pokemonService.addEquipo(equipo).subscribe();
    })
    
   
  }
  }


  ngOnInit(): void {
  }


    


  /**
   * name
   */
  public OcultarButtonImg() {
    this.isimg=this.isimg*-1;
    
  }

  public OcultarButtonName() {
    this.isname=this.isname*-1;
    
  }

  public OcultarButtonHp() {
    this.ishp=this.ishp*-1;
    
  }
  public OcultarButtonExp() {
    this.isexperiencia=this.isexperiencia*-1;
    
  }

  public OcultarButtonAtaque() {
    this.isataque=this.isataque*-1;
    
  }

  public OcultarButtonDefensa() {
    this.isdefensa=this.isdefensa*-1;
    
  }

  public OcultarButtonEspecial() {
    this.isespecial=this.isespecial*-1;
    
  }
  


}
