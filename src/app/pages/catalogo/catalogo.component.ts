import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalhesComponent } from '../../components/detalhes/detalhes.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, DetalhesComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent implements OnInit {
  selectedDress: any = null;
  isLoading: boolean = true;

  // Lista de vestidos baseada nos seus arquivos reais
  dresses: any[] = [
    {
      id: 1,
      name: 'Noiva Clássica',
      image: 'assets/vestidos/noiva-estilo.png',
      color: 'Branco',
      occasion: 'Casamento',
      size: 'P-GG',
      style: 'Clássico',
      material: 'Tule e Cetim',
      description: 'Vestido de noiva elegante com detalhes em renda e acabamento artesanal.',
      price: 'Sob Consulta'
    },
    {
      id: 2,
      name: 'Serenata Azul',
      image: 'assets/vestidos/teste-azul.png',
      color: 'Azul Marinho',
      occasion: 'Festa',
      size: 'M',
      style: 'Elegante',
      material: 'Seda Italiana',
      description: 'Vestido longo azul profundo para eventos noturnos e galas.',
      price: 'Sob Consulta'
    },
    {
      id: 3,
      name: 'Paixão Carmesim',
      image: 'assets/vestidos/vestido-vermelho.png',
      color: 'Vermelho',
      occasion: 'Formatura',
      size: 'G',
      style: 'Glamour',
      material: 'Zibeline',
      description: 'Design impactante e moderno para noites inesquecíveis.',
      price: 'Sob Consulta'
    }
  ];

  filteredDresses: any[] = [];
  selectedColor: string = '';
  selectedOccasion: string = '';
  selectedSize: string = '';
  selectedStyle: string = '';

  colors = ['Branco', 'Rosa', 'Azul Marinho', 'Vermelho', 'Dourado'];
  occasions = ['Casamento', 'Formatura', 'Festa'];
  sizes = ['P', 'M', 'G', 'GG'];
  styles = ['Clássico', 'Moderno', 'Elegante', 'Glamour'];

  ngOnInit(): void {
    // Simula carregamento de 1.5s para exibir o Skeleton Screen
    setTimeout(() => {
      this.applyFilters();
      this.isLoading = false;
    }, 1500);
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
}