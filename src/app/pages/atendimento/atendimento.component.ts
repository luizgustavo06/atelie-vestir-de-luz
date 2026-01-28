import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-atendimento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [DatePipe],
  templateUrl: './atendimento.component.html',
  styleUrl: './atendimento.component.scss'
})
export class AtendimentoComponent {

  contactInfo = {
    phone: '(11) 99652-0776',
    email: 'atelievestirdeluz@gmail.com.br',
    address: 'Itapevi, SP',
    hours: 'Segunda a Sábado: 10h às 18h'
  };

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

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe 
  ) {}

  onSubmit(): void {
    if (this.isFormValid()) {
      this.isLoading = true;
      this.errorMessage = '';

      this.enviarParaWhatsApp();

      const apiUrl = 'http://atelievestirdeluz/send-email'; 

      this.http.post(apiUrl, this.formData).subscribe({
        next: (response) => {
          console.log('Email enviado com sucesso:', response);
          this.finalizarEnvio();
        },
        error: (error) => {
          console.error('Erro no envio de email:', error);
          this.finalizarEnvio(); 
        }
      });
    }
  }

  enviarParaWhatsApp(): void {
    const numeroDestino = '5511996520776';
    const dataFormatada = this.datePipe.transform(this.formData.date, 'dd/MM/yyyy');

    const texto = `*Olá! Gostaria de realizar um agendamento.*%0A%0A` +
                  `*Nome:* ${this.formData.name}%0A` +
                  `*Email:* ${this.formData.email}%0A` +
                  `*Telefone:* ${this.formData.phone}%0A` +
                  `*Ocasião:* ${this.formData.occasion}%0A` +
                  `*Data:* ${dataFormatada}%0A` + 
                  `*Mensagem:* ${this.formData.message || 'Sem observações'}`;

    const url = `https://wa.me/${numeroDestino}?text=${texto}`;
    window.open(url, '_blank');
  }

  finalizarEnvio(): void {
    this.isLoading = false;
    this.submitted = true;
    setTimeout(() => {
      this.resetForm();
    }, 5000);
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
    const message = 'Olá! Gostaria de tirar uma dúvida sobre o ateliê.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}