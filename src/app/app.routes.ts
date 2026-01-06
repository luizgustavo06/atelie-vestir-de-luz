import { Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { SobreComponent } from './pages/sobre-nos/sobre.component';
import { DepoimentosComponent } from './pages/depoimentos/depoimentos.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { AtendimentoComponent } from './pages/atendimento/atendimento.component';
import { HomeComponent } from './pages/pagina-principal/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'atendimento', component: AtendimentoComponent },
  { path: 'depoimentos', component: DepoimentosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', redirectTo: '' }
];
