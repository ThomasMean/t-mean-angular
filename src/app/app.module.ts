import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { WorkHistoryJobComponent } from './components/work-history/work-history-job/work-history-job.component';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { RepositoryViewComponent } from './components/repository-list/repository-view/repository-view.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationHistoryComponent } from './components/education-history/education-history.component';
import { EducationHistoryItemComponent } from './components/education-history/education-history-item/education-history-item.component';
import { HistoryComponent } from './components/history/history.component';
import { IntroComponent } from './components/intro/intro.component';
import { ReferencesComponent } from './components/references/references.component';
import { ReferenceItemComponent } from './components/references/reference-item/reference-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    WorkHistoryComponent,
    WorkHistoryJobComponent,
    RepositoryListComponent,
    RepositoryViewComponent,
    EducationHistoryComponent,
    EducationHistoryItemComponent,
    HistoryComponent,
    IntroComponent,
    ReferencesComponent,
    ReferenceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}