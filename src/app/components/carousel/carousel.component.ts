import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  slides = [
    {
      image: 'https://images.unsplash.com/photo-1595777707802-41d339d29c91?w=1200&h=600&fit=crop',
      title: 'Elegância e Sofisticação',
      description: 'Vestidos personalizados para seus momentos especiais'
    },
    {
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1200&h=600&fit=crop',
      title: 'Coleção Exclusiva',
      description: 'Designs únicos feitos especialmente para você'
    },
    {
      image: 'https://images.unsplash.com/photo-1612336307429-8a88e8d08dbb?w=1200&h=600&fit=crop',
      title: 'Qualidade Premium',
      description: 'Tecidos nobres e acabamento impecável'
    },
    {
      image: 'https://images.unsplash.com/photo-1539008588435-666cafdc613d?w=1200&h=600&fit=crop',
      title: 'Seu Estilo, Nossa Criação',
      description: 'Transformamos seus sonhos em realidade'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
      title: 'Perfeição em Cada Detalhe',
      description: 'Costura artesanal de alta qualidade'
    }
  ];

  autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetAutoSlide();
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  resetAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    this.startAutoSlide();
  }
}
