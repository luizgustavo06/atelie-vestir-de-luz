import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {


    constructor(private route: Router) {}
  currentSlide = 0;
  slides = [
    {
      image: 'assets/vestidos/banner-elegancia-sofisticação-novo.png',
      title: 'Elegância e Sofisticação',
      description: 'Vestidos personalizados para seus momentos especiais'
    },
    // {
    //   image: 'assets/vestidos/vestido-vermelho.png',
    //   title: 'Coleção Exclusiva',
    //   description: 'Designs únicos feitos especialmente para você'
    // },
    {
      image: 'assets/vestidos/banner-qualidade-premium.png',
      title: 'Qualidade Premium',
      description: 'Tecidos nobres e acabamento impecável'
    },
    {
      image: 'assets/vestidos/banner-seu-estilo-nossa-criação.png',
      title: 'Seu Estilo, Nossa Criação',
      description: 'Transformamos seus sonhos em realidade'
    },
    {
      image: 'assets/vestidos/banner-perfeição-em-cada-detalhe.png',
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

  redireciona(e:any){
    this.route.navigateByUrl('/catalogo');
  }
}
