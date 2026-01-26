import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-atendimento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atendimento.component.html',
  styleUrl: './atendimento.component.scss'
})
export class AtendimentoComponent {

  contactInfo = {
    phone: '(11)99652-0776',
    email: 'atelievestirdeluz@gmail.com.br',
    address: 'Itapevi,SP',
    hours: 'Segunda a Sábado: 10h às 18h'
  };  
  // Dados do formulário
  formData = {
    name: '',
    email: '',
    phone: '',
    occasion: '',
    date: '',
    message: ''
  };

  occasions = [
    'Casamento',
    'Formatura',
    'Festa',
    'Daminha',
    'Madrinha',
    'Outro'
  ];

  isLoading = false;      
  submitted = false;      
  errorMessage = '';     

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.isFormValid()) {
      this.isLoading = true;
      this.errorMessage = '';

      const apiUrl = 'http://atelievestirdeluz/send-email';

      this.http.post(apiUrl, this.formData).subscribe({
        next: (response) => {
          console.log('Sucesso:', response);
          this.isLoading = false;
          this.submitted = true;
          setTimeout(() => {
            this.resetForm();
          }, 5000);
        },
        error: (error) => {
          console.error('Erro:', error);
          this.isLoading = false;
          this.errorMessage = 'Houve um erro ao enviar sua solicitação. Tente novamente mais tarde ou chame no WhatsApp.';
        }
      });
    }
  }

  isFormValid(): boolean {
    return this.formData.name.trim() !== '' &&
           this.formData.email.trim() !== '' &&
           this.formData.phone.trim() !== '' &&
           this.formData.occasion !== '' &&
           this.formData.date !== '';
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      occasion: '',
      date: '',
      message: ''
    };
    this.submitted = false;
    this.errorMessage = '';
    this.isLoading = false;
  }

  openWhatsApp(): void {
    const phone = '5511996520776';
    const message = 'Olá! Gostaria de agendar um atendimento personalizado para criar meu produto.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}