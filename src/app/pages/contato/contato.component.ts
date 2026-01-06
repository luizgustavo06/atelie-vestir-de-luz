import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  contactInfo = {
    phone: '(11)99652-0776',
    email: 'contato@atelievelstirdeluz.com',
    address: 'Itapevi,SP',
    hours: 'Segunda a Sábado: 10h às 18h'
  };

  openWhatsApp(): void {
    const phone = '5511996520776';
    const message = 'Olá! Gostaria de entrar em contato com o Ateliê Vestir de Luz.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  sendEmail(): void {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }
}
