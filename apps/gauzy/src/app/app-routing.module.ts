import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
	NbAuthComponent,
	NbLoginComponent,
	NbLogoutComponent,
	NbRegisterComponent,
	NbRequestPasswordComponent,
	NbResetPasswordComponent
} from '@nebular/auth';
import { AuthGuard } from './@core/auth/auth.guard';
import { SignInSuccessComponent } from './auth/signin-success/sign-in-success.component';
import { SignInSuccessModule } from './auth/signin-success/signin-success-login-google.module';
import { AppModuleGuard } from './app.module.guards';
import { AcceptInvitePage } from './auth/accept-invite/accept-invite.component';
import { AcceptInviteModule } from './auth/accept-invite/accept-invite.module';
import { NoAuthGuard } from './@core/auth/no-auth.guard';

const routes: Routes = [
	{
		path: 'pages',
		loadChildren: () =>
			import('./pages/pages.module').then((m) => m.PagesModule),
		canActivate: [AuthGuard, AppModuleGuard]
	},
	{
		path: 'auth',
		component: NbAuthComponent,
		canActivate: [AppModuleGuard],
		children: [
			{
				path: '',
				component: NbLoginComponent,
				canActivate: [NoAuthGuard]
			},
			{
				path: 'login',
				component: NbLoginComponent,
				canActivate: [NoAuthGuard]
			},
			{
				path: 'register',
				component: NbRegisterComponent,
				canActivate: [NoAuthGuard]
			},
			{
				path: 'logout',
				component: NbLogoutComponent
			},
			{
				path: 'request-password',
				component: NbRequestPasswordComponent,
				canActivate: [NoAuthGuard]
			},
			{
				path: 'reset-password',
				component: NbResetPasswordComponent,
				canActivate: [NoAuthGuard]
			},
			{
				path: 'accept-invite',
				component: AcceptInvitePage,
				canActivate: [NoAuthGuard]
			}
		]
	},
	{
		path: 'server-down',
		loadChildren: './server-down/server-down.module#ServerDownModule'
	},
	{ path: 'sign-in/success', component: SignInSuccessComponent },
	{ path: '', redirectTo: 'pages', pathMatch: 'full' },
	{ path: '**', redirectTo: 'pages' }
];

const config: ExtraOptions = {
	useHash: true
};

@NgModule({
	imports: [
		RouterModule.forRoot(routes, config),
		SignInSuccessModule,
		AcceptInviteModule
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
