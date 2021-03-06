import { PasswordValidators } from "./password.validators";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: ["", Validators.required, PasswordValidators.validOldPassword],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: PasswordValidators.passwordsShouldMatch
      }
    );
  }

  get oldPassword() {
    return this.form.get("oldPassword");
  }

  get newPassword() {
    return this.form.get("newPassword");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}
