import { LandingModule } from './modules/admin/landing/landing.module';
import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { FoglioComponent } from './foglio/foglio/foglio.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { SupportoComponent } from './supporto/supporto.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ArchivioComponent } from './archivio/archivio.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
            { path: '', component: HomeComponent },
            // { path: 'home', component: HomeComponent },
            { path: 'archivio', component: ArchivioComponent },
            { path: 'workspace', component: WorkspaceComponent },
            { path: 'report', component: ReportComponent },
            { path: 'supporto', component: SupportoComponent },
            { path: 'foglio', component: FoglioComponent },
        {
            path: 'auth',
            // canActivate: [NoAuthGuard],
            // canActivateChild: [NoAuthGuard],
            component: LayoutComponent,
            data: {
                layout: 'empty',
            },
            children: [
                {
                    path: 'confirmation-required',
                    loadChildren: () =>
                        import(
                            'app/modules/auth/confirmation-required/confirmation-required.routes'
                        ),
                },
                {
                    path: 'forgot-password',
                    loadChildren: () =>
                        import(
                            'app/modules/auth/forgot-password/forgot-password.routes'
                        ),
                },
                {
                    path: 'reset-password',
                    loadChildren: () =>
                        import(
                            'app/modules/auth/reset-password/reset-password.routes'
                        ),
                },
                {
                    path: 'sign-in',
                    loadChildren: () =>
                        import('app/modules/auth/sign-in/sign-in.routes'),
                },
                {
                    path: 'sign-up',
                    loadChildren: () =>
                        import('app/modules/auth/sign-up/sign-up.routes'),
                },
            ],
        },

        // Auth routes for authenticated users
        {
            path: '',
            // canActivate: [AuthGuard],
            // canActivateChild: [AuthGuard],
            component: LayoutComponent,
            data: {
                layout: 'empty',
            },
            children: [
                {
                    path: 'sign-out',
                    loadChildren: () =>
                        import('app/modules/auth/sign-out/sign-out.routes'),
                },
                {
                    path: 'unlock-session',
                    loadChildren: () =>
                        import(
                            'app/modules/auth/unlock-session/unlock-session.routes'
                        ),
                },
            ],
        },

        // Landing routes
        {
            path: '',
            component: LayoutComponent,
            data: {
                layout: 'empty',
            },
            children: [
                {
                    path: 'home',
                    loadChildren: () =>
                        import('app/modules/landing/home/home.routes'),
                },
            ],
        }
];
