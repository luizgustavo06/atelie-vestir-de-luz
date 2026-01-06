import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from '../../components/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule,CarouselComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    {
      icon: '✨',
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único. Criamos vestidos sob medida para você.'
    },
    {
      icon: '🧵',
      title: 'Tecidos Nobres',
      description: 'Utilizamos os melhores tecidos importados e nacionais.'
    },
    {
      icon: '👗',
      title: 'Design Exclusivo',
      description: 'Designs originais criados especialmente para você.'
    },
    {
      icon: '⏱️',
      title: 'Prazo Garantido',
      description: 'Entrega dentro do prazo combinado com qualidade.'
    }
  ];

  collections = [
    {
      name: 'Noivas',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop',
      description: 'Vestidos de noiva elegantes e sofisticados'
    },
    {
      name: 'Madrinhas',
      image: 'https://images.unsplash.com/photo-1595777707802-41d339d29c91?w=400&h=500&fit=crop',
      description: 'Peças perfeitas para as madrinhas'
    },
    {
      name: 'Formandas',
      image: 'https://images.unsplash.com/photo-1612336307429-8a88e8d08dbb?w=400&h=500&fit=crop',
      description: 'Vestidos para sua formatura especial'
    },
    {
      name: 'Festa',
      image: 'https://images.unsplash.com/photo-1539008588435-666cafdc613d?w=400&h=500&fit=crop',
      description: 'Peças para seus eventos especiais'
    }
  ];
}
