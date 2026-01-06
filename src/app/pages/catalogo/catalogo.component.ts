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
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop',
      color: 'Branco',
      occasion: 'Casamento',
      size: 'P-GG',
      style: 'Clássico',
      material: 'Tule e Cetim',
      description: 'Vestido de noiva elegante com detalhes em renda.',
      price: 'Sob Consulta'
    },
    {
      id: 2,
      name: 'Madrinha Sofisticada',
      image: 'https://images.unsplash.com/photo-1595777707802-41d339d29c91?w=400&h=500&fit=crop',
      color: 'Rosa',
      occasion: 'Casamento',
      size: 'P-GG',
      style: 'Moderno',
      material: 'Crepe',
      description: 'Vestido de madrinha em tons rosados com corte moderno.',
      price: 'Sob Consulta'
    },
    {
      id: 3,
      name: 'Formanda Elegante',
      image: 'https://images.unsplash.com/photo-1612336307429-8a88e8d08dbb?w=400&h=500&fit=crop',
      color: 'Azul Marinho',
      occasion: 'Formatura',
      size: 'P-GG',
      style: 'Elegante',
      material: 'Cetim',
      description: 'Vestido de formatura com acabamento impecável.',
      price: 'Sob Consulta'
    },
    {
      id: 4,
      name: 'Festa Glamourosa',
      image: 'https://images.unsplash.com/photo-1539008588435-666cafdc613d?w=400&h=500&fit=crop',
      color: 'Dourado',
      occasion: 'Festa',
      size: 'P-GG',
      style: 'Glamour',
      material: 'Tule Brilhante',
      description: 'Vestido de festa com brilho e elegância.',
      price: 'Sob Consulta'
    },
    {
      id: 5,
      name: 'Daminha Princesa',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop',
      color: 'Rosa Claro',
      occasion: 'Casamento',
      size: 'P-M',
      style: 'Infantil',
      material: 'Tule',
      description: 'Vestido de daminha com design delicado e encantador.',
      price: 'Sob Consulta'
    },
    {
      id: 6,
      name: 'Noiva Moderna',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=500&fit=crop',
      color: 'Branco',
      occasion: 'Casamento',
      size: 'P-GG',
      style: 'Moderno',
      material: 'Crepe',
      description: 'Vestido de noiva com corte moderno e sofisticado.',
      price: 'Sob Consulta'
    }
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
