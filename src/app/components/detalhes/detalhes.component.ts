import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss'
})
export class DetalhesComponent {
  @Input() dress: any; 
  @Output() close = new EventEmitter<void>(); 

 
  get whatsappLink(): string {
    const telefone = "5511996520776"; 
    
   
    const texto = `Olá! Gostaria de um orçamento para o vestido: *${this.dress.name}*.%0ACor: ${this.dress.color}%0AEstilo: ${this.dress.style}`;
    
    return `https://wa.me/${telefone}?text=${texto}`;
  }

  fechar() {
    this.close.emit();
  }

  stopProp(event: Event) {
    event.stopPropagation();
  }
}