/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Provider } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
export declare const _MdCheckboxRequiredValidator: typeof CheckboxRequiredValidator;
export declare const MD_CHECKBOX_REQUIRED_VALIDATOR: Provider;
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `md-checkbox`.
 */
export declare class MdCheckboxRequiredValidator extends _MdCheckboxRequiredValidator {
}
