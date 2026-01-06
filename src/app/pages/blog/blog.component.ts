import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  posts: BlogPost[] = [
    {
      id: 1,
      title: 'Tendências de Moda Festa 2024',
      excerpt: 'Conheça as principais tendências em vestidos de festa para 2024.',
      content: 'As tendências de moda festa para 2024 trazem cores vibrantes, cortes modernos e detalhes sofisticados...',
      image: 'https://images.unsplash.com/photo-1595777707802-41d339d29c91?w=400&h=300&fit=crop',
      date: '15 de Novembro, 2024',
      category: 'Tendências',
      author: 'Ateliê Vestir de Luz'
    },
    {
      id: 2,
      title: 'Como Cuidar de Tecidos Finos',
      excerpt: 'Dicas essenciais para manter seus vestidos de tecidos nobres sempre lindos.',
      content: 'Os tecidos finos como seda, tule e cetim requerem cuidados especiais para manter sua beleza...',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      date: '10 de Novembro, 2024',
      category: 'Cuidados',
      author: 'Ateliê Vestir de Luz'
    },
    {
      id: 3,
      title: 'Guia de Etiqueta para Eventos Formais',
      excerpt: 'Aprenda as regras de dress code para diferentes tipos de eventos.',
      content: 'Cada tipo de evento tem suas regras de dress code. Vamos te ajudar a escolher o vestido perfeito...',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
      date: '05 de Novembro, 2024',
      category: 'Etiqueta',
      author: 'Ateliê Vestir de Luz'
    },
    {
      id: 4,
      title: 'A História do Vestido de Noiva',
      excerpt: 'Descubra como o vestido de noiva evoluiu ao longo dos séculos.',
      content: 'O vestido de noiva tem uma história rica e fascinante que remonta a séculos...',
      image: 'https://images.unsplash.com/photo-1612336307429-8a88e8d08dbb?w=400&h=300&fit=crop',
      date: '01 de Novembro, 2024',
      category: 'História',
      author: 'Ateliê Vestir de Luz'
    },
    {
      id: 5,
      title: 'Cores que Combinam com Sua Pele',
      excerpt: 'Descubra quais cores realçam sua beleza natural.',
      content: 'Escolher a cor certa do vestido é fundamental para realçar sua beleza natural...',
      image: 'https://images.unsplash.com/photo-1539008588435-666cafdc613d?w=400&h=300&fit=crop',
      date: '28 de Outubro, 2024',
      category: 'Dicas',
      author: 'Ateliê Vestir de Luz'
    },
    {
      id: 6,
      title: 'Customização de Vestidos: Suas Ideias em Realidade',
      excerpt: 'Saiba como personalizar seu vestido com detalhes únicos.',
      content: 'A customização é uma forma perfeita de tornar seu vestido verdadeiramente único...',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=300&fit=crop',
      date: '25 de Outubro, 2024',
      category: 'Customização',
      author: 'Ateliê Vestir de Luz'
    }
  ];
}
