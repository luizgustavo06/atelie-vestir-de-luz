import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent {
  constructor(private route: Router) {}
  testimonials: Testimonial[] = [
    {
      name: 'Ana Silva',
      role: 'Noiva',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'O vestido foi exatamente como sonhei! A equipe do Ateliê Vestir de Luz foi incrivelmente atenciosa e criativa. Recomendo para todas as noivas!',
      rating: 5
    },
    {
      name: 'Mariana Costa',
      role: 'Madrinha',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      text: 'Fiz meu vestido de madrinha lá e ficou perfeito! O ajuste foi impecável e o atendimento muito profissional. Voltaria com certeza!',
      rating: 5
    },
    {
      name: 'Juliana Oliveira',
      role: 'Formanda',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      text: 'Meu vestido de formatura foi um sucesso! Todos comentaram como ficou lindo. Obrigada Ateliê Vestir de Luz!',
      rating: 5
    },
    {
      name: 'Beatriz Santos',
      role: 'Noiva',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      text: 'Adorei trabalhar com vocês! O processo foi tranquilo, os prazos foram respeitados e o resultado superou minhas expectativas.',
      rating: 5
    },
    {
      name: 'Carolina Mendes',
      role: 'Daminha',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babfca?w=150&h=150&fit=crop',
      text: 'O vestido da minha filha ficou lindo! Ela se sentiu como uma princesa. Muito obrigada pela dedicação!',
      rating: 5
    },
    {
      name: 'Fernanda Rocha',
      role: 'Festa',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      text: 'Vestido perfeito para meu evento! A criatividade da equipe e a qualidade dos tecidos são incomparáveis. Recomendo!',
      rating: 5
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  enviaAtendimento(){
    this.route.navigate(['/atendimento']);
  }
}
