import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home/main-home.component';
import { GuestHomeComponent } from './main-home/guest-home/guest-home.component';
import { UserHomeComponent } from './main-home/user-home/user-home.component';
import { SiteRoutingModule } from './site.routing.module';
import { AppCommonModule } from '@common/common.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ExploreComponent } from './explore/explore.component';
import { AnimatedCounterDirective } from './main-home/guest-home/animated-counter.directive';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectsHomeComponent } from './projects/tabs/projects-home/projects-home.component';
import { CommunitiesComponent } from './communities/communities.component';
import { ProjectCardComponent } from './projects/components/project-card/project-card.component';
import { ProjectsFromCommunitiesComponent } from './projects/tabs/projects-from-communities/projects-from-communities.component';
import { ProjectsFromFriendsComponent } from './projects/tabs/projects-from-friends/projects-from-friends.component';
import { MyProjectsComponent } from './projects/tabs/my-projects/my-projects.component';
import { CompaniesComponent } from './companies/companies.component';
import { PeopleComponent } from './people/people.component';
import { PeopleHomeComponent } from './people/panels/people-home/people-home.component';
import { PeopleStudentsComponent } from './people/panels/people-students/people-students.component';
import { PeopleProfessionalsComponent } from './people/panels/people-professionals/people-professionals.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  declarations: [MainHomeComponent, GuestHomeComponent, UserHomeComponent, ExploreComponent, AnimatedCounterDirective, MainMenuComponent, ProjectsComponent, ProjectsHomeComponent, CommunitiesComponent, ProjectCardComponent,ProjectsFromCommunitiesComponent, ProjectsFromFriendsComponent, MyProjectsComponent, CompaniesComponent, PeopleComponent, PeopleHomeComponent, PeopleStudentsComponent, PeopleProfessionalsComponent, FriendsComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    AppCommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatTabsModule
  ],
})
export class SiteModule {}
