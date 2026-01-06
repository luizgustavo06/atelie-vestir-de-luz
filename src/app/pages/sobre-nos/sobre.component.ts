import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  diferenciais = [
    {
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único e merece atenção especial. Ouvimos suas ideias e transformamos em realidade.'
    },
    {
      title: 'Tecidos Nobres',
      description: 'Utilizamos apenas os melhores tecidos importados e nacionais para garantir qualidade e conforto.'
    },
    {
      title: 'Costura Artesanal',
      description: 'Cada vestido é feito à mão com precisão e cuidado, garantindo acabamento impecável.'
    },
    {
      title: 'Prazos Garantidos',
      description: 'Respeitamos os prazos combinados sem comprometer a qualidade do trabalho.'
    },
    {
      title: 'Design Exclusivo',
      description: 'Criamos designs originais e exclusivos que refletem sua personalidade e estilo.'
    },
    {
      title: 'Ajustes Inclusos',
      description: 'Incluímos ajustes e alterações para garantir o ajuste perfeito.'
    }
  ];
}
