import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatMenuModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { WorkHistoryJobComponent } from './components/work-history/work-history-job/work-history-job.component';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { RepositoryViewComponent } from './components/repository-list/repository-view/repository-view.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationHistoryComponent } from './components/education-history/education-history.component';
import { EducationHistoryItemComponent } from './components/education-history/education-history-item/education-history-item.component';
import { IntroComponent } from './components/intro/intro.component';
import { ReferencesComponent } from './components/references/references.component';
import { ReferenceItemComponent } from './components/references/reference-item/reference-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkHistoryComponent,
    WorkHistoryJobComponent,
    RepositoryListComponent,
    RepositoryViewComponent,
    EducationHistoryComponent,
    EducationHistoryItemComponent,
    IntroComponent,
    ReferencesComponent,
    ReferenceItemComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
