import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Dress {
  id: number;
  name: string;
  image: string;
  color: string;
  occasion: string;
  size: string;
  style: string;
  material: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {
  dresses: Dress[] = [
    {
      id: 1,
      name: 'Noiva Clássica',
      image: 'assets/vestidos/noiva-estilo.png',
      color: 'Branco',
      occasion: 'Casamento',
      size: 'P-GG',
      style: 'Clássico',
      material: 'Tule e Cetim',
      description: 'Vestido de noiva elegante com detalhes em renda.',
      price: 'Sob Consulta'
    },
  ];

  filteredDresses: Dress[] = [];

  // Filtros
  selectedColor: string = '';
  selectedOccasion: string = '';
  selectedSize: string = '';
  selectedStyle: string = '';

  colors = ['Branco', 'Rosa', 'Azul Marinho', 'Dourado', 'Rosa Claro'];
  occasions = ['Casamento', 'Formatura', 'Festa'];
  sizes = ['P', 'M', 'G', 'GG', 'P-GG'];
  styles = ['Clássico', 'Moderno', 'Elegante', 'Glamour', 'Infantil'];

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredDresses = this.dresses.filter(dress => {
      return (
        (this.selectedColor === '' || dress.color === this.selectedColor) &&
        (this.selectedOccasion === '' || dress.occasion === this.selectedOccasion) &&
        (this.selectedSize === '' || dress.size.includes(this.selectedSize)) &&
        (this.selectedStyle === '' || dress.style === this.selectedStyle)
      );
    });
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  resetFilters(): void {
    this.selectedColor = '';
    this.selectedOccasion = '';
    this.selectedSize = '';
    this.selectedStyle = '';
    this.applyFilters();
  }
  solicitaOrcamento(){
    window.location.href = '/atendimento';
  }
}
