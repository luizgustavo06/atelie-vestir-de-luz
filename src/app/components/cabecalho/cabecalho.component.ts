import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss',
})
export class cabecalhoComponent implements OnInit, OnDestroy {
  constructor() {}
  ngOnDestroy(): void {
    // Cleanup logic here if needed
  }

  ngOnInit(): void {
    // Código de inicialização, se necessário
  }
}
