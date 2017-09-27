import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PortalModule } from '@angular/cdk/portal';
import { CdkStep, CdkStepLabel, CdkStepper, CdkStepperModule, CdkStepperNext, CdkStepperPrevious } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, ContentChild, ContentChildren, Directive, ElementRef, Inject, Input, NgModule, Optional, SkipSelf, TemplateRef, ViewChildren, ViewEncapsulation, forwardRef } from '@angular/core';
import { MdButtonModule } from '@angular/material/button';
import { MATERIAL_COMPATIBILITY_MODE, MD_ERROR_GLOBAL_OPTIONS, MdCommonModule, defaultErrorStateMatcher } from '@angular/material/core';
import { MdIconModule } from '@angular/material/icon';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { animate, state, style, transition, trigger } from '@angular/animations';
/**
 * Workaround for https://github.com/angular/angular/issues/17849
 */
var _MdStepLabel = CdkStepLabel;
var MdStepLabel = (function (_super) {
    tslib_1.__extends(MdStepLabel, _super);
    /**
     * @param {?} template
     */
    function MdStepLabel(template) {
        return _super.call(this, template) || this;
    }
    return MdStepLabel;
}(_MdStepLabel));
MdStepLabel.decorators = [
    { type: Directive, args: [{
                selector: '[mdStepLabel], [matStepLabel]',
            },] },
];
/**
 * @nocollapse
 */
