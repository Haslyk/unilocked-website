import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedIn } from '@common/auth/logged-in.service';
import { ExploreComponent } from 'src/app/site/explore/explore.component';
import { ProjectsComponent } from 'src/app/site/projects/projects.component';
import { CommunitiesComponent } from './communities/communities.component';
import { CompaniesComponent } from './companies/companies.component';
import { FriendsComponent } from './friends/friends.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { PeopleComponent } from './people/people.component';
import { SavedComponent } from './saved/saved.component';
import { UserProfileComponent } from './profiles/user-profile/user-profile.component';
import { EventsComponent } from './events/events.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SchoolComponent } from './school/school.component';
import { CommunityProfileComponent } from './profiles/community-profile/community-profile.component';
import { SearchResultsComponent } from './search-results/search-results.component';

import { CompanyComponent } from './company/company.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { MessagesComponent } from './messages/messages.component';
import { CompaniesExtendedComponent } from './companies/companies-extended/companies-extended.component';
import { PeopleExtendedComponent } from './people/people-extended/people-extended.component';
import { ProjectsExtendedComponent } from './projects/projects-extended/projects-extended.component';
import { CommunitiesExtendedComponent } from './communities/communities-extended/communities-extended.component';
import { EventsExtendedComponent } from './events/events-extended/events-extended.component';


const routes: Routes = [
  {
    path: 'home',
    component: MainHomeComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent, canActivate: [LoggedIn] },
  { path: 'projects', component: ProjectsComponent, canActivate: [LoggedIn] },
  {
    path: 'communities',
    component: CommunitiesComponent,
    canActivate: [LoggedIn],
  },
  { path: 'companies', component: CompaniesComponent, canActivate: [LoggedIn] },
  { path: 'people', component: PeopleComponent, canActivate: [LoggedIn] },
  { path: 'friends', component: FriendsComponent, canActivate: [LoggedIn] },
  { path: 'saved', component: SavedComponent, canActivate: [LoggedIn] },
  {
    path: 'my-profile',
    component: UserProfileComponent,
    canActivate: [LoggedIn],
  },
  { path: 'events', component: EventsComponent, canActivate: [LoggedIn] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [LoggedIn] },

  { path: 'school', component: SchoolComponent, canActivate: [LoggedIn] },

  { path: 'community', component: CommunityProfileComponent, canActivate: [LoggedIn] },

  
  { path : 'search', component: SearchResultsComponent, canActivate: [LoggedIn]},

  { path : 'job-posting', component: JobPostingComponent, canActivate: [LoggedIn]},

  { path : 'event-details', component: EventDetailsComponent, canActivate: [LoggedIn]},

  { path: 'company', component: CompanyComponent, canActivate: [LoggedIn] },

  { path: 'messages', component: MessagesComponent, canActivate: [LoggedIn] },

  { path: 'companies-extended', component: CompaniesExtendedComponent, canActivate: [LoggedIn] },

  { path: 'people-extended', component: PeopleExtendedComponent, canActivate: [LoggedIn] },

  { path: 'projects-extended', component: ProjectsExtendedComponent, canActivate: [LoggedIn] },

  { path: 'communities-extended', component: CommunitiesExtendedComponent, canActivate: [LoggedIn] },

  { path: 'events-extended', component: EventsExtendedComponent, canActivate: [LoggedIn] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
