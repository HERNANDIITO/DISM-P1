import { Component, OnInit } from '@angular/core';
import { Fichaje } from '../interfaces/fichaje';
import { FichajeService } from '../services/fichaje.service';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-fichajes',
  templateUrl: 'fichajes.page.html',
  styleUrls: ['fichajes.page.scss']
})
export class FichajesPage implements OnInit {

  constructor( 
    private fichajeService: FichajeService,
    private usuariosService: UsuarioService
  ) {}

  fichajes?: Fichaje[];
  fichajesFiltrados?: Fichaje[];

  usuarios?: Usuario[];
  usuariosFiltrados?: Usuario[];

  textFilter: string = "";
  maxDate: Date = new Date();
  minDate: Date = new Date("01-01-1900");

  ngOnInit(): void {
    this.fichajeService.getFichajes().subscribe( data => {
      this.fichajes = data;
      this.fichajesFiltrados = data;
    })

    this.usuariosService.getAllUsers().subscribe( data => {
      this.usuarios = data;
      this.usuariosFiltrados = data;
    })
  }

  changeMaxDate(event: any) {
    this.maxDate = new Date(event.detail.value);
    console.log(this.maxDate);
    
    this.search();
  }

  changeMinDate(event: any) {
    this.minDate = new Date(event.detail.value);
    this.search();
  }

  changeTextFilter(event: any) {
    this.textFilter = event.detail.value;
    this.search();
  }

  search() {
    console.log("Search!");
    
    // Nos aseguramos que de los arrays existan
    if ( !(this.fichajes && this.usuarios) ) { return; }
    
    // Inicializacion de constantes
    const userIDs: string[] = [];
    
    // Reset de usuarios
    
    
    // filtramos los usuarios por el valor introducido
    this.usuariosFiltrados = this.usuarios.filter( usu => ( usu.Nombre.includes(this.textFilter) || usu.Usuario.includes(this.textFilter) ) );
    
    // Añadimos las ids a un array de ids
    this.usuariosFiltrados.forEach(user => {
      userIDs.push(user.IdUsuario);
    })
    
    // Filtramos los fichajes dadas las ids que hay en el array anterior
    this.fichajesFiltrados = this.fichajes.filter(fichaje => userIDs.includes(fichaje.IdUsuario));
    
    this.fichajesFiltrados = this.fichajesFiltrados.filter(fichaje => {
      const date = new Date(fichaje.FechaHoraEntrada);
      return date >= this.minDate;
    });

    this.fichajesFiltrados = this.fichajesFiltrados.filter(fichaje => {
      const date = new Date(fichaje.FechaHoraEntrada);
      return date <= this.maxDate;
    });

  }

  filterByDate(event: any) {

  }

}
