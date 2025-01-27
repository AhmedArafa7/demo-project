import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProtofolioComponenComponent } from './protofolio-componen/protofolio-componen.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home' , pathMatch: 'full'},
    { path: 'home', component: HomeComponent , title: 'home' },
    { path: 'about', component: AboutComponent , title: 'about' },
    { path: 'protofolio', component: ProtofolioComponenComponent , title: 'protofolio' },
    { path: 'contact', component: ContactComponent , title: 'contact' },
    {path: '**' , component: NotfoundComponent , title: 'Notfound' }
];
