import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { CurrenciesEnum, DefaultValueDateTypeEnum } from '@gauzy/models';
import { OrganizationDepartmentsService } from '../../../@core/services/organization-departments.service';
@Component({
	selector: 'ngx-organizations-mutation',
	templateUrl: './organizations-mutation.component.html',
	styleUrls: [
		'./organizations-mutation.component.scss',
		'../../../@shared/user/edit-profile-form/edit-profile-form.component.scss'
	]
})
export class OrganizationsMutationComponent implements OnInit {
	form: FormGroup;
	hoverState: boolean;
	currencies: string[] = Object.values(CurrenciesEnum);
	defaultValueDateTypes: string[] = Object.values(DefaultValueDateTypeEnum);

	constructor(
		private fb: FormBuilder,
		protected dialogRef: NbDialogRef<OrganizationsMutationComponent>,
		private toastrService: NbToastrService,
		private orgDepartmentService: OrganizationDepartmentsService
	) {}

	async ngOnInit() {
		this._initializedForm();
	}

	addOrganization() {
		this.dialogRef.close(this.form.value);
	}

	handleImageUploadError(error) {
		this.toastrService.danger(error, 'Error');
	}

	private _initializedForm() {
		this.form = this.fb.group({
			currency: ['', Validators.required],
			name: ['', Validators.required],
			imageUrl: [
				'https://dummyimage.com/330x300/8b72ff/ffffff.jpg&text',
				Validators.required
			], // TODO: fix that when the internet is here!
			defaultValueDateType: ['', Validators.required]
		});
	}
}