MdStepLabel.ctorParameters = function () { return [
    { type: TemplateRef, },
]; };
var MdStepHeader = (function () {
    function MdStepHeader() {
    }
    Object.defineProperty(MdStepHeader.prototype, "index", {
        /**
         * Index of the given step.
         * @return {?}
         */
        get: function () { return this._index; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._index = coerceNumberProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepHeader.prototype, "selected", {
        /**
         * Whether the given step is selected.
         * @return {?}
         */
        get: function () { return this._selected; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._selected = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepHeader.prototype, "active", {
        /**
         * Whether the given step label is active.
         * @return {?}
         */
        get: function () { return this._active; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._active = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepHeader.prototype, "optional", {
        /**
         * Whether the given step is optional.
         * @return {?}
         */
        get: function () { return this._optional; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._optional = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    MdStepHeader.prototype._stringLabel = function () {
        return this.label instanceof MdStepLabel ? null : this.label;
    };
    /**
     * Returns MdStepLabel if the label of given step is a template label.
     * @return {?}
     */
    MdStepHeader.prototype._templateLabel = function () {
        return this.label instanceof MdStepLabel ? this.label : null;
    };
    return MdStepHeader;
}());
MdStepHeader.decorators = [
    { type: Component, args: [{ selector: 'md-step-header, mat-step-header',
                template: "<div [class.mat-step-icon]=\"icon !== 'number' || selected\" [class.mat-step-icon-not-touched]=\"icon == 'number' && !selected\" [ngSwitch]=\"icon\"><span *ngSwitchCase=\"'number'\">{{index + 1}}</span><mat-icon *ngSwitchCase=\"'edit'\">create</mat-icon><mat-icon *ngSwitchCase=\"'done'\">done</mat-icon></div><div class=\"mat-step-label\" [class.mat-step-label-active]=\"active\"><ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"label.template\"></ng-container><div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div><div class=\"mat-step-optional\" *ngIf=\"optional\">Optional</div></div>",
                styles: [".mat-step-optional{font-size:12px}.mat-step-icon,.mat-step-icon-not-touched{border-radius:50%;height:24px;width:24px;align-items:center;justify-content:center;display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}"],
                host: {
                    'class': 'mat-step-header',
                    'role': 'tab',
                },
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdStepHeader.ctorParameters = function () { return []; };
MdStepHeader.propDecorators = {
    'icon': [{ type: Input },],
    'label': [{ type: Input },],
    'index': [{ type: Input },],
    'selected': [{ type: Input },],
    'active': [{ type: Input },],
    'optional': [{ type: Input },],
};
/**
 * Workaround for https://github.com/angular/angular/issues/17849
 */
var _MdStep = CdkStep;
var _MdStepper = CdkStepper;
var MdStep = (function (_super) {
    tslib_1.__extends(MdStep, _super);
    /**
     * @param {?} mdStepper
     * @param {?} errorOptions
     */
    function MdStep(mdStepper, errorOptions) {
        var _this = _super.call(this, mdStepper) || this;
        /**
         * Custom error state matcher that additionally checks for validity of interacted form.
         */
        _this.errorStateMatcher = function (control, form) {
            var originalErrorState = _this._originalErrorStateMatcher(control, form);
            // Custom error state checks for the validity of form that is not submitted or touched
            // since user can trigger a form change by calling for another step without directly
            // interacting with the current form.
            var customErrorState = control.invalid && _this.interacted;
            return originalErrorState || customErrorState;
        };
        if (errorOptions && errorOptions.errorStateMatcher) {
            _this._originalErrorStateMatcher = errorOptions.errorStateMatcher;
        }
        else {
            _this._originalErrorStateMatcher = defaultErrorStateMatcher;
        }
        return _this;
    }
    return MdStep;
}(_MdStep));
MdStep.decorators = [
    { type: Component, args: [{ selector: 'md-step, mat-step',
                template: "<ng-template><ng-content></ng-content></ng-template>",
                providers: [{ provide: MD_ERROR_GLOBAL_OPTIONS, useExisting: MdStep }],
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
            },] },
];
/**
 * @nocollapse
 */
MdStep.ctorParameters = function () { return [
    { type: MdStepper, decorators: [{ type: Inject, args: [forwardRef(function () { return MdStepper; }),] },] },
    { type: undefined, decorators: [{ type: Optional }, { type: SkipSelf }, { type: Inject, args: [MD_ERROR_GLOBAL_OPTIONS,] },] },
]; };
MdStep.propDecorators = {
    'stepLabel': [{ type: ContentChild, args: [MdStepLabel,] },],
};
var MdStepper = (function (_super) {
    tslib_1.__extends(MdStepper, _super);
    function MdStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MdStepper;
}(_MdStepper));
MdStepper.decorators = [
    { type: Directive, args: [{
                selector: '[mdStepper]'
            },] },
];
/**
 * @nocollapse
 */
MdStepper.ctorParameters = function () { return []; };
MdStepper.propDecorators = {
    '_stepHeader': [{ type: ViewChildren, args: [MdStepHeader, { read: ElementRef },] },],
    '_steps': [{ type: ContentChildren, args: [MdStep,] },],
};
var MdHorizontalStepper = (function (_super) {
    tslib_1.__extends(MdHorizontalStepper, _super);
    function MdHorizontalStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MdHorizontalStepper;
}(MdStepper));
MdHorizontalStepper.decorators = [
    { type: Component, args: [{ selector: 'md-horizontal-stepper, mat-horizontal-stepper',
                template: "<div class=\"mat-horizontal-stepper-header-container\"><ng-container *ngFor=\"let step of _steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_focusIndex === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [index]=\"i\" [icon]=\"_getIndicatorType(i)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i\" [optional]=\"step.optional\"></mat-step-header><div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div></ng-container></div><div class=\"mat-horizontal-content-container\"><div *ngFor=\"let step of _steps; let i = index\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div>",
                styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-step-header{overflow:hidden;outline:0}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon,.mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon,[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:8px}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.mat-vertical-stepper-header .mat-step-icon,.mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon,[dir=rtl] .mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{overflow:hidden}.mat-horizontal-stepper-content[aria-expanded=false]{height:0}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                inputs: ['selectedIndex'],
                host: {
                    'class': 'mat-stepper-horizontal',
                    'role': 'tablist',
                },
                animations: [
                    trigger('stepTransition', [
                        state('previous', style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
                        state('current', style({ transform: 'translate3d(0%, 0, 0)', visibility: 'visible' })),
                        state('next', style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
                        transition('* => *', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
                    ])
                ],
                providers: [{ provide: MdStepper, useExisting: MdHorizontalStepper }],
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdHorizontalStepper.ctorParameters = function () { return []; };
var MdVerticalStepper = (function (_super) {
    tslib_1.__extends(MdVerticalStepper, _super);
    function MdVerticalStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MdVerticalStepper;
}(MdStepper));
MdVerticalStepper.decorators = [
    { type: Component, args: [{ selector: 'md-vertical-stepper, mat-vertical-stepper',
                template: "<div class=\"mat-step\" *ngFor=\"let step of _steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-vertical-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_focusIndex == i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex === i\" [index]=\"i\" [icon]=\"_getIndicatorType(i)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i\" [optional]=\"step.optional\"></mat-step-header><div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\"><div class=\"mat-vertical-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><div class=\"mat-vertical-content\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div></div></div>",
                styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-step-header{overflow:hidden;outline:0}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon,.mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon,[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:8px}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.mat-vertical-stepper-header .mat-step-icon,.mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon,[dir=rtl] .mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{overflow:hidden}.mat-horizontal-stepper-content[aria-expanded=false]{height:0}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                inputs: ['selectedIndex'],
                host: {
                    'class': 'mat-stepper-vertical',
                    'role': 'tablist',
                },
                animations: [
                    trigger('stepTransition', [
                        state('previous', style({ height: '0px', visibility: 'hidden' })),
                        state('next', style({ height: '0px', visibility: 'hidden' })),
                        state('current', style({ height: '*', visibility: 'visible' })),
                        transition('* <=> current', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                    ])
                ],
                providers: [{ provide: MdStepper, useExisting: MdVerticalStepper }],
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
            },] },
];
/**
 * @nocollapse
 */
MdVerticalStepper.ctorParameters = function () { return []; };
/**
 * Workaround for https://github.com/angular/angular/issues/17849
 */
var _MdStepperNext = CdkStepperNext;
var _MdStepperPrevious = CdkStepperPrevious;
/**
 * Button that moves to the next step in a stepper workflow.
 */
var MdStepperNext = (function (_super) {
    tslib_1.__extends(MdStepperNext, _super);
    function MdStepperNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MdStepperNext;
}(_MdStepperNext));
MdStepperNext.decorators = [
    { type: Directive, args: [{
                selector: 'button[mdStepperNext], button[matStepperNext]',
                host: { '(click)': '_stepper.next()' },
                providers: [{ provide: CdkStepper, useExisting: MdStepper }]
            },] },
];
/**
 * @nocollapse
 */
MdStepperNext.ctorParameters = function () { return []; };
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var MdStepperPrevious = (function (_super) {
    tslib_1.__extends(MdStepperPrevious, _super);
    function MdStepperPrevious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MdStepperPrevious;
}(_MdStepperPrevious));
MdStepperPrevious.decorators = [
    { type: Directive, args: [{
                selector: 'button[mdStepperPrevious], button[matStepperPrevious]',
                host: { '(click)': '_stepper.previous()' },
                providers: [{ provide: CdkStepper, useExisting: MdStepper }]
            },] },
];
/**
 * @nocollapse
 */
MdStepperPrevious.ctorParameters = function () { return []; };
var MdStepperModule = (function () {
    function MdStepperModule() {
    }
    return MdStepperModule;
}());
MdStepperModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MdCommonModule,
                    CommonModule,
                    PortalModule,
                    MdButtonModule,
                    CdkStepperModule,
                    MdIconModule
                ],
                exports: [
                    MdCommonModule,
                    MdHorizontalStepper,
                    MdVerticalStepper,
                    MdStep,
                    MdStepLabel,
                    MdStepper,
                    MdStepperNext,
                    MdStepperPrevious,
                    MdStepHeader
                ],
                declarations: [MdHorizontalStepper, MdVerticalStepper, MdStep, MdStepLabel, MdStepper,
                    MdStepperNext, MdStepperPrevious, MdStepHeader],
            },] },
];
/**
 * @nocollapse
 */
MdStepperModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { MdStepperModule, _MdStepLabel, MdStepLabel, _MdStep, _MdStepper, MdStep, MdStepper, MdHorizontalStepper, MdVerticalStepper, _MdStepperNext, _MdStepperPrevious, MdStepperNext, MdStepperPrevious, MdStepHeader, MdStep as MatStep, MdStepHeader as MatStepHeader, MdStepLabel as MatStepLabel, MdStepper as MatStepper, MdHorizontalStepper as MatHorizontalStepper, MdStepperModule as MatStepperModule, MdVerticalStepper as MatVerticalStepper, MdStepperPrevious as MatStepperPrevious, MdStepperNext as MatStepperNext };
//# sourceMappingURL=stepper.es5.js.map
