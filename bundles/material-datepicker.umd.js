/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/a11y'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('rxjs/Subject'), require('@angular/cdk/scrolling'), require('@angular/cdk/platform'), require('@angular/cdk/keycodes'), require('@angular/cdk/portal'), require('@angular/cdk/rxjs'), require('rxjs/observable/defer'), require('@angular/animations'), require('@angular/http'), require('rxjs/Observable'), require('rxjs/observable/forkJoin'), require('rxjs/observable/of'), require('rxjs/observable/throw'), require('rxjs/operator/first'), require('rxjs/Subscription'), require('@angular/forms'), require('rxjs/observable/fromEvent'), require('rxjs/observable/merge')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/cdk/a11y', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/platform-browser', '@angular/cdk/bidi', '@angular/cdk/coercion', 'rxjs/Subject', '@angular/cdk/scrolling', '@angular/cdk/platform', '@angular/cdk/keycodes', '@angular/cdk/portal', '@angular/cdk/rxjs', 'rxjs/observable/defer', '@angular/animations', '@angular/http', 'rxjs/Observable', 'rxjs/observable/forkJoin', 'rxjs/observable/of', 'rxjs/observable/throw', 'rxjs/operator/first', 'rxjs/Subscription', '@angular/forms', 'rxjs/observable/fromEvent', 'rxjs/observable/merge'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.datepicker = global.ng.material.datepicker || {}),global.ng.cdk.a11y,global.ng.cdk.overlay,global.ng.common,global.ng.core,global.ng.platformBrowser,global.ng.cdk.bidi,global.ng.cdk.coercion,global.Rx,global.ng.cdk.scrolling,global.ng.cdk.platform,global.ng.cdk.keycodes,global.ng.cdk.portal,global.ng.cdk.rxjs,global.Rx.Observable,global.ng.animations,global.ng.http,global.Rx,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx,global.ng.forms,global.Rx.Observable,global.Rx.Observable));
}(this, (function (exports,_angular_cdk_a11y,_angular_cdk_overlay,_angular_common,_angular_core,_angular_platformBrowser,_angular_cdk_bidi,_angular_cdk_coercion,rxjs_Subject,_angular_cdk_scrolling,_angular_cdk_platform,_angular_cdk_keycodes,_angular_cdk_portal,_angular_cdk_rxjs,rxjs_observable_defer,_angular_animations,_angular_http,rxjs_Observable,rxjs_observable_forkJoin,rxjs_observable_of,rxjs_observable_throw,rxjs_operator_first,rxjs_Subscription,_angular_forms,rxjs_observable_fromEvent,rxjs_observable_merge) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * \@docs-private
 */
var AnimationCurves = (function () {
    function AnimationCurves() {
    }
    return AnimationCurves;
}());
AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/**
 * \@docs-private
 */
var AnimationDurations = (function () {
    function AnimationDurations() {
    }
    return AnimationDurations;
}());
AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';
var MATERIAL_COMPATIBILITY_MODE = new _angular_core.InjectionToken('md-compatibility-mode');
/**
 * Returns an exception to be thrown if the consumer has used
an invalid Material prefix on a component.
\@docs-private
 * @param {?} prefix
 * @param {?} nodeName
 * @return {?}
 */
function getMdCompatibilityInvalidPrefixError(prefix, nodeName) {
    return Error("The \"" + prefix + "-\" prefix cannot be used in ng-material v1 compatibility mode. " +
        ("It was used on an \"" + nodeName.toLowerCase() + "\" element."));
}
/**
 * Selector that matches all elements that may have style collisions with AngularJS Material.
 */
var MAT_ELEMENTS_SELECTOR = "\n  [mat-button],\n  [mat-fab],\n  [mat-icon-button],\n  [mat-mini-fab],\n  [mat-raised-button],\n  [matCardSubtitle],\n  [matCardTitle],\n  [matCellDef],\n  [matColumnDef],\n  [matDialogActions],\n  [matDialogClose],\n  [matDialogContent],\n  [matDialogTitle],\n  [matHeaderCellDef],\n  [matHeaderRowDef],\n  [matLine],\n  [matRowDef],\n  [matStepLabel],\n  [matStepperNext],\n  [matStepperPrevious],\n  [matTabLabel],\n  [matTabLink],\n  [matTabNav],\n  [matTooltip],\n  [matInput],\n  [matPrefix],\n  [matSuffix],\n  mat-autocomplete,\n  mat-button-toggle,\n  mat-button-toggle,\n  mat-button-toggle-group,\n  mat-card,\n  mat-card-actions,\n  mat-card-content,\n  mat-card-footer,\n  mat-card-header,\n  mat-card-subtitle,\n  mat-card-title,\n  mat-card-title-group,\n  mat-cell,\n  mat-checkbox,\n  mat-chip,\n  mat-dialog-actions,\n  mat-dialog-container,\n  mat-dialog-content,\n  mat-divider,\n  mat-error,\n  mat-grid-list,\n  mat-grid-tile,\n  mat-grid-tile-footer,\n  mat-grid-tile-header,\n  mat-header-cell,\n  mat-header-row,\n  mat-hint,\n  mat-horizontal-stepper,\n  mat-icon,\n  mat-input-container,\n  mat-form-field,\n  mat-list,\n  mat-list-item,\n  mat-menu,\n  mat-nav-list,\n  mat-option,\n  mat-placeholder,\n  mat-progress-bar,\n  mat-pseudo-checkbox,\n  mat-radio-button,\n  mat-radio-group,\n  mat-row,\n  mat-select,\n  mat-sidenav,\n  mat-sidenav-container,\n  mat-slider,\n  mat-spinner,\n  mat-step,\n  mat-tab,\n  mat-table,\n  mat-tab-group,\n  mat-toolbar,\n  mat-vertical-stepper";
/**
 * Selector that matches all elements that may have style collisions with AngularJS Material.
 */
var MD_ELEMENTS_SELECTOR = "\n  [md-button],\n  [md-fab],\n  [md-icon-button],\n  [md-mini-fab],\n  [md-raised-button],\n  [mdCardSubtitle],\n  [mdCardTitle],\n  [mdCellDef],\n  [mdColumnDef],\n  [mdDialogActions],\n  [mdDialogClose],\n  [mdDialogContent],\n  [mdDialogTitle],\n  [mdHeaderCellDef],\n  [mdHeaderRowDef],\n  [mdLine],\n  [mdRowDef],\n  [mdStepLabel],\n  [mdStepperNext],\n  [mdStepperPrevious],\n  [mdTabLabel],\n  [mdTabLink],\n  [mdTabNav],\n  [mdTooltip],\n  [mdInput],\n  [mdPrefix],\n  [mdSuffix],\n  md-autocomplete,\n  md-button-toggle,\n  md-button-toggle,\n  md-button-toggle-group,\n  md-card,\n  md-card-actions,\n  md-card-content,\n  md-card-footer,\n  md-card-header,\n  md-card-subtitle,\n  md-card-title,\n  md-card-title-group,\n  md-cell,\n  md-checkbox,\n  md-chip,\n  md-dialog-actions,\n  md-dialog-container,\n  md-dialog-content,\n  md-divider,\n  md-error,\n  md-grid-list,\n  md-grid-tile,\n  md-grid-tile-footer,\n  md-grid-tile-header,\n  md-header-cell,\n  md-header-row,\n  md-hint,\n  md-horizontal-stepper,\n  md-icon,\n  md-input-container,\n  md-form-field,\n  md-list,\n  md-list-item,\n  md-menu,\n  md-nav-list,\n  md-option,\n  md-placeholder,\n  md-progress-bar,\n  md-pseudo-checkbox,\n  md-radio-button,\n  md-radio-group,\n  md-row,\n  md-select,\n  md-sidenav,\n  md-sidenav-container,\n  md-slider,\n  md-spinner,\n  md-step,\n  md-tab,\n  md-table,\n  md-tab-group,\n  md-toolbar,\n  md-vertical-stepper";
/**
 * Directive that enforces that the `mat-` prefix cannot be used.
 */
var MatPrefixRejector = (function () {
    /**
     * @param {?} isCompatibilityMode
     * @param {?} elementRef
     */
    function MatPrefixRejector(isCompatibilityMode, elementRef) {
        if (!isCompatibilityMode) {
            throw getMdCompatibilityInvalidPrefixError('mat', elementRef.nativeElement.nodeName);
        }
    }
    return MatPrefixRejector;
}());
MatPrefixRejector.decorators = [
    { type: _angular_core.Directive, args: [{ selector: MAT_ELEMENTS_SELECTOR },] },
];
/**
 * @nocollapse
 */
MatPrefixRejector.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MATERIAL_COMPATIBILITY_MODE,] },] },
    { type: _angular_core.ElementRef, },
]; };
/**
 * Directive that enforces that the `md-` prefix cannot be used.
 */
var MdPrefixRejector = (function () {
    /**
     * @param {?} isCompatibilityMode
     * @param {?} elementRef
     */
    function MdPrefixRejector(isCompatibilityMode, elementRef) {
        if (isCompatibilityMode) {
            throw getMdCompatibilityInvalidPrefixError('md', elementRef.nativeElement.nodeName);
        }
    }
    return MdPrefixRejector;
}());
MdPrefixRejector.decorators = [
    { type: _angular_core.Directive, args: [{ selector: MD_ELEMENTS_SELECTOR },] },
];
/**
 * @nocollapse
 */
MdPrefixRejector.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MATERIAL_COMPATIBILITY_MODE,] },] },
    { type: _angular_core.ElementRef, },
]; };
/**
 * Module that enforces the default compatibility mode settings. When this module is loaded
without NoConflictStyleCompatibilityMode also being imported, it will throw an error if
there are any uses of the `mat-` prefix.
 */
var CompatibilityModule = (function () {
    function CompatibilityModule() {
    }
    return CompatibilityModule;
}());
CompatibilityModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [MatPrefixRejector, MdPrefixRejector],
                exports: [MatPrefixRejector, MdPrefixRejector],
            },] },
];
/**
 * @nocollapse
 */
CompatibilityModule.ctorParameters = function () { return []; };
/**
 * Module that enforces "no-conflict" compatibility mode settings. When this module is loaded,
it will throw an error if there are any uses of the `md-` prefix.
 */
var NoConflictStyleCompatibilityMode = (function () {
    function NoConflictStyleCompatibilityMode() {
    }
    return NoConflictStyleCompatibilityMode;
}());
NoConflictStyleCompatibilityMode.decorators = [
    { type: _angular_core.NgModule, args: [{
                providers: [{
                        provide: MATERIAL_COMPATIBILITY_MODE, useValue: true,
                    }],
            },] },
];
/**
 * @nocollapse
 */
NoConflictStyleCompatibilityMode.ctorParameters = function () { return []; };
/**
 * Injection token that configures whether the Material sanity checks are enabled.
 */
var MATERIAL_SANITY_CHECKS = new _angular_core.InjectionToken('md-sanity-checks');
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
components. This includes Bidi, compatibility mode, etc.

This module should be imported to each top-level component module (e.g., MdTabsModule).
 */
var MdCommonModule = (function () {
    /**
     * @param {?} _document
     * @param {?} _sanityChecksEnabled
     */
    function MdCommonModule(_document, _sanityChecksEnabled) {
        this._document = _document;
        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */
        this._hasDoneGlobalChecks = false;
        if (_sanityChecksEnabled && !this._hasDoneGlobalChecks && _document && _angular_core.isDevMode()) {
            this._checkDoctype();
            this._checkTheme();
            this._hasDoneGlobalChecks = true;
        }
    }
    /**
     * @return {?}
     */
    MdCommonModule.prototype._checkDoctype = function () {
        if (!this._document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' +
                'some Angular Material components not to behave as expected.');
        }
    };
    /**
     * @return {?}
     */
    MdCommonModule.prototype._checkTheme = function () {
        if (typeof getComputedStyle === 'function') {
            var /** @type {?} */ testElement = this._document.createElement('div');
            testElement.classList.add('mat-theme-loaded-marker');
            this._document.body.appendChild(testElement);
            if (getComputedStyle(testElement).display !== 'none') {
                console.warn('Could not find Angular Material core theme. Most Material ' +
                    'components may not work as expected. For more info refer ' +
                    'to the theming guide: https://material.angular.io/guide/theming');
            }
            this._document.body.removeChild(testElement);
        }
    };
    return MdCommonModule;
}());
MdCommonModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [CompatibilityModule, _angular_cdk_bidi.BidiModule],
                exports: [CompatibilityModule, _angular_cdk_bidi.BidiModule],
                providers: [{
                        provide: MATERIAL_SANITY_CHECKS, useValue: true,
                    }],
            },] },
];
/**
 * @nocollapse
 */
MdCommonModule.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [_angular_platformBrowser.DOCUMENT,] },] },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MATERIAL_SANITY_CHECKS,] },] },
]; };
/**
 * Mixin to augment a directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisabled(base) {
    return (function (_super) {
        __extends(class_1, _super);
        /**
         * @param {...?} args
         */
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._disabled = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disabled", {
            /**
             * @return {?}
             */
            get: function () { return this._disabled; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._disabled = _angular_cdk_coercion.coerceBooleanProperty(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
/**
 * Mixin to augment a directive with a `color` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultColor
 * @return {?}
 */
function mixinColor(base, defaultColor) {
    return (function (_super) {
        __extends(class_2, _super);
        /**
         * @param {...?} args
         */
        function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            // Set the default color that can be specified from the mixin.
            _this.color = defaultColor;
            return _this;
        }
        Object.defineProperty(class_2.prototype, "color", {
            /**
             * @return {?}
             */
            get: function () { return this._color; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                var /** @type {?} */ colorPalette = value || defaultColor;
                if (colorPalette !== this._color) {
                    if (this._color) {
                        this._renderer.removeClass(this._elementRef.nativeElement, "mat-" + this._color);
                    }
                    if (colorPalette) {
                        this._renderer.addClass(this._elementRef.nativeElement, "mat-" + colorPalette);
                    }
                    this._color = colorPalette;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_2;
    }(base));
}
/**
 * Mixin to augment a directive with a `disableRipple` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisableRipple(base) {
    return (function (_super) {
        __extends(class_3, _super);
        /**
         * @param {...?} args
         */
        function class_3() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._disableRipple = false;
            return _this;
        }
        Object.defineProperty(class_3.prototype, "disableRipple", {
            /**
             * Whether the ripple effect is disabled or not.
             * @return {?}
             */
            get: function () { return this._disableRipple; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._disableRipple = _angular_cdk_coercion.coerceBooleanProperty(value); },
            enumerable: true,
            configurable: true
        });
        return class_3;
    }(base));
}
/**
 * Class to coordinate unique selection based on name.
Intended to be consumed as an Angular service.
This service is needed because native radio change events are only fired on the item currently
being selected, and we still need to uncheck the previous selection.

This service does not *store* any IDs and names because they may change at any time, so it is
less error-prone if they are simply passed through when the events occur.
 */
var UniqueSelectionDispatcher = (function () {
    function UniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
    \@param id ID of the item.
    \@param name Name of the item.
     * @param {?} id
     * @param {?} name
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.notify = function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    /**
     * Listen for future changes to item selection.
    \@return Function used to deregister listener
     * @param {?} listener
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.listen = function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return function () {
            _this._listeners = _this._listeners.filter(function (registered) {
                return listener !== registered;
            });
        };
    };
    return UniqueSelectionDispatcher;
}());
UniqueSelectionDispatcher.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
UniqueSelectionDispatcher.ctorParameters = function () { return []; };
/**
 * \@docs-private
 * @param {?} parentDispatcher
 * @return {?}
 */
function UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY(parentDispatcher) {
    return parentDispatcher || new UniqueSelectionDispatcher();
}
/**
 * \@docs-private
 */
var UNIQUE_SELECTION_DISPATCHER_PROVIDER = {
    // If there is already a dispatcher available, use that. Otherwise, provide a new one.
    provide: UniqueSelectionDispatcher,
    deps: [[new _angular_core.Optional(), new _angular_core.SkipSelf(), UniqueSelectionDispatcher]],
    useFactory: UNIQUE_SELECTION_DISPATCHER_PROVIDER_FACTORY
};
/**
 * InjectionToken for datepicker that can be used to override default locale code.
 */
var MAT_DATE_LOCALE = new _angular_core.InjectionToken('MAT_DATE_LOCALE');
/**
 * Provider for MAT_DATE_LOCALE injection token.
 */
var MAT_DATE_LOCALE_PROVIDER = { provide: MAT_DATE_LOCALE, useExisting: _angular_core.LOCALE_ID };
/**
 * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
 * @abstract
 */
var DateAdapter = (function () {
    function DateAdapter() {
        this._localeChanges = new rxjs_Subject.Subject();
    }
    Object.defineProperty(DateAdapter.prototype, "localeChanges", {
        /**
         * A stream that emits when the locale changes.
         * @return {?}
         */
        get: function () { return this._localeChanges; },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the year component of the given date.
    \@param date The date to extract the year from.
    \@returns The year component.
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateAdapter.prototype.getYear = function (date) { };
    /**
     * Gets the month component of the given date.
    \@param date The date to extract the month from.
    \@returns The month component (0-indexed, 0 = January).
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateAdapter.prototype.getMonth = function (date) { };
    /**
     * Gets the date of the month component of the given date.
    \@param date The date to extract the date of the month from.
    \@returns The month component (1-indexed, 1 = first of month).
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateAdapter.prototype.getDate = function (date) { };
    /**
     * Gets the day of the week component of the given date.
    \@param date The date to extract the day of the week from.
    \@returns The month component (0-indexed, 0 = Sunday).
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateAdapter.prototype.getDayOfWeek = function (date) { };
    /**
     * Gets a list of names for the months.
    \@param style The naming style (e.g. long = 'January', short = 'Jan', narrow = 'J').
    \@returns An ordered list of all month names, starting with January.
     * @abstract
     * @param {?} style
     * @return {?}
     */
    DateAdapter.prototype.getMonthNames = function (style$$1) { };
    /**
     * Gets a list of names for the dates of the month.
    \@returns An ordered list of all date of the month names, starting with '1'.
     * @abstract
     * @return {?}
     */
    DateAdapter.prototype.getDateNames = function () { };
    /**
     * Gets a list of names for the days of the week.
    \@param style The naming style (e.g. long = 'Sunday', short = 'Sun', narrow = 'S').
    \@returns An ordered list of all weekday names, starting with Sunday.
     * @abstract
     * @param {?} style
     * @return {?}
     */
    DateAdapter.prototype.getDayOfWeekNames = function (style$$1) { };
    /**
     * Gets the name for the year of the given date.
    \@param date The date to get the year name for.
    \@returns The name of the given year (e.g. '2017').
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateAdapter.prototype.getYearName = function (date) { };
    /**
     * Gets the first day of the week.
    \@returns The first day of the week (0-indexed, 0 = Sunday).
     * @abstract
     * @return {?}
     */
    DateAdapter.prototype.getFirstDayOfWeek = function () { };
    /**
     * Gets the number of days in the month of the given date.
    \@param date The date whose month should be checked.
    \@returns The number of days in the month of the given date.
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateAdapter.prototype.getNumDaysInMonth = function (date) { };
    /**
     * Clones the given date.
    \@param date The date to clone
    \@returns A new date equal to the given date.
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateAdapter.prototype.clone = function (date) { };
    /**
     * Creates a date with the given year, month, and date. Does not allow over/under-flow of the
    month and date.
    \@param year The full year of the date. (e.g. 89 means the year 89, not the year 1989).
    \@param month The month of the date (0-indexed, 0 = January). Must be an integer 0 - 11.
    \@param date The date of month of the date. Must be an integer 1 - length of the given month.
    \@returns The new date, or null if invalid.
     * @abstract
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    DateAdapter.prototype.createDate = function (year, month, date) { };
    /**
     * Gets today's date.
    \@returns Today's date.
     * @abstract
     * @return {?}
     */
    DateAdapter.prototype.today = function () { };
    /**
     * Parses a date from a value.
    \@param value The value to parse.
    \@param parseFormat The expected format of the value being parsed
        (type is implementation-dependent).
    \@returns The parsed date.
     * @abstract
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    DateAdapter.prototype.parse = function (value, parseFormat) { };
    /**
     * Formats a date as a string.
    \@param date The value to format.
    \@param displayFormat The format to use to display the date as a string.
    \@returns The formatted date string.
     * @abstract
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    DateAdapter.prototype.format = function (date, displayFormat) { };
    /**
     * Adds the given number of years to the date. Years are counted as if flipping 12 pages on the
    calendar for each year and then finding the closest date in the new month. For example when
    adding 1 year to Feb 29, 2016, the resulting date will be Feb 28, 2017.
    \@param date The date to add years to.
    \@param years The number of years to add (may be negative).
    \@returns A new date equal to the given one with the specified number of years added.
     * @abstract
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    DateAdapter.prototype.addCalendarYears = function (date, years) { };
    /**
     * Adds the given number of months to the date. Months are counted as if flipping a page on the
    calendar for each month and then finding the closest date in the new month. For example when
    adding 1 month to Jan 31, 2017, the resulting date will be Feb 28, 2017.
    \@param date The date to add months to.
    \@param months The number of months to add (may be negative).
    \@returns A new date equal to the given one with the specified number of months added.
     * @abstract
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    DateAdapter.prototype.addCalendarMonths = function (date, months) { };
    /**
     * Adds the given number of days to the date. Days are counted as if moving one cell on the
    calendar for each day.
    \@param date The date to add days to.
    \@param days The number of days to add (may be negative).
    \@returns A new date equal to the given one with the specified number of days added.
     * @abstract
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    DateAdapter.prototype.addCalendarDays = function (date, days) { };
    /**
     * Gets the RFC 3339 compatible string (https://tools.ietf.org/html/rfc3339) for the given date.
    \@param date The date to get the ISO date string for.
    \@returns The ISO date string date string.
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateAdapter.prototype.toIso8601 = function (date) { };
    /**
     * Creates a date from an RFC 3339 compatible string (https://tools.ietf.org/html/rfc3339).
    \@param iso8601String The ISO date string to create a date from
    \@returns The date created from the ISO date string.
     * @abstract
     * @param {?} iso8601String
     * @return {?}
     */
    DateAdapter.prototype.fromIso8601 = function (iso8601String) { };
    /**
     * Checks whether the given object is considered a date instance by this DateAdapter.
    \@param obj The object to check
    \@returns Whether the object is a date instance.
     * @abstract
     * @param {?} obj
     * @return {?}
     */
    DateAdapter.prototype.isDateInstance = function (obj) { };
    /**
     * Checks whether the given date is valid.
    \@param date The date to check.
    \@returns Whether the date is valid.
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateAdapter.prototype.isValid = function (date) { };
    /**
     * Sets the locale used for all dates.
    \@param locale The new locale.
     * @param {?} locale
     * @return {?}
     */
    DateAdapter.prototype.setLocale = function (locale) {
        this.locale = locale;
        this._localeChanges.next();
    };
    /**
     * Compares two dates.
    \@param first The first date to compare.
    \@param second The second date to compare.
    \@returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
        a number greater than 0 if the first date is later.
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DateAdapter.prototype.compareDate = function (first$$1, second) {
        return this.getYear(first$$1) - this.getYear(second) ||
            this.getMonth(first$$1) - this.getMonth(second) ||
            this.getDate(first$$1) - this.getDate(second);
    };
    /**
     * Checks if two dates are equal.
    \@param first The first date to check.
    \@param second The second date to check.
    \@returns {boolean} Whether the two dates are equal.
        Null dates are considered equal to other null dates.
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DateAdapter.prototype.sameDate = function (first$$1, second) {
        return first$$1 && second ? !this.compareDate(first$$1, second) : first$$1 == second;
    };
    /**
     * Clamp the given date between min and max dates.
    \@param date The date to clamp.
    \@param min The minimum value to allow. If null or omitted no min is enforced.
    \@param max The maximum value to allow. If null or omitted no max is enforced.
    \@returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
        otherwise `date`.
     * @param {?} date
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    DateAdapter.prototype.clampDate = function (date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    };
    return DateAdapter;
}());
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
similar to Object.assign.

\@param dest The object which will have properties copied to it.
\@param sources The source objects from which properties will be copied.
 * @param {?} dest
 * @param {...?} sources
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var /** @type {?} */ key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}
/**
 * Whether the browser supports the Intl API.
 */
var SUPPORTS_INTL_API = typeof Intl != 'undefined';
/**
 * The default month names to use if Intl API is not available.
 */
var DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
/**
 * The default date names to use if Intl API is not available.
 */
var DEFAULT_DATE_NAMES = range(31, function (i) { return String(i + 1); });
/**
 * The default day of the week names to use if Intl API is not available.
 */
var DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/**
 * Matches strings that have the form of a valid RFC 3339 string
(https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
because the regex will match strings an with out of bounds month, date, etc.
 */
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    var /** @type {?} */ valuesArray = Array(length);
    for (var /** @type {?} */ i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts the native JS Date for use with cdk-based components that work with dates.
 */
var NativeDateAdapter = (function (_super) {
    __extends(NativeDateAdapter, _super);
    /**
     * @param {?} matDateLocale
     */
    function NativeDateAdapter(matDateLocale) {
        var _this = _super.call(this) || this;
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
        Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
        the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
        will produce `'8/13/1800'`.
         */
        _this.useUtcForDisplay = true;
        _super.prototype.setLocale.call(_this, matDateLocale);
        return _this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getYear = function (date) {
        return date.getFullYear();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getMonth = function (date) {
        return date.getMonth();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getDate = function (date) {
        return date.getDate();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getDayOfWeek = function (date) {
        return date.getDay();
    };
    /**
     * @param {?} style
     * @return {?}
     */
    NativeDateAdapter.prototype.getMonthNames = function (style$$1) {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var /** @type {?} */ dtf_1 = new Intl.DateTimeFormat(this.locale, { month: style$$1 });
            return range(12, function (i) { return _this._stripDirectionalityCharacters(dtf_1.format(new Date(2017, i, 1))); });
        }
        return DEFAULT_MONTH_NAMES[style$$1];
    };
    /**
     * @return {?}
     */
    NativeDateAdapter.prototype.getDateNames = function () {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var /** @type {?} */ dtf_2 = new Intl.DateTimeFormat(this.locale, { day: 'numeric' });
            return range(31, function (i) { return _this._stripDirectionalityCharacters(dtf_2.format(new Date(2017, 0, i + 1))); });
        }
        return DEFAULT_DATE_NAMES;
    };
    /**
     * @param {?} style
     * @return {?}
     */
    NativeDateAdapter.prototype.getDayOfWeekNames = function (style$$1) {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var /** @type {?} */ dtf_3 = new Intl.DateTimeFormat(this.locale, { weekday: style$$1 });
            return range(7, function (i) { return _this._stripDirectionalityCharacters(dtf_3.format(new Date(2017, 0, i + 1))); });
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style$$1];
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getYearName = function (date) {
        if (SUPPORTS_INTL_API) {
            var /** @type {?} */ dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric' });
            return this._stripDirectionalityCharacters(dtf.format(date));
        }
        return String(this.getYear(date));
    };
    /**
     * @return {?}
     */
    NativeDateAdapter.prototype.getFirstDayOfWeek = function () {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getNumDaysInMonth = function (date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.clone = function (date) {
        return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date));
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.createDate = function (year, month, date) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        var /** @type {?} */ result = this._createDateWithOverflow(year, month, date);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() != month) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    /**
     * @return {?}
     */
    NativeDateAdapter.prototype.today = function () {
        return new Date();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NativeDateAdapter.prototype.parse = function (value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        if (typeof value == 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    };
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    NativeDateAdapter.prototype.format = function (date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            if (this.useUtcForDisplay) {
                date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
                displayFormat = extendObject({}, displayFormat, { timeZone: 'utc' });
            }
            var /** @type {?} */ dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(dtf.format(date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    NativeDateAdapter.prototype.addCalendarYears = function (date, years) {
        return this.addCalendarMonths(date, years * 12);
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    NativeDateAdapter.prototype.addCalendarMonths = function (date, months) {
        var /** @type {?} */ newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    NativeDateAdapter.prototype.addCalendarDays = function (date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.toIso8601 = function (date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    };
    /**
     * @param {?} iso8601String
     * @return {?}
     */
    NativeDateAdapter.prototype.fromIso8601 = function (iso8601String) {
        // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
        // string is the right format first.
        if (ISO_8601_REGEX.test(iso8601String)) {
            var /** @type {?} */ d = new Date(iso8601String);
            if (this.isValid(d)) {
                return d;
            }
        }
        return null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    NativeDateAdapter.prototype.isDateInstance = function (obj) {
        return obj instanceof Date;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.isValid = function (date) {
        return !isNaN(date.getTime());
    };
    /**
     * Creates a date but allows the month and date to overflow.
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype._createDateWithOverflow = function (year, month, date) {
        var /** @type {?} */ result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    };
    /**
     * Pads a number to make it two digits.
    \@param n The number to pad.
    \@returns The padded number.
     * @param {?} n
     * @return {?}
     */
    NativeDateAdapter.prototype._2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
    other browsers do not. We remove them to make output consistent and because they interfere with
    date parsing.
    \@param str The string to strip direction characters from.
    \@returns The stripped string.
     * @param {?} str
     * @return {?}
     */
    NativeDateAdapter.prototype._stripDirectionalityCharacters = function (str) {
        return str.replace(/[\u200e\u200f]/g, '');
    };
    return NativeDateAdapter;
}(DateAdapter));
NativeDateAdapter.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
NativeDateAdapter.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MAT_DATE_LOCALE,] },] },
]; };
var MD_DATE_FORMATS = new _angular_core.InjectionToken('md-date-formats');
var MD_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: null,
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var NativeDateModule = (function () {
    function NativeDateModule() {
    }
    return NativeDateModule;
}());
NativeDateModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                providers: [
                    { provide: DateAdapter, useClass: NativeDateAdapter },
                    MAT_DATE_LOCALE_PROVIDER
                ],
            },] },
];
/**
 * @nocollapse
 */
NativeDateModule.ctorParameters = function () { return []; };
var MdNativeDateModule = (function () {
    function MdNativeDateModule() {
    }
    return MdNativeDateModule;
}());
MdNativeDateModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [NativeDateModule],
                providers: [{ provide: MD_DATE_FORMATS, useValue: MD_NATIVE_DATE_FORMATS }],
            },] },
];
/**
 * @nocollapse
 */
MdNativeDateModule.ctorParameters = function () { return []; };
/**
 * Injection token that can be used to specify the global error options.
 */
var MD_ERROR_GLOBAL_OPTIONS = new _angular_core.InjectionToken('md-error-global-options');
var GestureConfig = (function (_super) {
    __extends(GestureConfig, _super);
    function GestureConfig() {
        var _this = _super.call(this) || this;
        _this._hammer = typeof window !== 'undefined' ? ((window)).Hammer : null;
        /* List of new event names to add to the gesture support list */
        _this.events = _this._hammer ? [
            'longpress',
            'slide',
            'slidestart',
            'slideend',
            'slideright',
            'slideleft'
        ] : [];
        if (!_this._hammer && _angular_core.isDevMode()) {
            console.warn('Could not find HammerJS. Certain Angular Material ' +
                'components may not work correctly.');
        }
        return _this;
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
    
    Our gesture names come from the Material Design gestures spec:
    https://www.google.com/design/spec/patterns/gestures.html#gestures-touch-mechanics
    
    More information on default recognizers can be found in Hammer docs:
    http://hammerjs.github.io/recognizer-pan/
    http://hammerjs.github.io/recognizer-press/
    
    \@param element Element to which to assign the new HammerJS gestures.
    \@returns Newly-created HammerJS instance.
     * @param {?} element
     * @return {?}
     */
    GestureConfig.prototype.buildHammer = function (element) {
        var /** @type {?} */ mc = new this._hammer(element);
        // Default Hammer Recognizers.
        var /** @type {?} */ pan = new this._hammer.Pan();
        var /** @type {?} */ swipe = new this._hammer.Swipe();
        var /** @type {?} */ press = new this._hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team
        var /** @type {?} */ slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        var /** @type {?} */ longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, slide, longpress]);
        return (mc);
    };
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    GestureConfig.prototype._createRecognizer = function (base, options) {
        var inheritances = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            inheritances[_i - 2] = arguments[_i];
        }
        var /** @type {?} */ recognizer = new ((base.constructor))(options);
        inheritances.push(base);
        inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
        return recognizer;
    };
    return GestureConfig;
}(_angular_platformBrowser.HammerGestureConfig));
GestureConfig.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
GestureConfig.ctorParameters = function () { return []; };
/**
 * Shared directive to count lines inside a text area, such as a list item.
Line elements can be extracted with a \@ContentChildren(MdLine) query, then
counted by checking the query list's length.
 */
var MdLine = (function () {
    function MdLine() {
    }
    return MdLine;
}());
MdLine.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[md-line], [mat-line], [mdLine], [matLine]',
                host: { 'class': 'mat-line' }
            },] },
];
/**
 * @nocollapse
 */
MdLine.ctorParameters = function () { return []; };
var MdLineModule = (function () {
    function MdLineModule() {
    }
    return MdLineModule;
}());
MdLineModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [MdCommonModule],
                exports: [MdLine, MdCommonModule],
                declarations: [MdLine],
            },] },
];
/**
 * @nocollapse
 */
MdLineModule.ctorParameters = function () { return []; };
var RippleState = {};
RippleState.FADING_IN = 0;
RippleState.VISIBLE = 1;
RippleState.FADING_OUT = 2;
RippleState.HIDDEN = 3;
RippleState[RippleState.FADING_IN] = "FADING_IN";
RippleState[RippleState.VISIBLE] = "VISIBLE";
RippleState[RippleState.FADING_OUT] = "FADING_OUT";
RippleState[RippleState.HIDDEN] = "HIDDEN";
/**
 * Reference to a previously launched ripple element.
 */
var RippleRef = (function () {
    /**
     * @param {?} _renderer
     * @param {?} element
     * @param {?} config
     */
    function RippleRef(_renderer, element, config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple reference.
         */
        this.state = RippleState.HIDDEN;
    }
    /**
     * Fades out the ripple element.
     * @return {?}
     */
    RippleRef.prototype.fadeOut = function () {
        this._renderer.fadeOutRipple(this);
    };
    return RippleRef;
}());
/**
 * Fade-in duration for the ripples. Can be modified with the speedFactor option.
 */
var RIPPLE_FADE_IN_DURATION = 450;
/**
 * Fade-out duration for the ripples in milliseconds. This can't be modified by the speedFactor.
 */
var RIPPLE_FADE_OUT_DURATION = 400;
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
The constructor takes a reference to the ripple directive's host element and a map of DOM
event handlers to be installed on the element that triggers ripple animations.
This will eventually become a custom renderer once Angular support exists.
\@docs-private
 */
var RippleRenderer = (function () {
    /**
     * @param {?} elementRef
     * @param {?} _ngZone
     * @param {?} _ruler
     * @param {?} platform
     */
    function RippleRenderer(elementRef, _ngZone, _ruler, platform) {
        this._ngZone = _ngZone;
        this._ruler = _ruler;
        /**
         * Whether the mouse is currently down or not.
         */
        this._isMousedown = false;
        /**
         * Events to be registered on the trigger element.
         */
        this._triggerEvents = new Map();
        /**
         * Set of currently active ripple references.
         */
        this._activeRipples = new Set();
        /**
         * Ripple config for all ripples created by events.
         */
        this.rippleConfig = {};
        /**
         * Whether mouse ripples should be created or not.
         */
        this.rippleDisabled = false;
        // Only do anything if we're on the browser.
        if (platform.isBrowser) {
            this._containerElement = elementRef.nativeElement;
            // Specify events which need to be registered on the trigger.
            this._triggerEvents.set('mousedown', this.onMousedown.bind(this));
            this._triggerEvents.set('mouseup', this.onMouseup.bind(this));
            this._triggerEvents.set('mouseleave', this.onMouseLeave.bind(this));
            // By default use the host element as trigger element.
            this.setTriggerElement(this._containerElement);
        }
    }
    /**
     * Fades in a ripple at the given coordinates.
     * @param {?} pageX
     * @param {?} pageY
     * @param {?=} config
     * @return {?}
     */
    RippleRenderer.prototype.fadeInRipple = function (pageX, pageY, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var /** @type {?} */ containerRect = this._containerElement.getBoundingClientRect();
        if (config.centered) {
            pageX = containerRect.left + containerRect.width / 2;
            pageY = containerRect.top + containerRect.height / 2;
        }
        else {
            // Subtract scroll values from the coordinates because calculations below
            // are always relative to the viewport rectangle.
            var /** @type {?} */ scrollPosition = this._ruler.getViewportScrollPosition();
            pageX -= scrollPosition.left;
            pageY -= scrollPosition.top;
        }
        var /** @type {?} */ radius = config.radius || distanceToFurthestCorner(pageX, pageY, containerRect);
        var /** @type {?} */ duration = RIPPLE_FADE_IN_DURATION * (1 / (config.speedFactor || 1));
        var /** @type {?} */ offsetX = pageX - containerRect.left;
        var /** @type {?} */ offsetY = pageY - containerRect.top;
        var /** @type {?} */ ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = offsetX - radius + "px";
        ripple.style.top = offsetY - radius + "px";
        ripple.style.height = radius * 2 + "px";
        ripple.style.width = radius * 2 + "px";
        // If the color is not set, the default CSS color will be used.
        ripple.style.backgroundColor = config.color || null;
        ripple.style.transitionDuration = duration + "ms";
        this._containerElement.appendChild(ripple);
        // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.
        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        // Exposed reference to the ripple that will be returned.
        var /** @type {?} */ rippleRef = new RippleRef(this, ripple, config);
        rippleRef.state = RippleState.FADING_IN;
        // Add the ripple reference to the list of all active ripples.
        this._activeRipples.add(rippleRef);
        // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
        this.runTimeoutOutsideZone(function () {
            rippleRef.state = RippleState.VISIBLE;
            if (!config.persistent && !_this._isMousedown) {
                rippleRef.fadeOut();
            }
        }, duration);
        return rippleRef;
    };
    /**
     * Fades out a ripple reference.
     * @param {?} rippleRef
     * @return {?}
     */
    RippleRenderer.prototype.fadeOutRipple = function (rippleRef) {
        // For ripples that are not active anymore, don't re-un the fade-out animation.
        if (!this._activeRipples.delete(rippleRef)) {
            return;
        }
        var /** @type {?} */ rippleEl = rippleRef.element;
        rippleEl.style.transitionDuration = RIPPLE_FADE_OUT_DURATION + "ms";
        rippleEl.style.opacity = '0';
        rippleRef.state = RippleState.FADING_OUT;
        // Once the ripple faded out, the ripple can be safely removed from the DOM.
        this.runTimeoutOutsideZone(function () {
            rippleRef.state = RippleState.HIDDEN; /** @type {?} */
            ((rippleEl.parentNode)).removeChild(rippleEl);
        }, RIPPLE_FADE_OUT_DURATION);
    };
    /**
     * Fades out all currently active ripples.
     * @return {?}
     */
    RippleRenderer.prototype.fadeOutAll = function () {
        this._activeRipples.forEach(function (ripple) { return ripple.fadeOut(); });
    };
    /**
     * Sets the trigger element and registers the mouse events.
     * @param {?} element
     * @return {?}
     */
    RippleRenderer.prototype.setTriggerElement = function (element) {
        var _this = this;
        // Remove all previously register event listeners from the trigger element.
        if (this._triggerElement) {
            this._triggerEvents.forEach(function (fn, type) {
                ((_this._triggerElement)).removeEventListener(type, fn);
            });
        }
        if (element) {
            // If the element is not null, register all event listeners on the trigger element.
            this._ngZone.runOutsideAngular(function () {
                _this._triggerEvents.forEach(function (fn, type) { return element.addEventListener(type, fn); });
            });
        }
        this._triggerElement = element;
    };
    /**
     * Listener being called on mousedown event.
     * @param {?} event
     * @return {?}
     */
    RippleRenderer.prototype.onMousedown = function (event) {
        if (!this.rippleDisabled) {
            this._isMousedown = true;
            this.fadeInRipple(event.pageX, event.pageY, this.rippleConfig);
        }
    };
    /**
     * Listener being called on mouseup event.
     * @return {?}
     */
    RippleRenderer.prototype.onMouseup = function () {
        this._isMousedown = false;
        // Fade-out all ripples that are completely visible and not persistent.
        this._activeRipples.forEach(function (ripple) {
            if (!ripple.config.persistent && ripple.state === RippleState.VISIBLE) {
                ripple.fadeOut();
            }
        });
    };
    /**
     * Listener being called on mouseleave event.
     * @return {?}
     */
    RippleRenderer.prototype.onMouseLeave = function () {
        if (this._isMousedown) {
            this.onMouseup();
        }
    };
    /**
     * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    RippleRenderer.prototype.runTimeoutOutsideZone = function (fn, delay) {
        if (delay === void 0) { delay = 0; }
        this._ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    return RippleRenderer;
}());
/**
 * @param {?} element
 * @return {?}
 */
function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 * @param {?} x
 * @param {?} y
 * @param {?} rect
 * @return {?}
 */
function distanceToFurthestCorner(x, y, rect) {
    var /** @type {?} */ distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    var /** @type {?} */ distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}
/**
 * Injection token that can be used to specify the global ripple options.
 */
var MD_RIPPLE_GLOBAL_OPTIONS = new _angular_core.InjectionToken('md-ripple-global-options');
var MdRipple = (function () {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} ruler
     * @param {?} platform
     * @param {?} globalOptions
     */
    function MdRipple(elementRef, ngZone, ruler, platform, globalOptions) {
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
        will be the distance from the center of the ripple to the furthest corner of the host element's
        bounding rectangle.
         */
        this.radius = 0;
        /**
         * If set, the normal duration of ripple animations is divided by this value. For example,
        setting it to 0.5 will cause the animations to take twice as long.
        A changed speedFactor will not modify the fade-out duration of the ripples.
         */
        this.speedFactor = 1;
        this._rippleRenderer = new RippleRenderer(elementRef, ngZone, ruler, platform);
        this._globalOptions = globalOptions ? globalOptions : {};
        this._updateRippleRenderer();
    }
    Object.defineProperty(MdRipple.prototype, "_matRippleTrigger", {
        /**
         * @return {?}
         */
        get: function () { return this.trigger; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this.trigger = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRipple.prototype, "_matRippleCentered", {
        /**
         * @return {?}
         */
        get: function () { return this.centered; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this.centered = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRipple.prototype, "_matRippleDisabled", {
        /**
         * @return {?}
         */
        get: function () { return this.disabled; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this.disabled = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRipple.prototype, "_matRippleRadius", {
        /**
         * @return {?}
         */
        get: function () { return this.radius; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this.radius = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRipple.prototype, "_matRippleSpeedFactor", {
        /**
         * @return {?}
         */
        get: function () { return this.speedFactor; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this.speedFactor = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRipple.prototype, "_matRippleColor", {
        /**
         * @return {?}
         */
        get: function () { return this.color; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this.color = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRipple.prototype, "_matRippleUnbounded", {
        /**
         * @return {?}
         */
        get: function () { return this.unbounded; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this.unbounded = v; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    MdRipple.prototype.ngOnChanges = function (changes) {
        if ((changes['trigger'] || changes['_matRippleTrigger']) && this.trigger) {
            this._rippleRenderer.setTriggerElement(this.trigger);
        }
        this._updateRippleRenderer();
    };
    /**
     * @return {?}
     */
    MdRipple.prototype.ngOnDestroy = function () {
        // Set the trigger element to null to cleanup all listeners.
        this._rippleRenderer.setTriggerElement(null);
    };
    /**
     * Launches a manual ripple at the specified position.
     * @param {?} pageX
     * @param {?} pageY
     * @param {?=} config
     * @return {?}
     */
    MdRipple.prototype.launch = function (pageX, pageY, config) {
        if (config === void 0) { config = this.rippleConfig; }
        return this._rippleRenderer.fadeInRipple(pageX, pageY, config);
    };
    /**
     * Fades out all currently showing ripple elements.
     * @return {?}
     */
    MdRipple.prototype.fadeOutAll = function () {
        this._rippleRenderer.fadeOutAll();
    };
    Object.defineProperty(MdRipple.prototype, "rippleConfig", {
        /**
         * Ripple configuration from the directive's input values.
         * @return {?}
         */
        get: function () {
            return {
                centered: this.centered,
                speedFactor: this.speedFactor * (this._globalOptions.baseSpeedFactor || 1),
                radius: this.radius,
                color: this.color
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the ripple renderer with the latest ripple configuration.
     * @return {?}
     */
    MdRipple.prototype._updateRippleRenderer = function () {
        this._rippleRenderer.rippleDisabled = this._globalOptions.disabled || this.disabled;
        this._rippleRenderer.rippleConfig = this.rippleConfig;
    };
    return MdRipple;
}());
MdRipple.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[md-ripple], [mat-ripple], [mdRipple], [matRipple]',
                exportAs: 'mdRipple, matRipple',
                host: {
                    'class': 'mat-ripple',
                    '[class.mat-ripple-unbounded]': 'unbounded'
                }
            },] },
];
/**
 * @nocollapse
 */
MdRipple.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: _angular_core.NgZone, },
    { type: _angular_cdk_scrolling.ViewportRuler, },
    { type: _angular_cdk_platform.Platform, },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MD_RIPPLE_GLOBAL_OPTIONS,] },] },
]; };
MdRipple.propDecorators = {
    'trigger': [{ type: _angular_core.Input, args: ['mdRippleTrigger',] },],
    'centered': [{ type: _angular_core.Input, args: ['mdRippleCentered',] },],
    'disabled': [{ type: _angular_core.Input, args: ['mdRippleDisabled',] },],
    'radius': [{ type: _angular_core.Input, args: ['mdRippleRadius',] },],
    'speedFactor': [{ type: _angular_core.Input, args: ['mdRippleSpeedFactor',] },],
    'color': [{ type: _angular_core.Input, args: ['mdRippleColor',] },],
    'unbounded': [{ type: _angular_core.Input, args: ['mdRippleUnbounded',] },],
    '_matRippleTrigger': [{ type: _angular_core.Input, args: ['matRippleTrigger',] },],
    '_matRippleCentered': [{ type: _angular_core.Input, args: ['matRippleCentered',] },],
    '_matRippleDisabled': [{ type: _angular_core.Input, args: ['matRippleDisabled',] },],
    '_matRippleRadius': [{ type: _angular_core.Input, args: ['matRippleRadius',] },],
    '_matRippleSpeedFactor': [{ type: _angular_core.Input, args: ['matRippleSpeedFactor',] },],
    '_matRippleColor': [{ type: _angular_core.Input, args: ['matRippleColor',] },],
    '_matRippleUnbounded': [{ type: _angular_core.Input, args: ['matRippleUnbounded',] },],
};
var MdRippleModule = (function () {
    function MdRippleModule() {
    }
    return MdRippleModule;
}());
MdRippleModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [MdCommonModule, _angular_cdk_platform.PlatformModule, _angular_cdk_scrolling.ScrollDispatchModule],
                exports: [MdRipple, MdCommonModule],
                declarations: [MdRipple],
                providers: [_angular_cdk_scrolling.VIEWPORT_RULER_PROVIDER],
            },] },
];
/**
 * @nocollapse
 */
MdRippleModule.ctorParameters = function () { return []; };
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
Meant to be used when the checkbox is purely decorative and a large number of them will be
included, such as for the options in a multi-select. Uses no SVGs or complex animations.
Note that theming is meant to be handled by the parent element, e.g.
`mat-primary .mat-pseudo-checkbox`.

Note that this component will be completely invisible to screen-reader users. This is *not*
interchangeable with <md-checkbox> and should *not* be used if the user would directly interact
with the checkbox. The pseudo-checkbox should only be used as an implementation detail of
more complex components that appropriately handle selected / checked state.
\@docs-private
 */
var MdPseudoCheckbox = (function () {
    function MdPseudoCheckbox() {
        /**
         * Display state of the checkbox.
         */
        this.state = 'unchecked';
        /**
         * Whether the checkbox is disabled.
         */
        this.disabled = false;
    }
    return MdPseudoCheckbox;
}());
MdPseudoCheckbox.decorators = [
    { type: _angular_core.Component, args: [{ encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                selector: 'md-pseudo-checkbox, mat-pseudo-checkbox',
                styles: [".mat-pseudo-checkbox{width:20px;height:20px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:9px;left:2px;width:16px;opacity:1}.mat-pseudo-checkbox-checked::after{top:5px;left:3px;width:12px;height:5px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1}"],
                template: '',
                host: {
                    'class': 'mat-pseudo-checkbox',
                    '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
                    '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
                    '[class.mat-pseudo-checkbox-disabled]': 'disabled',
                },
            },] },
];
/**
 * @nocollapse
 */
MdPseudoCheckbox.ctorParameters = function () { return []; };
MdPseudoCheckbox.propDecorators = {
    'state': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
};
var MdPseudoCheckboxModule = (function () {
    function MdPseudoCheckboxModule() {
    }
    return MdPseudoCheckboxModule;
}());
MdPseudoCheckboxModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                exports: [MdPseudoCheckbox],
                declarations: [MdPseudoCheckbox]
            },] },
];
/**
 * @nocollapse
 */
MdPseudoCheckboxModule.ctorParameters = function () { return []; };
/**
 * \@docs-private
 */
var MdOptgroupBase = (function () {
    function MdOptgroupBase() {
    }
    return MdOptgroupBase;
}());
var _MdOptgroupMixinBase = mixinDisabled(MdOptgroupBase);
// Counter for unique group ids.
var _uniqueOptgroupIdCounter = 0;
/**
 * Component that is used to group instances of `md-option`.
 */
var MdOptgroup = (function (_super) {
    __extends(MdOptgroup, _super);
    function MdOptgroup() {
        var _this = _super.apply(this, arguments) || this;
        /**
         * Unique id for the underlying label.
         */
        _this._labelId = "mat-optgroup-label-" + _uniqueOptgroupIdCounter++;
        return _this;
    }
    return MdOptgroup;
}(_MdOptgroupMixinBase));
MdOptgroup.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'md-optgroup, mat-optgroup',
                template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}</label><ng-content select=\"md-option, mat-option\"></ng-content>",
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                inputs: ['disabled'],
                host: {
                    'class': 'mat-optgroup',
                    'role': 'group',
                    '[class.mat-optgroup-disabled]': 'disabled',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-labelledby]': '_labelId',
                }
            },] },
];
/**
 * @nocollapse
 */
MdOptgroup.ctorParameters = function () { return []; };
MdOptgroup.propDecorators = {
    'label': [{ type: _angular_core.Input },],
};
/**
 * Option IDs need to be unique across components, so this counter exists outside of
the component definition.
 */
var _uniqueIdCounter = 0;
/**
 * Event object emitted by MdOption when selected or deselected.
 */
var MdOptionSelectionChange = (function () {
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    function MdOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return MdOptionSelectionChange;
}());
/**
 * Single option inside of a `<md-select>` element.
 */
var MdOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} group
     */
    function MdOption(_element, _changeDetectorRef, group) {
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._multiple = false;
        this._disableRipple = false;
        /**
         * Whether the option is disabled.
         */
        this._disabled = false;
        this._id = "md-option-" + _uniqueIdCounter++;
        /**
         * Event emitted when the option is selected or deselected.
         */
        this.onSelectionChange = new _angular_core.EventEmitter();
    }
    Object.defineProperty(MdOption.prototype, "multiple", {
        /**
         * Whether the wrapping component is in multiple selection mode.
         * @return {?}
         */
        get: function () { return this._multiple; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value !== this._multiple) {
                this._multiple = value;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "id", {
        /**
         * The unique ID of the option.
         * @return {?}
         */
        get: function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "selected", {
        /**
         * Whether or not the option is currently selected.
         * @return {?}
         */
        get: function () { return this._selected; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "disabled", {
        /**
         * Whether the option is disabled.
         * @return {?}
         */
        get: function () { return (this.group && this.group.disabled) || this._disabled; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) { this._disabled = _angular_cdk_coercion.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "disableRipple", {
        /**
         * Whether ripples for the option are disabled.
         * @return {?}
         */
        get: function () { return this._disableRipple; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._disableRipple = value;
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "active", {
        /**
         * Whether or not the option is currently active and ready to be selected.
        An active option displays styles as if it is focused, but the
        focus is actually retained somewhere else. This comes in handy
        for components like autocomplete where focus must remain on the input.
         * @return {?}
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "viewValue", {
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
        select's trigger.
         * @return {?}
         */
        get: function () {
            // TODO(kara): Add input property alternative for node envs.
            return (this._getHostElement().textContent || '').trim();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the option.
     * @return {?}
     */
    MdOption.prototype.select = function () {
        this._selected = true;
        this._changeDetectorRef.markForCheck();
        this._emitSelectionChangeEvent();
    };
    /**
     * Deselects the option.
     * @return {?}
     */
    MdOption.prototype.deselect = function () {
        this._selected = false;
        this._changeDetectorRef.markForCheck();
        this._emitSelectionChangeEvent();
    };
    /**
     * Sets focus onto this option.
     * @return {?}
     */
    MdOption.prototype.focus = function () {
        var /** @type {?} */ element = this._getHostElement();
        if (typeof element.focus === 'function') {
            element.focus();
        }
    };
    /**
     * This method sets display styles on the option to make it appear
    active. This is used by the ActiveDescendantKeyManager so key
    events will display the proper options as active on arrow key events.
     * @return {?}
     */
    MdOption.prototype.setActiveStyles = function () {
        if (!this._active) {
            this._active = true;
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * This method removes display styles on the option that made it appear
    active. This is used by the ActiveDescendantKeyManager so key
    events will display the proper options as active on arrow key events.
     * @return {?}
     */
    MdOption.prototype.setInactiveStyles = function () {
        if (this._active) {
            this._active = false;
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    MdOption.prototype.getLabel = function () {
        return this.viewValue;
    };
    /**
     * Ensures the option is selected when activated from the keyboard.
     * @param {?} event
     * @return {?}
     */
    MdOption.prototype._handleKeydown = function (event) {
        if (event.keyCode === _angular_cdk_keycodes.ENTER || event.keyCode === _angular_cdk_keycodes.SPACE) {
            this._selectViaInteraction();
            // Prevent the page from scrolling down and form submits.
            event.preventDefault();
        }
    };
    /**
     * Selects the option while indicating the selection came from the user. Used to
    determine if the select's view -> model callback should be invoked.
     * @return {?}
     */
    MdOption.prototype._selectViaInteraction = function () {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent(true);
        }
    };
    /**
     * Returns the correct tabindex for the option depending on disabled state.
     * @return {?}
     */
    MdOption.prototype._getTabIndex = function () {
        return this.disabled ? '-1' : '0';
    };
    /**
     * Gets the host DOM element.
     * @return {?}
     */
    MdOption.prototype._getHostElement = function () {
        return this._element.nativeElement;
    };
    /**
     * Emits the selection change event.
     * @param {?=} isUserInput
     * @return {?}
     */
    MdOption.prototype._emitSelectionChangeEvent = function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.onSelectionChange.emit(new MdOptionSelectionChange(this, isUserInput));
    };
    /**
     * Counts the amount of option group labels that precede the specified option.
    \@param optionIndex Index of the option at which to start counting.
    \@param options Flat list of all of the options.
    \@param optionGroups Flat list of all of the option groups.
     * @param {?} optionIndex
     * @param {?} options
     * @param {?} optionGroups
     * @return {?}
     */
    MdOption.countGroupLabelsBeforeOption = function (optionIndex, options, optionGroups) {
        if (optionGroups.length) {
            var /** @type {?} */ optionsArray = options.toArray();
            var /** @type {?} */ groups = optionGroups.toArray();
            var /** @type {?} */ groupCounter = 0;
            for (var /** @type {?} */ i = 0; i < optionIndex + 1; i++) {
                if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
                    groupCounter++;
                }
            }
            return groupCounter;
        }
        return 0;
    };
    return MdOption;
}());
MdOption.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'md-option, mat-option',
                host: {
                    'role': 'option',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[class.mat-selected]': 'selected',
                    '[class.mat-option-multiple]': 'multiple',
                    '[class.mat-active]': 'active',
                    '[id]': 'id',
                    '[attr.aria-selected]': 'selected.toString()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[class.mat-option-disabled]': 'disabled',
                    '(click)': '_selectViaInteraction()',
                    '(keydown)': '_handleKeydown($event)',
                    'class': 'mat-option',
                },
                template: "<span *ngIf=\"multiple\"><mat-pseudo-checkbox class=\"mat-option-pseudo-checkbox\" [state]=\"selected ? 'checked' : ''\" [disabled]=\"disabled\"></mat-pseudo-checkbox></span><span class=\"mat-option-text\"><ng-content></ng-content></span><div class=\"mat-option-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\"></div>",
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdOption.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: _angular_core.ChangeDetectorRef, },
    { type: MdOptgroup, decorators: [{ type: _angular_core.Optional },] },
]; };
MdOption.propDecorators = {
    'value': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'onSelectionChange': [{ type: _angular_core.Output },],
};
var MdOptionModule = (function () {
    function MdOptionModule() {
    }
    return MdOptionModule;
}());
MdOptionModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [MdRippleModule, _angular_common.CommonModule, MdPseudoCheckboxModule],
                exports: [MdOption, MdOptgroup],
                declarations: [MdOption, MdOptgroup]
            },] },
];
/**
 * @nocollapse
 */
MdOptionModule.ctorParameters = function () { return []; };
/**
 * InjectionToken that can be used to specify the global placeholder options.
 */
var MD_PLACEHOLDER_GLOBAL_OPTIONS = new _angular_core.InjectionToken('md-placeholder-global-options');

/**
 * Default color palette for round buttons (md-fab and md-mini-fab)
 */
var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
\@docs-private
 */
var MdButtonCssMatStyler = (function () {
    function MdButtonCssMatStyler() {
    }
    return MdButtonCssMatStyler;
}());
MdButtonCssMatStyler.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: 'button[md-button], button[mat-button], a[md-button], a[mat-button]',
                host: { 'class': 'mat-button' }
            },] },
];
/**
 * @nocollapse
 */
MdButtonCssMatStyler.ctorParameters = function () { return []; };
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
\@docs-private
 */
var MdRaisedButtonCssMatStyler = (function () {
    function MdRaisedButtonCssMatStyler() {
    }
    return MdRaisedButtonCssMatStyler;
}());
MdRaisedButtonCssMatStyler.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: 'button[md-raised-button], button[mat-raised-button], ' +
                    'a[md-raised-button], a[mat-raised-button]',
                host: { 'class': 'mat-raised-button' }
            },] },
];
/**
 * @nocollapse
 */
MdRaisedButtonCssMatStyler.ctorParameters = function () { return []; };
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
\@docs-private
 */
var MdIconButtonCssMatStyler = (function () {
    function MdIconButtonCssMatStyler() {
    }
    return MdIconButtonCssMatStyler;
}());
MdIconButtonCssMatStyler.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: 'button[md-icon-button], button[mat-icon-button], a[md-icon-button], a[mat-icon-button]',
                host: { 'class': 'mat-icon-button' }
            },] },
];
/**
 * @nocollapse
 */
MdIconButtonCssMatStyler.ctorParameters = function () { return []; };
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
\@docs-private
 */
var MdFab = (function () {
    /**
     * @param {?} button
     * @param {?} anchor
     */
    function MdFab(button, anchor) {
        // Set the default color palette for the md-fab components.
        (button || anchor).color = DEFAULT_ROUND_BUTTON_COLOR;
    }
    return MdFab;
}());
MdFab.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: 'button[md-fab], button[mat-fab], a[md-fab], a[mat-fab]',
                host: { 'class': 'mat-fab' }
            },] },
];
/**
 * @nocollapse
 */
MdFab.ctorParameters = function () { return [
    { type: MdButton, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional }, { type: _angular_core.Inject, args: [_angular_core.forwardRef(function () { return MdButton; }),] },] },
    { type: MdAnchor, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional }, { type: _angular_core.Inject, args: [_angular_core.forwardRef(function () { return MdAnchor; }),] },] },
]; };
/**
 * Directive that targets mini-fab buttons and anchors. It's used to apply the `mat-` class
to all mini-fab buttons and also is responsible for setting the default color palette.
\@docs-private
 */
var MdMiniFab = (function () {
    /**
     * @param {?} button
     * @param {?} anchor
     */
    function MdMiniFab(button, anchor) {
        // Set the default color palette for the md-mini-fab components.
        (button || anchor).color = DEFAULT_ROUND_BUTTON_COLOR;
    }
    return MdMiniFab;
}());
MdMiniFab.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: 'button[md-mini-fab], button[mat-mini-fab], a[md-mini-fab], a[mat-mini-fab]',
                host: { 'class': 'mat-mini-fab' }
            },] },
];
/**
 * @nocollapse
 */
MdMiniFab.ctorParameters = function () { return [
    { type: MdButton, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional }, { type: _angular_core.Inject, args: [_angular_core.forwardRef(function () { return MdButton; }),] },] },
    { type: MdAnchor, decorators: [{ type: _angular_core.Self }, { type: _angular_core.Optional }, { type: _angular_core.Inject, args: [_angular_core.forwardRef(function () { return MdAnchor; }),] },] },
]; };
/**
 * \@docs-private
 */
var MdButtonBase = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function MdButtonBase(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    return MdButtonBase;
}());
var _MdButtonMixinBase = mixinColor(mixinDisabled(mixinDisableRipple(MdButtonBase)));
/**
 * Material design button.
 */
var MdButton = (function (_super) {
    __extends(MdButton, _super);
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} _platform
     * @param {?} _focusMonitor
     */
    function MdButton(renderer, elementRef, _platform, _focusMonitor) {
        var _this = _super.call(this, renderer, elementRef) || this;
        _this._platform = _platform;
        _this._focusMonitor = _focusMonitor;
        /**
         * Whether the button is round.
         */
        _this._isRoundButton = _this._hasAttributeWithPrefix('fab', 'mini-fab');
        /**
         * Whether the button is icon button.
         */
        _this._isIconButton = _this._hasAttributeWithPrefix('icon-button');
        _this._focusMonitor.monitor(_this._elementRef.nativeElement, _this._renderer, true);
        return _this;
    }
    /**
     * @return {?}
     */
    MdButton.prototype.ngOnDestroy = function () {
        this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
    };
    /**
     * Focuses the button.
     * @return {?}
     */
    MdButton.prototype.focus = function () {
        this._getHostElement().focus();
    };
    /**
     * @return {?}
     */
    MdButton.prototype._getHostElement = function () {
        return this._elementRef.nativeElement;
    };
    /**
     * @return {?}
     */
    MdButton.prototype._isRippleDisabled = function () {
        return this.disableRipple || this.disabled;
    };
    /**
     * Gets whether the button has one of the given attributes
    with either an 'md-' or 'mat-' prefix.
     * @param {...?} unprefixedAttributeNames
     * @return {?}
     */
    MdButton.prototype._hasAttributeWithPrefix = function () {
        var _this = this;
        var unprefixedAttributeNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            unprefixedAttributeNames[_i] = arguments[_i];
        }
        // If not on the browser, say that there are none of the attributes present.
        // Since these only affect how the ripple displays (and ripples only happen on the client),
        // detecting these attributes isn't necessary when not on the browser.
        if (!this._platform.isBrowser) {
            return false;
        }
        return unprefixedAttributeNames.some(function (suffix) {
            var /** @type {?} */ el = _this._getHostElement();
            return el.hasAttribute('md-' + suffix) || el.hasAttribute('mat-' + suffix);
        });
    };
    return MdButton;
}(_MdButtonMixinBase));
MdButton.decorators = [
    { type: _angular_core.Component, args: [{ selector: "button[md-button], button[md-raised-button], button[md-icon-button],\n             button[md-fab], button[md-mini-fab],\n             button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab]",
                host: {
                    '[disabled]': 'disabled || null',
                },
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div mat-ripple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"_isRoundButton || _isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"_isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                styles: [".mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px}[disabled].mat-button,[disabled].mat-fab,[disabled].mat-icon-button,[disabled].mat-mini-fab,[disabled].mat-raised-button{cursor:default}.cdk-keyboard-focused.mat-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-icon-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-mini-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-raised-button .mat-button-focus-overlay{opacity:1}.mat-button::-moz-focus-inner,.mat-fab::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-mini-fab::-moz-focus-inner,.mat-raised-button::-moz-focus-inner{border:0}.mat-fab,.mat-mini-fab,.mat-raised-button{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-fab:not([disabled]):active,.mat-mini-fab:not([disabled]):active,.mat-raised-button:not([disabled]):active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}[disabled].mat-fab,[disabled].mat-mini-fab,[disabled].mat-raised-button{box-shadow:none}.mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{transition:none;opacity:0}.mat-button:hover .mat-button-focus-overlay{opacity:1}.mat-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button,.mat-icon-button,.mat-raised-button{color:currentColor}.mat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*{vertical-align:middle}.mat-button-focus-overlay,.mat-button-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-focus-overlay{background-color:rgba(0,0,0,.12);border-radius:inherit;opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}@media screen and (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}@media screen and (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                inputs: ['disabled', 'disableRipple', 'color'],
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdButton.ctorParameters = function () { return [
    { type: _angular_core.Renderer2, },
    { type: _angular_core.ElementRef, },
    { type: _angular_cdk_platform.Platform, },
    { type: _angular_cdk_a11y.FocusMonitor, },
]; };
/**
 * Raised Material design button.
 */
var MdAnchor = (function (_super) {
    __extends(MdAnchor, _super);
    /**
     * @param {?} platform
     * @param {?} focusMonitor
     * @param {?} elementRef
     * @param {?} renderer
     */
    function MdAnchor(platform, focusMonitor, elementRef, renderer) {
        return _super.call(this, renderer, elementRef, platform, focusMonitor) || this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdAnchor.prototype._haltDisabledEvents = function (event) {
        // A disabled button shouldn't apply any actions
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    };
    return MdAnchor;
}(MdButton));
MdAnchor.decorators = [
    { type: _angular_core.Component, args: [{ selector: "a[md-button], a[md-raised-button], a[md-icon-button], a[md-fab], a[md-mini-fab],\n             a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab], a[mat-mini-fab]",
                host: {
                    '[attr.tabindex]': 'disabled ? -1 : 0',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '(click)': '_haltDisabledEvents($event)',
                },
                inputs: ['disabled', 'disableRipple', 'color'],
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div mat-ripple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"_isRoundButton || _isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"_isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                styles: [".mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px}[disabled].mat-button,[disabled].mat-fab,[disabled].mat-icon-button,[disabled].mat-mini-fab,[disabled].mat-raised-button{cursor:default}.cdk-keyboard-focused.mat-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-icon-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-mini-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-raised-button .mat-button-focus-overlay{opacity:1}.mat-button::-moz-focus-inner,.mat-fab::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-mini-fab::-moz-focus-inner,.mat-raised-button::-moz-focus-inner{border:0}.mat-fab,.mat-mini-fab,.mat-raised-button{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-fab:not([disabled]):active,.mat-mini-fab:not([disabled]):active,.mat-raised-button:not([disabled]):active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}[disabled].mat-fab,[disabled].mat-mini-fab,[disabled].mat-raised-button{box-shadow:none}.mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{transition:none;opacity:0}.mat-button:hover .mat-button-focus-overlay{opacity:1}.mat-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button,.mat-icon-button,.mat-raised-button{color:currentColor}.mat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*{vertical-align:middle}.mat-button-focus-overlay,.mat-button-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-focus-overlay{background-color:rgba(0,0,0,.12);border-radius:inherit;opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}@media screen and (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}@media screen and (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
MdAnchor.ctorParameters = function () { return [
    { type: _angular_cdk_platform.Platform, },
    { type: _angular_cdk_a11y.FocusMonitor, },
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer2, },
]; };
var MdButtonModule = (function () {
    function MdButtonModule() {
    }
    return MdButtonModule;
}());
MdButtonModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule,
                    MdRippleModule,
                    MdCommonModule,
                    _angular_cdk_a11y.A11yModule,
                ],
                exports: [
                    MdButton,
                    MdAnchor,
                    MdMiniFab,
                    MdFab,
                    MdCommonModule,
                    MdButtonCssMatStyler,
                    MdRaisedButtonCssMatStyler,
                    MdIconButtonCssMatStyler,
                ],
                declarations: [
                    MdButton,
                    MdAnchor,
                    MdMiniFab,
                    MdFab,
                    MdButtonCssMatStyler,
                    MdRaisedButtonCssMatStyler,
                    MdIconButtonCssMatStyler,
                ],
            },] },
];
/**
 * @nocollapse
 */
MdButtonModule.ctorParameters = function () { return []; };

/**
 * Configuration for opening a modal dialog with the MdDialog service.
 */
var MdDialogConfig = (function () {
    function MdDialogConfig() {
        /**
         * The ARIA role of the dialog element.
         */
        this.role = 'dialog';
        /**
         * Custom class for the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the dialog has a backdrop.
         */
        this.hasBackdrop = true;
        /**
         * Custom class for the backdrop,
         */
        this.backdropClass = '';
        /**
         * Whether the user can use escape or clicking outside to close a modal.
         */
        this.disableClose = false;
        /**
         * Width of the dialog.
         */
        this.width = '';
        /**
         * Height of the dialog.
         */
        this.height = '';
        /**
         * Data being injected into the child component.
         */
        this.data = null;
        /**
         * Layout direction for the dialog's content.
         */
        this.direction = 'ltr';
        /**
         * ID of the element that describes the dialog.
         */
        this.ariaDescribedBy = null;
        // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    }
    return MdDialogConfig;
}());
/**
 * Throws an exception for the case when a ComponentPortal is
attached to a DomPortalHost without an origin.
\@docs-private
 * @return {?}
 */
function throwMdDialogContentAlreadyAttachedError() {
    throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Internal component that wraps user-provided dialog content.
Animation is based on https://material.io/guidelines/motion/choreography.html.
\@docs-private
 */
var MdDialogContainer = (function (_super) {
    __extends(MdDialogContainer, _super);
    /**
     * @param {?} _elementRef
     * @param {?} _focusTrapFactory
     * @param {?} _changeDetectorRef
     * @param {?} _document
     */
    function MdDialogContainer(_elementRef, _focusTrapFactory, _changeDetectorRef, _document) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._focusTrapFactory = _focusTrapFactory;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._document = _document;
        /**
         * Element that was focused before the dialog was opened. Save this to restore upon close.
         */
        _this._elementFocusedBeforeDialogWasOpened = null;
        /**
         * State of the dialog animation.
         */
        _this._state = 'enter';
        /**
         * Emits when an animation state changes.
         */
        _this._animationStateChanged = new _angular_core.EventEmitter();
        /**
         * ID of the element that should be considered as the dialog's label.
         */
        _this._ariaLabelledBy = null;
        /**
         * Whether the container is currently mid-animation.
         */
        _this._isAnimating = false;
        return _this;
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
    \@param portal Portal to be attached as the dialog content.
     * @template T
     * @param {?} portal
     * @return {?}
     */
    MdDialogContainer.prototype.attachComponentPortal = function (portal) {
        if (this._portalHost.hasAttached()) {
            throwMdDialogContentAlreadyAttachedError();
        }
        this._savePreviouslyFocusedElement();
        return this._portalHost.attachComponentPortal(portal);
    };
    /**
     * Attach a TemplatePortal as content to this dialog container.
    \@param portal Portal to be attached as the dialog content.
     * @template C
     * @param {?} portal
     * @return {?}
     */
    MdDialogContainer.prototype.attachTemplatePortal = function (portal) {
        if (this._portalHost.hasAttached()) {
            throwMdDialogContentAlreadyAttachedError();
        }
        this._savePreviouslyFocusedElement();
        return this._portalHost.attachTemplatePortal(portal);
    };
    /**
     * Moves the focus inside the focus trap.
     * @return {?}
     */
    MdDialogContainer.prototype._trapFocus = function () {
        var _this = this;
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        }
        // If were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        this._focusTrap.focusInitialElementWhenReady().then(function (hasMovedFocus) {
            // If we didn't find any focusable elements inside the dialog, focus the
            // container so the user can't tab into other elements behind it.
            if (!hasMovedFocus) {
                _this._elementRef.nativeElement.focus();
            }
        });
    };
    /**
     * Restores focus to the element that was focused before the dialog opened.
     * @return {?}
     */
    MdDialogContainer.prototype._restoreFocus = function () {
        var /** @type {?} */ toFocus = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    };
    /**
     * Saves a reference to the element that was focused before the dialog was opened.
     * @return {?}
     */
    MdDialogContainer.prototype._savePreviouslyFocusedElement = function () {
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = (this._document.activeElement);
        }
    };
    /**
     * Callback, invoked whenever an animation on the host completes.
     * @param {?} event
     * @return {?}
     */
    MdDialogContainer.prototype._onAnimationDone = function (event) {
        if (event.toState === 'enter') {
            this._trapFocus();
        }
        else if (event.toState === 'exit') {
            this._restoreFocus();
        }
        this._animationStateChanged.emit(event);
        this._isAnimating = false;
    };
    /**
     * Callback, invoked when an animation on the host starts.
     * @param {?} event
     * @return {?}
     */
    MdDialogContainer.prototype._onAnimationStart = function (event) {
        this._isAnimating = true;
        this._animationStateChanged.emit(event);
    };
    /**
     * Starts the dialog exit animation.
     * @return {?}
     */
    MdDialogContainer.prototype._startExitAnimation = function () {
        this._state = 'exit';
        // Mark the container for check so it can react if the
        // view container is using OnPush change detection.
        this._changeDetectorRef.markForCheck();
    };
    return MdDialogContainer;
}(_angular_cdk_portal.BasePortalHost));
MdDialogContainer.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'md-dialog-container, mat-dialog-container',
                template: "<ng-template cdkPortalHost></ng-template>",
                styles: [".mat-dialog-container{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:block;padding:24px;border-radius:2px;box-sizing:border-box;overflow:auto;max-width:80vw;outline:0;width:100%;height:100%}@media screen and (-ms-high-contrast:active){.mat-dialog-container{outline:solid 1px}}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:12px 0;display:flex;flex-wrap:wrap}.mat-dialog-actions:last-child{margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button+.mat-button,.mat-dialog-actions .mat-button+.mat-raised-button,.mat-dialog-actions .mat-raised-button+.mat-button,.mat-dialog-actions .mat-raised-button+.mat-raised-button{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button+.mat-button,[dir=rtl] .mat-dialog-actions .mat-button+.mat-raised-button,[dir=rtl] .mat-dialog-actions .mat-raised-button+.mat-button,[dir=rtl] .mat-dialog-actions .mat-raised-button+.mat-raised-button{margin-left:0;margin-right:8px}"],
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                animations: [
                    _angular_animations.trigger('slideDialog', [
                        // Note: The `enter` animation doesn't transition to something like `translate3d(0, 0, 0)
                        // scale(1)`, because for some reason specifying the transform explicitly, causes IE both
                        // to blur the dialog content and decimate the animation performance. Leaving it as `none`
                        // solves both issues.
                        _angular_animations.state('enter', _angular_animations.style({ transform: 'none', opacity: 1 })),
                        _angular_animations.state('void', _angular_animations.style({ transform: 'translate3d(0, 25%, 0) scale(0.9)', opacity: 0 })),
                        _angular_animations.state('exit', _angular_animations.style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
                        _angular_animations.transition('* => *', _angular_animations.animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
                    ])
                ],
                host: {
                    'class': 'mat-dialog-container',
                    'tabindex': '-1',
                    '[attr.role]': '_config?.role',
                    '[attr.aria-labelledby]': '_ariaLabelledBy',
                    '[attr.aria-describedby]': '_config?.ariaDescribedBy || null',
                    '[@slideDialog]': '_state',
                    '(@slideDialog.start)': '_onAnimationStart($event)',
                    '(@slideDialog.done)': '_onAnimationDone($event)',
                },
            },] },
];
/**
 * @nocollapse
 */
MdDialogContainer.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: _angular_cdk_a11y.FocusTrapFactory, },
    { type: _angular_core.ChangeDetectorRef, },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [_angular_platformBrowser.DOCUMENT,] },] },
]; };
MdDialogContainer.propDecorators = {
    '_portalHost': [{ type: _angular_core.ViewChild, args: [_angular_cdk_portal.PortalHostDirective,] },],
};
// TODO(jelbourn): resizing
// Counter for unique dialog ids.
var uniqueId = 0;
/**
 * Reference to a dialog opened via the MdDialog service.
 */
var MdDialogRef = (function () {
    /**
     * @param {?} _overlayRef
     * @param {?} _containerInstance
     * @param {?=} id
     */
    function MdDialogRef(_overlayRef, _containerInstance, id) {
        if (id === void 0) { id = "md-dialog-" + uniqueId++; }
        var _this = this;
        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /**
         * Whether the user is allowed to close the dialog.
         */
        this.disableClose = this._containerInstance._config.disableClose;
        /**
         * Subject for notifying the user that the dialog has finished opening.
         */
        this._afterOpen = new rxjs_Subject.Subject();
        /**
         * Subject for notifying the user that the dialog has finished closing.
         */
        this._afterClosed = new rxjs_Subject.Subject();
        /**
         * Subject for notifying the user that the dialog has started closing.
         */
        this._beforeClose = new rxjs_Subject.Subject();
        // Emit when opening animation completes
        _angular_cdk_rxjs.RxChain.from(_containerInstance._animationStateChanged)
            .call(_angular_cdk_rxjs.filter, function (event) { return event.phaseName === 'done' && event.toState === 'enter'; })
            .call(_angular_cdk_rxjs.first)
            .subscribe(function () {
            _this._afterOpen.next();
            _this._afterOpen.complete();
        });
        // Dispose overlay when closing animation is complete
        _angular_cdk_rxjs.RxChain.from(_containerInstance._animationStateChanged)
            .call(_angular_cdk_rxjs.filter, function (event) { return event.phaseName === 'done' && event.toState === 'exit'; })
            .call(_angular_cdk_rxjs.first)
            .subscribe(function () {
            _this._overlayRef.dispose();
            _this._afterClosed.next(_this._result);
            _this._afterClosed.complete();
            _this.componentInstance = null;
        });
    }
    /**
     * Close the dialog.
    \@param dialogResult Optional result to return to the dialog opener.
     * @param {?=} dialogResult
     * @return {?}
     */
    MdDialogRef.prototype.close = function (dialogResult) {
        var _this = this;
        this._result = dialogResult;
        // Transition the backdrop in parallel to the dialog.
        _angular_cdk_rxjs.RxChain.from(this._containerInstance._animationStateChanged)
            .call(_angular_cdk_rxjs.filter, function (event) { return event.phaseName === 'start'; })
            .call(_angular_cdk_rxjs.first)
            .subscribe(function () {
            _this._beforeClose.next(dialogResult);
            _this._beforeClose.complete();
            _this._overlayRef.detachBackdrop();
        });
        this._containerInstance._startExitAnimation();
    };
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     * @return {?}
     */
    MdDialogRef.prototype.afterOpen = function () {
        return this._afterOpen.asObservable();
    };
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     * @return {?}
     */
    MdDialogRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    /**
     * Gets an observable that is notified when the dialog has started closing.
     * @return {?}
     */
    MdDialogRef.prototype.beforeClose = function () {
        return this._beforeClose.asObservable();
    };
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     * @return {?}
     */
    MdDialogRef.prototype.backdropClick = function () {
        return this._overlayRef.backdropClick();
    };
    /**
     * Updates the dialog's position.
    \@param position New dialog position.
     * @param {?=} position
     * @return {?}
     */
    MdDialogRef.prototype.updatePosition = function (position) {
        var /** @type {?} */ strategy = this._getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this._overlayRef.updatePosition();
        return this;
    };
    /**
     * Updates the dialog's width and height.
    \@param width New width of the dialog.
    \@param height New height of the dialog.
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    MdDialogRef.prototype.updateSize = function (width, height) {
        if (width === void 0) { width = 'auto'; }
        if (height === void 0) { height = 'auto'; }
        this._getPositionStrategy().width(width).height(height);
        this._overlayRef.updatePosition();
        return this;
    };
    /**
     * Returns whether the dialog is animating.
     * @return {?}
     */
    MdDialogRef.prototype._isAnimating = function () {
        return this._containerInstance._isAnimating;
    };
    /**
     * Fetches the position strategy object from the overlay ref.
     * @return {?}
     */
    MdDialogRef.prototype._getPositionStrategy = function () {
        return (this._overlayRef.getState().positionStrategy);
    };
    return MdDialogRef;
}());
var MD_DIALOG_DATA = new _angular_core.InjectionToken('MdDialogData');
/**
 * Injection token that determines the scroll handling while the dialog is open.
 */
var MD_DIALOG_SCROLL_STRATEGY = new _angular_core.InjectionToken('md-dialog-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MD_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.block(); };
}
/**
 * \@docs-private
 */
var MD_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: MD_DIALOG_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay.Overlay],
    useFactory: MD_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Service to open Material Design modal dialogs.
 */
var MdDialog = (function () {
    /**
     * @param {?} _overlay
     * @param {?} _injector
     * @param {?} location
     * @param {?} _scrollStrategy
     * @param {?} _parentDialog
     */
    function MdDialog(_overlay, _injector, location, _scrollStrategy, _parentDialog) {
        var _this = this;
        this._overlay = _overlay;
        this._injector = _injector;
        this._scrollStrategy = _scrollStrategy;
        this._parentDialog = _parentDialog;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs_Subject.Subject();
        this._afterOpenAtThisLevel = new rxjs_Subject.Subject();
        this._boundKeydown = this._handleKeydown.bind(this);
        /**
         * Stream that emits when all open dialog have finished closing.
        Will emit on subscribe if there are no open dialogs to begin with.
         */
        this.afterAllClosed = rxjs_observable_defer.defer(function () { return _this.openDialogs.length ?
            _this._afterAllClosed :
            _angular_cdk_rxjs.startWith.call(_this._afterAllClosed, undefined); });
        // Close all of the dialogs when the user goes forwards/backwards in history or when the
        // location hash changes. Note that this usually doesn't include clicking on links (unless
        // the user is using the `HashLocationStrategy`).
        if (!_parentDialog && location) {
            location.subscribe(function () { return _this.closeAll(); });
        }
    }
    Object.defineProperty(MdDialog.prototype, "openDialogs", {
        /**
         * Keeps track of the currently-open dialogs.
         * @return {?}
         */
        get: function () {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDialog.prototype, "afterOpen", {
        /**
         * Stream that emits when a dialog has been opened.
         * @return {?}
         */
        get: function () {
            return this._parentDialog ? this._parentDialog.afterOpen : this._afterOpenAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDialog.prototype, "_afterAllClosed", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ parent = this._parentDialog;
            return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens a modal dialog containing the given component.
    \@param componentOrTemplateRef Type of the component to load into the dialog,
        or a TemplateRef to instantiate as the dialog content.
    \@param config Extra configuration options.
    \@returns Reference to the newly-opened dialog.
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    MdDialog.prototype.open = function (componentOrTemplateRef, config) {
        var _this = this;
        var /** @type {?} */ inProgressDialog = this.openDialogs.find(function (dialog) { return dialog._isAnimating(); });
        // If there's a dialog that is in the process of being opened, return it instead.
        if (inProgressDialog) {
            return inProgressDialog;
        }
        config = _applyConfigDefaults(config);
        if (config.id && this.getDialogById(config.id)) {
            throw Error("Dialog with id \"" + config.id + "\" exists already. The dialog id must be unique.");
        }
        var /** @type {?} */ overlayRef = this._createOverlay(config);
        var /** @type {?} */ dialogContainer = this._attachDialogContainer(overlayRef, config);
        var /** @type {?} */ dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        if (!this.openDialogs.length) {
            document.addEventListener('keydown', this._boundKeydown);
        }
        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(function () { return _this._removeOpenDialog(dialogRef); });
        this.afterOpen.next(dialogRef);
        return dialogRef;
    };
    /**
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    MdDialog.prototype.closeAll = function () {
        var /** @type {?} */ i = this.openDialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            this.openDialogs[i].close();
        }
    };
    /**
     * Finds an open dialog by its id.
    \@param id ID to use when looking up the dialog.
     * @param {?} id
     * @return {?}
     */
    MdDialog.prototype.getDialogById = function (id) {
        return this.openDialogs.find(function (dialog) { return dialog.id === id; });
    };
    /**
     * Creates the overlay into which the dialog will be loaded.
    \@param config The dialog configuration.
    \@returns A promise resolving to the OverlayRef for the created overlay.
     * @param {?} config
     * @return {?}
     */
    MdDialog.prototype._createOverlay = function (config) {
        var /** @type {?} */ overlayState = this._getOverlayState(config);
        return this._overlay.create(overlayState);
    };
    /**
     * Creates an overlay state from a dialog config.
    \@param dialogConfig The dialog configuration.
    \@returns The overlay configuration.
     * @param {?} dialogConfig
     * @return {?}
     */
    MdDialog.prototype._getOverlayState = function (dialogConfig) {
        var /** @type {?} */ state$$1 = new _angular_cdk_overlay.OverlayConfig({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction
        });
        if (dialogConfig.backdropClass) {
            state$$1.backdropClass = dialogConfig.backdropClass;
        }
        return state$$1;
    };
    /**
     * Attaches an MdDialogContainer to a dialog's already-created overlay.
    \@param overlay Reference to the dialog's underlying overlay.
    \@param config The dialog configuration.
    \@returns A promise resolving to a ComponentRef for the attached container.
     * @param {?} overlay
     * @param {?} config
     * @return {?}
     */
    MdDialog.prototype._attachDialogContainer = function (overlay, config) {
        var /** @type {?} */ containerPortal = new _angular_cdk_portal.ComponentPortal(MdDialogContainer, config.viewContainerRef);
        var /** @type {?} */ containerRef = overlay.attach(containerPortal);
        containerRef.instance._config = config;
        return containerRef.instance;
    };
    /**
     * Attaches the user-provided component to the already-created MdDialogContainer.
    \@param componentOrTemplateRef The type of component being loaded into the dialog,
        or a TemplateRef to instantiate as the content.
    \@param dialogContainer Reference to the wrapping MdDialogContainer.
    \@param overlayRef Reference to the overlay in which the dialog resides.
    \@param config The dialog configuration.
    \@returns A promise resolving to the MdDialogRef that should be returned to the user.
     * @template T
     * @param {?} componentOrTemplateRef
     * @param {?} dialogContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    MdDialog.prototype._attachDialogContent = function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        var /** @type {?} */ dialogRef = new MdDialogRef(overlayRef, dialogContainer, config.id);
        // When the dialog backdrop is clicked, we want to close it.
        if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe(function () {
                if (!dialogRef.disableClose) {
                    dialogRef.close();
                }
            });
        }
        if (componentOrTemplateRef instanceof _angular_core.TemplateRef) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal.TemplatePortal(componentOrTemplateRef, /** @type {?} */ ((null)), /** @type {?} */ ({ $implicit: config.data, dialogRef: dialogRef })));
        }
        else {
            var /** @type {?} */ injector = this._createInjector(config, dialogRef, dialogContainer);
            var /** @type {?} */ contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal.ComponentPortal(componentOrTemplateRef, undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    };
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
    of a dialog to close itself and, optionally, to return a value.
    \@param config Config object that is used to construct the dialog.
    \@param dialogRef Reference to the dialog.
    \@param container Dialog container element that wraps all of the contents.
    \@returns The custom injector that can be used inside the dialog.
     * @template T
     * @param {?} config
     * @param {?} dialogRef
     * @param {?} dialogContainer
     * @return {?}
     */
    MdDialog.prototype._createInjector = function (config, dialogRef, dialogContainer) {
        var /** @type {?} */ userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        var /** @type {?} */ injectionTokens = new WeakMap();
        injectionTokens.set(MdDialogRef, dialogRef);
        injectionTokens.set(MdDialogContainer, dialogContainer);
        injectionTokens.set(MD_DIALOG_DATA, config.data);
        return new _angular_cdk_portal.PortalInjector(userInjector || this._injector, injectionTokens);
    };
    /**
     * Removes a dialog from the array of open dialogs.
    \@param dialogRef Dialog to be removed.
     * @param {?} dialogRef
     * @return {?}
     */
    MdDialog.prototype._removeOpenDialog = function (dialogRef) {
        var /** @type {?} */ index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            // no open dialogs are left, call next on afterAllClosed Subject
            if (!this.openDialogs.length) {
                this._afterAllClosed.next();
                document.removeEventListener('keydown', this._boundKeydown);
            }
        }
    };
    /**
     * Handles global key presses while there are open dialogs. Closes the
    top dialog when the user presses escape.
     * @param {?} event
     * @return {?}
     */
    MdDialog.prototype._handleKeydown = function (event) {
        var /** @type {?} */ topDialog = this.openDialogs[this.openDialogs.length - 1];
        var /** @type {?} */ canClose = topDialog ? !topDialog.disableClose : false;
        if (event.keyCode === _angular_cdk_keycodes.ESCAPE && canClose) {
            topDialog.close();
        }
    };
    return MdDialog;
}());
MdDialog.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
MdDialog.ctorParameters = function () { return [
    { type: _angular_cdk_overlay.Overlay, },
    { type: _angular_core.Injector, },
    { type: _angular_common.Location, decorators: [{ type: _angular_core.Optional },] },
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [MD_DIALOG_SCROLL_STRATEGY,] },] },
    { type: MdDialog, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.SkipSelf },] },
]; };
/**
 * Applies default options to the dialog config.
\@param config Config to be modified.
\@returns The new configuration object.
 * @param {?=} config
 * @return {?}
 */
function _applyConfigDefaults(config) {
    return extendObject(new MdDialogConfig(), config);
}
/**
 * Counter used to generate unique IDs for dialog elements.
 */
var dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
var MdDialogClose = (function () {
    /**
     * @param {?} dialogRef
     */
    function MdDialogClose(dialogRef) {
        this.dialogRef = dialogRef;
        /**
         * Screenreader label for the button.
         */
        this.ariaLabel = 'Close dialog';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MdDialogClose.prototype.ngOnChanges = function (changes) {
        var /** @type {?} */ proxiedChange = changes._matDialogClose || changes._mdDialogClose ||
            changes._matDialogCloseResult;
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    };
    return MdDialogClose;
}());
MdDialogClose.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: "button[md-dialog-close], button[mat-dialog-close],\n             button[mdDialogClose], button[matDialogClose]",
                host: {
                    '(click)': 'dialogRef.close(dialogResult)',
                    '[attr.aria-label]': 'ariaLabel',
                    'type': 'button',
                }
            },] },
];
/**
 * @nocollapse
 */
MdDialogClose.ctorParameters = function () { return [
    { type: MdDialogRef, },
]; };
MdDialogClose.propDecorators = {
    'ariaLabel': [{ type: _angular_core.Input, args: ['aria-label',] },],
    'dialogResult': [{ type: _angular_core.Input, args: ['md-dialog-close',] },],
    '_matDialogClose': [{ type: _angular_core.Input, args: ['matDialogClose',] },],
    '_mdDialogClose': [{ type: _angular_core.Input, args: ['mdDialogClose',] },],
    '_matDialogCloseResult': [{ type: _angular_core.Input, args: ['mat-dialog-close',] },],
};
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
var MdDialogTitle = (function () {
    /**
     * @param {?} _container
     */
    function MdDialogTitle(_container) {
        this._container = _container;
        this.id = "md-dialog-title-" + dialogElementUid++;
    }
    /**
     * @return {?}
     */
    MdDialogTitle.prototype.ngOnInit = function () {
        var _this = this;
        if (this._container && !this._container._ariaLabelledBy) {
            Promise.resolve().then(function () { return _this._container._ariaLabelledBy = _this.id; });
        }
    };
    return MdDialogTitle;
}());
MdDialogTitle.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[md-dialog-title], [mat-dialog-title], [mdDialogTitle], [matDialogTitle]',
                host: {
                    'class': 'mat-dialog-title',
                    '[id]': 'id',
                },
            },] },
];
/**
 * @nocollapse
 */
MdDialogTitle.ctorParameters = function () { return [
    { type: MdDialogContainer, decorators: [{ type: _angular_core.Optional },] },
]; };
MdDialogTitle.propDecorators = {
    'id': [{ type: _angular_core.Input },],
};
/**
 * Scrollable content container of a dialog.
 */
var MdDialogContent = (function () {
    function MdDialogContent() {
    }
    return MdDialogContent;
}());
MdDialogContent.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: "[md-dialog-content], md-dialog-content, [mat-dialog-content], mat-dialog-content,\n             [mdDialogContent], [matDialogContent]",
                host: { 'class': 'mat-dialog-content' }
            },] },
];
/**
 * @nocollapse
 */
MdDialogContent.ctorParameters = function () { return []; };
/**
 * Container for the bottom action buttons in a dialog.
Stays fixed to the bottom when scrolling.
 */
var MdDialogActions = (function () {
    function MdDialogActions() {
    }
    return MdDialogActions;
}());
MdDialogActions.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: "[md-dialog-actions], md-dialog-actions, [mat-dialog-actions], mat-dialog-actions,\n             [mdDialogActions], [matDialogActions]",
                host: { 'class': 'mat-dialog-actions' }
            },] },
];
/**
 * @nocollapse
 */
MdDialogActions.ctorParameters = function () { return []; };
var MdDialogModule = (function () {
    function MdDialogModule() {
    }
    return MdDialogModule;
}());
MdDialogModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule,
                    _angular_cdk_overlay.OverlayModule,
                    _angular_cdk_portal.PortalModule,
                    _angular_cdk_a11y.A11yModule,
                    MdCommonModule,
                ],
                exports: [
                    MdDialogContainer,
                    MdDialogClose,
                    MdDialogTitle,
                    MdDialogContent,
                    MdDialogActions,
                    MdCommonModule,
                ],
                declarations: [
                    MdDialogContainer,
                    MdDialogClose,
                    MdDialogTitle,
                    MdDialogActions,
                    MdDialogContent,
                ],
                providers: [
                    MdDialog,
                    MD_DIALOG_SCROLL_STRATEGY_PROVIDER,
                ],
                entryComponents: [MdDialogContainer],
            },] },
];
/**
 * @nocollapse
 */
MdDialogModule.ctorParameters = function () { return []; };

/**
 * Returns an exception to be thrown in the case when attempting to
load an icon with a name that cannot be found.
\@docs-private
 * @param {?} iconName
 * @return {?}
 */
function getMdIconNameNotFoundError(iconName) {
    return Error("Unable to find icon with the name \"" + iconName + "\"");
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
`<md-icon>` without including \@angular/http.
\@docs-private
 * @return {?}
 */
function getMdIconNoHttpProviderError() {
    return Error('Could not find Http provider for use with Angular Material icons. ' +
        'Please include the HttpModule from @angular/http in your app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
\@param url URL that was attempted to be sanitized.
\@docs-private
 * @param {?} url
 * @return {?}
 */
function getMdIconFailedToSanitizeError(url) {
    return Error("The URL provided to MdIconRegistry was not trusted as a resource URL " +
        ("via Angular's DomSanitizer. Attempted URL was \"" + url + "\"."));
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
\@docs-private
 */
var SvgIconConfig = (function () {
    /**
     * @param {?} url
     */
    function SvgIconConfig(url) {
        this.url = url;
        this.svgElement = null;
    }
    return SvgIconConfig;
}());
/**
 * Service to register and display icons used by the <md-icon> component.
- Registers icon URLs by namespace and name.
- Registers icon set URLs by namespace.
- Registers aliases for CSS classes, for use with icon fonts.
- Loads icons from URLs and extracts individual icons from icon sets.
 */
var MdIconRegistry = (function () {
    /**
     * @param {?} _http
     * @param {?} _sanitizer
     */
    function MdIconRegistry(_http, _sanitizer) {
        this._http = _http;
        this._sanitizer = _sanitizer;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
        Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /**
         * Cache for icons loaded by direct URLs.
         */
        this._cachedIconsByUrl = new Map();
        /**
         * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
         */
        this._inProgressUrlFetches = new Map();
        /**
         * Map from font identifiers to their CSS class names. Used for icon fonts.
         */
        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an <md-icon> component has no icon name, url, or font specified.
        The default 'material-icons' value assumes that the material icon font has been loaded as
        described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
    }
    /**
     * Registers an icon by URL in the default namespace.
    \@param iconName Name under which the icon should be registered.
    \@param url
     * @param {?} iconName
     * @param {?} url
     * @return {?}
     */
    MdIconRegistry.prototype.addSvgIcon = function (iconName, url) {
        return this.addSvgIconInNamespace('', iconName, url);
    };
    /**
     * Registers an icon by URL in the specified namespace.
    \@param namespace Namespace in which the icon should be registered.
    \@param iconName Name under which the icon should be registered.
    \@param url
     * @param {?} namespace
     * @param {?} iconName
     * @param {?} url
     * @return {?}
     */
    MdIconRegistry.prototype.addSvgIconInNamespace = function (namespace, iconName, url) {
        var /** @type {?} */ key = iconKey(namespace, iconName);
        this._svgIconConfigs.set(key, new SvgIconConfig(url));
        return this;
    };
    /**
     * Registers an icon set by URL in the default namespace.
    \@param url
     * @param {?} url
     * @return {?}
     */
    MdIconRegistry.prototype.addSvgIconSet = function (url) {
        return this.addSvgIconSetInNamespace('', url);
    };
    /**
     * Registers an icon set by URL in the specified namespace.
    \@param namespace Namespace in which to register the icon set.
    \@param url
     * @param {?} namespace
     * @param {?} url
     * @return {?}
     */
    MdIconRegistry.prototype.addSvgIconSetInNamespace = function (namespace, url) {
        var /** @type {?} */ config = new SvgIconConfig(url);
        var /** @type {?} */ configNamespace = this._iconSetConfigs.get(namespace);
        if (configNamespace) {
            configNamespace.push(config);
        }
        else {
            this._iconSetConfigs.set(namespace, [config]);
        }
        return this;
    };
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an mdIcon
    component with the alias as the fontSet input will cause the class name to be applied
    to the <md-icon> element.
    
    \@param alias Alias for the font.
    \@param className Class name override to be used instead of the alias.
     * @param {?} alias
     * @param {?=} className
     * @return {?}
     */
    MdIconRegistry.prototype.registerFontClassAlias = function (alias, className) {
        if (className === void 0) { className = alias; }
        this._fontCssClassesByAlias.set(alias, className);
        return this;
    };
    /**
     * Returns the CSS class name associated with the alias by a previous call to
    registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     * @param {?} alias
     * @return {?}
     */
    MdIconRegistry.prototype.classNameForFontAlias = function (alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    };
    /**
     * Sets the CSS class name to be used for icon fonts when an <md-icon> component does not
    have a fontSet input value, and is not loading an icon by name or URL.
    
    \@param className
     * @param {?} className
     * @return {?}
     */
    MdIconRegistry.prototype.setDefaultFontSetClass = function (className) {
        this._defaultFontSetClass = className;
        return this;
    };
    /**
     * Returns the CSS class name to be used for icon fonts when an <md-icon> component does not
    have a fontSet input value, and is not loading an icon by name or URL.
     * @return {?}
     */
    MdIconRegistry.prototype.getDefaultFontSetClass = function () {
        return this._defaultFontSetClass;
    };
    /**
     * Returns an Observable that produces the icon (as an <svg> DOM element) from the given URL.
    The response from the URL may be cached so this will not always cause an HTTP request, but
    the produced element will always be a new copy of the originally fetched icon. (That is,
    it will not contain any modifications made to elements previously returned).
    
    \@param safeUrl URL from which to fetch the SVG icon.
     * @param {?} safeUrl
     * @return {?}
     */
    MdIconRegistry.prototype.getSvgIconFromUrl = function (safeUrl) {
        var _this = this;
        var /** @type {?} */ url = this._sanitizer.sanitize(_angular_core.SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMdIconFailedToSanitizeError(safeUrl);
        }
        var /** @type {?} */ cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
            return rxjs_observable_of.of(cloneSvg(cachedIcon));
        }
        return _angular_cdk_rxjs.RxChain.from(this._loadSvgIconFromConfig(new SvgIconConfig(url)))
            .call(_angular_cdk_rxjs.doOperator, function (svg) { return _this._cachedIconsByUrl.set(/** @type {?} */ ((url)), svg); })
            .call(_angular_cdk_rxjs.map, function (svg) { return cloneSvg(svg); })
            .result();
    };
    /**
     * Returns an Observable that produces the icon (as an <svg> DOM element) with the given name
    and namespace. The icon must have been previously registered with addIcon or addIconSet;
    if not, the Observable will throw an error.
    
    \@param name Name of the icon to be retrieved.
    \@param namespace Namespace in which to look for the icon.
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    MdIconRegistry.prototype.getNamedSvgIcon = function (name, namespace) {
        if (namespace === void 0) { namespace = ''; }
        // Return (copy of) cached icon if possible.
        var /** @type {?} */ key = iconKey(namespace, name);
        var /** @type {?} */ config = this._svgIconConfigs.get(key);
        if (config) {
            return this._getSvgFromConfig(config);
        }
        // See if we have any icon sets registered for the namespace.
        var /** @type {?} */ iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return rxjs_observable_throw._throw(getMdIconNameNotFoundError(key));
    };
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     * @param {?} config
     * @return {?}
     */
    MdIconRegistry.prototype._getSvgFromConfig = function (config) {
        if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return rxjs_observable_of.of(cloneSvg(config.svgElement));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return _angular_cdk_rxjs.RxChain.from(this._loadSvgIconFromConfig(config))
                .call(_angular_cdk_rxjs.doOperator, function (svg) { return config.svgElement = svg; })
                .call(_angular_cdk_rxjs.map, function (svg) { return cloneSvg(svg); })
                .result();
        }
    };
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
    First searches the available cached icons for a nested element with a matching name, and
    if found copies the element to a new <svg> element. If not found, fetches all icon sets
    that have not been cached, and searches again after all fetches are completed.
    The returned Observable produces the SVG element if possible, and throws
    an error if no icon with the specified name can be found.
     * @param {?} name
     * @param {?} iconSetConfigs
     * @return {?}
     */
    MdIconRegistry.prototype._getSvgFromIconSetConfigs = function (name, iconSetConfigs) {
        var _this = this;
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        var /** @type {?} */ namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return rxjs_observable_of.of(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        var /** @type {?} */ iconSetFetchRequests = iconSetConfigs
            .filter(function (iconSetConfig) { return !iconSetConfig.svgElement; })
            .map(function (iconSetConfig) {
            return _angular_cdk_rxjs.RxChain.from(_this._loadSvgIconSetFromConfig(iconSetConfig))
                .call(_angular_cdk_rxjs.catchOperator, function (err) {
                var /** @type {?} */ url = _this._sanitizer.sanitize(_angular_core.SecurityContext.RESOURCE_URL, iconSetConfig.url);
                // Swallow errors fetching individual URLs so the combined Observable won't
                // necessarily fail.
                console.log("Loading icon set URL: " + url + " failed: " + err);
                return rxjs_observable_of.of(null);
            })
                .call(_angular_cdk_rxjs.doOperator, function (svg) {
                // Cache the SVG element.
                if (svg) {
                    iconSetConfig.svgElement = svg;
                }
            })
                .result();
        });
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return _angular_cdk_rxjs.map.call(rxjs_observable_forkJoin.forkJoin.call(rxjs_Observable.Observable, iconSetFetchRequests), function () {
            var /** @type {?} */ foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            if (!foundIcon) {
                throw getMdIconNameNotFoundError(name);
            }
            return foundIcon;
        });
    };
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
    tag matches the specified name. If found, copies the nested element to a new SVG element and
    returns it. Returns null if no matching element is found.
     * @param {?} iconName
     * @param {?} iconSetConfigs
     * @return {?}
     */
    MdIconRegistry.prototype._extractIconWithNameFromAnySet = function (iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (var /** @type {?} */ i = iconSetConfigs.length - 1; i >= 0; i--) {
            var /** @type {?} */ config = iconSetConfigs[i];
            if (config.svgElement) {
                var /** @type {?} */ foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    };
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
    from it.
     * @param {?} config
     * @return {?}
     */
    MdIconRegistry.prototype._loadSvgIconFromConfig = function (config) {
        var _this = this;
        return _angular_cdk_rxjs.map.call(this._fetchUrl(config.url), function (svgText) { return _this._createSvgElementForSingleIcon(svgText); });
    };
    /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
    from it.
     * @param {?} config
     * @return {?}
     */
    MdIconRegistry.prototype._loadSvgIconSetFromConfig = function (config) {
        var _this = this;
        // TODO: Document that icons should only be loaded from trusted sources.
        return _angular_cdk_rxjs.map.call(this._fetchUrl(config.url), function (svgText) { return _this._svgElementFromString(svgText); });
    };
    /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     * @param {?} responseText
     * @return {?}
     */
    MdIconRegistry.prototype._createSvgElementForSingleIcon = function (responseText) {
        var /** @type {?} */ svg = this._svgElementFromString(responseText);
        this._setSvgAttributes(svg);
        return svg;
    };
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
    tag matches the specified name. If found, copies the nested element to a new SVG element and
    returns it. Returns null if no matching element is found.
     * @param {?} iconSet
     * @param {?} iconName
     * @return {?}
     */
    MdIconRegistry.prototype._extractSvgIconFromSet = function (iconSet, iconName) {
        var /** @type {?} */ iconNode = iconSet.querySelector('#' + iconName);
        if (!iconNode) {
            return null;
        }
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconNode.tagName.toLowerCase() === 'svg') {
            return this._setSvgAttributes(/** @type {?} */ (iconNode.cloneNode(true)));
        }
        // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
        // that the same could be achieved by referring to it via <use href="#id">, however the <use>
        // tag is problematic on Firefox, because it needs to include the current page path.
        if (iconNode.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconNode));
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        var /** @type {?} */ svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconNode.cloneNode(true));
        return this._setSvgAttributes(svg);
    };
    /**
     * Creates a DOM element from the given SVG string.
     * @param {?} str
     * @return {?}
     */
    MdIconRegistry.prototype._svgElementFromString = function (str) {
        // TODO: Is there a better way than innerHTML? Renderer doesn't appear to have a method for
        // creating an element from an HTML string.
        var /** @type {?} */ div = document.createElement('DIV');
        div.innerHTML = str;
        var /** @type {?} */ svg = (div.querySelector('svg'));
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    };
    /**
     * Converts an element into an SVG node by cloning all of its children.
     * @param {?} element
     * @return {?}
     */
    MdIconRegistry.prototype._toSvgElement = function (element) {
        var /** @type {?} */ svg = this._svgElementFromString('<svg></svg>');
        for (var /** @type {?} */ i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeType === Node.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[i].cloneNode(true));
            }
        }
        return svg;
    };
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     * @param {?} svg
     * @return {?}
     */
    MdIconRegistry.prototype._setSvgAttributes = function (svg) {
        if (!svg.getAttribute('xmlns')) {
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        }
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        return svg;
    };
    /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
    cached, so future calls with the same URL may not cause another HTTP request.
     * @param {?} safeUrl
     * @return {?}
     */
    MdIconRegistry.prototype._fetchUrl = function (safeUrl) {
        var _this = this;
        if (!this._http) {
            throw getMdIconNoHttpProviderError();
        }
        var /** @type {?} */ url = this._sanitizer.sanitize(_angular_core.SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMdIconFailedToSanitizeError(safeUrl);
        }
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        var /** @type {?} */ inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
            return inProgressFetch;
        }
        // TODO(jelbourn): for some reason, the `finally` operator "loses" the generic type on the
        // Observable. Figure out why and fix it.
        var /** @type {?} */ req = _angular_cdk_rxjs.RxChain.from(this._http.get(url))
            .call(_angular_cdk_rxjs.map, function (response) { return response.text(); })
            .call(_angular_cdk_rxjs.finallyOperator, function () { return _this._inProgressUrlFetches.delete(url); })
            .call(_angular_cdk_rxjs.share)
            .result();
        this._inProgressUrlFetches.set(url, req);
        return req;
    };
    return MdIconRegistry;
}());
MdIconRegistry.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
MdIconRegistry.ctorParameters = function () { return [
    { type: _angular_http.Http, decorators: [{ type: _angular_core.Optional },] },
    { type: _angular_platformBrowser.DomSanitizer, },
]; };
/**
 * \@docs-private
 * @param {?} parentRegistry
 * @param {?} http
 * @param {?} sanitizer
 * @return {?}
 */
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, http, sanitizer) {
    return parentRegistry || new MdIconRegistry(http, sanitizer);
}
/**
 * \@docs-private
 */
var ICON_REGISTRY_PROVIDER = {
    // If there is already an MdIconRegistry available, use that. Otherwise, provide a new one.
    provide: MdIconRegistry,
    deps: [[new _angular_core.Optional(), new _angular_core.SkipSelf(), MdIconRegistry], [new _angular_core.Optional(), _angular_http.Http], _angular_platformBrowser.DomSanitizer],
    useFactory: ICON_REGISTRY_PROVIDER_FACTORY
};
/**
 * Clones an SVGElement while preserving type information.
 * @param {?} svg
 * @return {?}
 */
function cloneSvg(svg) {
    return (svg.cloneNode(true));
}
/**
 * Returns the cache key to use for an icon namespace and name.
 * @param {?} namespace
 * @param {?} name
 * @return {?}
 */
function iconKey(namespace, name) {
    return namespace + ':' + name;
}
/**
 * \@docs-private
 */
var MdIconBase = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function MdIconBase(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    return MdIconBase;
}());
var _MdIconMixinBase = mixinColor(MdIconBase);
/**
 * Component to display an icon. It can be used in the following ways:

- Specify the svgIcon input to load an SVG icon from a URL previously registered with the
  addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
  MdIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
  "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
  Examples:
    <md-icon svgIcon="left-arrow"></md-icon>
    <md-icon svgIcon="animals:cat"></md-icon>

- Use a font ligature as an icon by putting the ligature text in the content of the <md-icon>
  component. By default the Material icons font is used as described at
  http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
  alternate font by setting the fontSet input to either the CSS class to apply to use the
  desired font, or to an alias previously registered with MdIconRegistry.registerFontClassAlias.
  Examples:
    <md-icon>home</md-icon>
    <md-icon fontSet="myfont">sun</md-icon>

- Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
  font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
  CSS class which causes the glyph to be displayed via a :before selector, as in
  https://fortawesome.github.io/Font-Awesome/examples/
  Example:
    <md-icon fontSet="fa" fontIcon="alarm"></md-icon>
 */
var MdIcon = (function (_super) {
    __extends(MdIcon, _super);
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} _mdIconRegistry
     * @param {?} ariaHidden
     */
    function MdIcon(renderer, elementRef, _mdIconRegistry, ariaHidden) {
        var _this = _super.call(this, renderer, elementRef) || this;
        _this._mdIconRegistry = _mdIconRegistry;
        // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.
        if (!ariaHidden) {
            renderer.setAttribute(elementRef.nativeElement, 'aria-hidden', 'true');
        }
        return _this;
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
    Returns a 2-element array of [(icon set), (icon name)].
    The separator for the two fields is ':'. If there is no separator, an empty
    string is returned for the icon set and the entire value is returned for
    the icon name. If the argument is falsy, returns an array of two empty strings.
    Throws an error if the name contains two or more ':' separators.
    Examples:
      'social:cake' -> ['social', 'cake']
      'penguin' -> ['', 'penguin']
      null -> ['', '']
      'a:b:c' -> (throws Error)
     * @param {?} iconName
     * @return {?}
     */
    MdIcon.prototype._splitIconName = function (iconName) {
        if (!iconName) {
            return ['', ''];
        }
        var /** @type {?} */ parts = iconName.split(':');
        switch (parts.length) {
            case 1: return ['', parts[0]]; // Use default namespace.
            case 2: return (parts);
            default: throw Error("Invalid icon name: \"" + iconName + "\"");
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MdIcon.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
        if (changes.svgIcon) {
            if (this.svgIcon) {
                var _a = this._splitIconName(this.svgIcon), namespace = _a[0], iconName = _a[1];
                _angular_cdk_rxjs.first.call(this._mdIconRegistry.getNamedSvgIcon(iconName, namespace)).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err.message); });
            }
            else {
                this._clearSvgElement();
            }
        }
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    };
    /**
     * @return {?}
     */
    MdIcon.prototype.ngOnInit = function () {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <md-icon>arrow</md-icon>. In this case we need to add a CSS class for the default font.
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    };
    /**
     * @return {?}
     */
    MdIcon.prototype._usingFontIcon = function () {
        return !this.svgIcon;
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    MdIcon.prototype._setSvgElement = function (svg) {
        this._clearSvgElement();
        this._renderer.appendChild(this._elementRef.nativeElement, svg);
    };
    /**
     * @return {?}
     */
    MdIcon.prototype._clearSvgElement = function () {
        var /** @type {?} */ layoutElement = this._elementRef.nativeElement;
        var /** @type {?} */ childCount = layoutElement.childNodes.length;
        // Remove existing child nodes and add the new SVG element. Note that we can't
        // use innerHTML, because IE will throw if the element has a data binding.
        for (var /** @type {?} */ i = 0; i < childCount; i++) {
            this._renderer.removeChild(layoutElement, layoutElement.childNodes[i]);
        }
    };
    /**
     * @return {?}
     */
    MdIcon.prototype._updateFontIconClasses = function () {
        if (!this._usingFontIcon()) {
            return;
        }
        var /** @type {?} */ elem = this._elementRef.nativeElement;
        var /** @type {?} */ fontSetClass = this.fontSet ?
            this._mdIconRegistry.classNameForFontAlias(this.fontSet) :
            this._mdIconRegistry.getDefaultFontSetClass();
        if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
                this._renderer.removeClass(elem, this._previousFontSetClass);
            }
            if (fontSetClass) {
                this._renderer.addClass(elem, fontSetClass);
            }
            this._previousFontSetClass = fontSetClass;
        }
        if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
                this._renderer.removeClass(elem, this._previousFontIconClass);
            }
            if (this.fontIcon) {
                this._renderer.addClass(elem, this.fontIcon);
            }
            this._previousFontIconClass = this.fontIcon;
        }
    };
    return MdIcon;
}(_MdIconMixinBase));
MdIcon.decorators = [
    { type: _angular_core.Component, args: [{ template: '<ng-content></ng-content>',
                selector: 'md-icon, mat-icon',
                styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}"],
                inputs: ['color'],
                host: {
                    'role': 'img',
                    'class': 'mat-icon',
                },
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
MdIcon.ctorParameters = function () { return [
    { type: _angular_core.Renderer2, },
    { type: _angular_core.ElementRef, },
    { type: MdIconRegistry, },
    { type: undefined, decorators: [{ type: _angular_core.Attribute, args: ['aria-hidden',] },] },
]; };
MdIcon.propDecorators = {
    'svgIcon': [{ type: _angular_core.Input },],
    'fontSet': [{ type: _angular_core.Input },],
    'fontIcon': [{ type: _angular_core.Input },],
};
var MdIconModule = (function () {
    function MdIconModule() {
    }
    return MdIconModule;
}());
MdIconModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [MdCommonModule],
                exports: [MdIcon, MdCommonModule],
                declarations: [MdIcon],
                providers: [ICON_REGISTRY_PROVIDER],
            },] },
];
/**
 * @nocollapse
 */
MdIconModule.ctorParameters = function () { return []; };

var nextUniqueId = 0;
/**
 * Single error message to be shown underneath the form field.
 */
var MdError = (function () {
    function MdError() {
        this.id = "mat-error-" + nextUniqueId++;
    }
    return MdError;
}());
MdError.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: 'md-error, mat-error',
                host: {
                    'class': 'mat-error',
                    'role': 'alert',
                    '[attr.id]': 'id',
                }
            },] },
];
/**
 * @nocollapse
 */
MdError.ctorParameters = function () { return []; };
MdError.propDecorators = {
    'id': [{ type: _angular_core.Input },],
};
/**
 * An interface which allows a control to work inside of a `MdFormField`.
 * @abstract
 */
var MdFormFieldControl = (function () {
    function MdFormFieldControl() {
    }
    /**
     * Sets the list of element IDs that currently describe this control.
     * @abstract
     * @param {?} ids
     * @return {?}
     */
    MdFormFieldControl.prototype.setDescribedByIds = function (ids) { };
    /**
     * Handles a click on the control's container.
     * @abstract
     * @param {?} event
     * @return {?}
     */
    MdFormFieldControl.prototype.onContainerClick = function (event) { };
    return MdFormFieldControl;
}());
/**
 * \@docs-private
 * @return {?}
 */
function getMdFormFieldPlaceholderConflictError() {
    return Error('Placeholder attribute and child element were both specified.');
}
/**
 * \@docs-private
 * @param {?} align
 * @return {?}
 */
function getMdFormFieldDuplicatedHintError(align) {
    return Error("A hint was already declared for 'align=\"" + align + "\"'.");
}
/**
 * \@docs-private
 * @return {?}
 */
function getMdFormFieldMissingControlError() {
    return Error('md-form-field must contain a MdFormFieldControl. ' +
        'Did you forget to add mdInput to the native input or textarea element?');
}
var nextUniqueId$2 = 0;
/**
 * Hint text to be shown underneath the form field control.
 */
var MdHint = (function () {
    function MdHint() {
        /**
         * Whether to align the hint label at the start or end of the line.
         */
        this.align = 'start';
        /**
         * Unique ID for the hint. Used for the aria-describedby on the form field control.
         */
        this.id = "mat-hint-" + nextUniqueId$2++;
    }
    return MdHint;
}());
MdHint.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: 'md-hint, mat-hint',
                host: {
                    'class': 'mat-hint',
                    '[class.mat-right]': 'align == "end"',
                    '[attr.id]': 'id',
                    // Remove align attribute to prevent it from interfering with layout.
                    '[attr.align]': 'null',
                }
            },] },
];
/**
 * @nocollapse
 */
MdHint.ctorParameters = function () { return []; };
MdHint.propDecorators = {
    'align': [{ type: _angular_core.Input },],
    'id': [{ type: _angular_core.Input },],
};
/**
 * The floating placeholder for an `MdFormField`.
 */
var MdPlaceholder = (function () {
    function MdPlaceholder() {
    }
    return MdPlaceholder;
}());
MdPlaceholder.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: 'md-placeholder, mat-placeholder'
            },] },
];
/**
 * @nocollapse
 */
MdPlaceholder.ctorParameters = function () { return []; };
/**
 * Prefix to be placed the the front of the form field.
 */
var MdPrefix = (function () {
    function MdPrefix() {
    }
    return MdPrefix;
}());
MdPrefix.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[mdPrefix], [matPrefix]',
            },] },
];
/**
 * @nocollapse
 */
MdPrefix.ctorParameters = function () { return []; };
/**
 * Suffix to be placed at the end of the form field.
 */
var MdSuffix = (function () {
    function MdSuffix() {
    }
    return MdSuffix;
}());
MdSuffix.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[mdSuffix], [matSuffix]',
            },] },
];
/**
 * @nocollapse
 */
MdSuffix.ctorParameters = function () { return []; };
var nextUniqueId$1 = 0;
/**
 * Container for form controls that applies Material Design styling and behavior.
 */
var MdFormField = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     * @param {?} placeholderOptions
     */
    function MdFormField(_elementRef, _renderer, _changeDetectorRef, placeholderOptions) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Color of the form field underline, based on the theme.
         */
        this.color = 'primary';
        /**
         * Override for the logic that disables the placeholder animation in certain cases.
         */
        this._showAlwaysAnimate = false;
        /**
         * State of the md-hint and md-error animations.
         */
        this._subscriptAnimationState = '';
        this._hintLabel = '';
        // Unique id for the hint label.
        this._hintLabelId = "md-hint-" + nextUniqueId$1++;
        this._placeholderOptions = placeholderOptions ? placeholderOptions : {};
        this.floatPlaceholder = this._placeholderOptions.float || 'auto';
    }
    Object.defineProperty(MdFormField.prototype, "dividerColor", {
        /**
         * @deprecated Use `color` instead.
         * @return {?}
         */
        get: function () { return this.color; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) { this.color = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdFormField.prototype, "hideRequiredMarker", {
        /**
         * Whether the required marker should be hidden.
         * @return {?}
         */
        get: function () { return this._hideRequiredMarker; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._hideRequiredMarker = _angular_cdk_coercion.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdFormField.prototype, "_shouldAlwaysFloat", {
        /**
         * Whether the floating label should always float or not.
         * @return {?}
         */
        get: function () {
            return this._floatPlaceholder === 'always' && !this._showAlwaysAnimate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdFormField.prototype, "_canPlaceholderFloat", {
        /**
         * Whether the placeholder can float or not.
         * @return {?}
         */
        get: function () { return this._floatPlaceholder !== 'never'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdFormField.prototype, "hintLabel", {
        /**
         * Text for the form field hint.
         * @return {?}
         */
        get: function () { return this._hintLabel; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._hintLabel = value;
            this._processHints();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdFormField.prototype, "floatPlaceholder", {
        /**
         * Whether the placeholder should always float, never float or float as the user types.
         * @return {?}
         */
        get: function () { return this._floatPlaceholder; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value !== this._floatPlaceholder) {
                this._floatPlaceholder = value || this._placeholderOptions.float || 'auto';
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdFormField.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._validateControlChild();
        if (this._control.controlType) {
            this._renderer.addClass(this._elementRef.nativeElement, "mat-form-field-type-" + this._control.controlType);
        }
        // Subscribe to changes in the child control state in order to update the form field UI.
        _angular_cdk_rxjs.startWith.call(this._control.stateChanges, null).subscribe(function () {
            _this._validatePlaceholders();
            _this._syncDescribedByIds();
            _this._changeDetectorRef.markForCheck();
        });
        var /** @type {?} */ ngControl = this._control.ngControl;
        if (ngControl && ngControl.valueChanges) {
            ngControl.valueChanges.subscribe(function () {
                _this._changeDetectorRef.markForCheck();
            });
        }
        // Re-validate when the number of hints changes.
        _angular_cdk_rxjs.startWith.call(this._hintChildren.changes, null).subscribe(function () {
            _this._processHints();
            _this._changeDetectorRef.markForCheck();
        });
        // Update the aria-described by when the number of errors changes.
        _angular_cdk_rxjs.startWith.call(this._errorChildren.changes, null).subscribe(function () {
            _this._syncDescribedByIds();
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    MdFormField.prototype.ngAfterContentChecked = function () {
        this._validateControlChild();
    };
    /**
     * @return {?}
     */
    MdFormField.prototype.ngAfterViewInit = function () {
        // Avoid animations on load.
        this._subscriptAnimationState = 'enter';
        this._changeDetectorRef.detectChanges();
    };
    /**
     * Determines whether a class from the NgControl should be forwarded to the host element.
     * @param {?} prop
     * @return {?}
     */
    MdFormField.prototype._shouldForward = function (prop) {
        var /** @type {?} */ ngControl = this._control ? this._control.ngControl : null;
        return ngControl && ((ngControl))[prop];
    };
    /**
     * Whether the form field has a placeholder.
     * @return {?}
     */
    MdFormField.prototype._hasPlaceholder = function () {
        return !!(this._control.placeholder || this._placeholderChild);
    };
    /**
     * Determines whether to display hints or errors.
     * @return {?}
     */
    MdFormField.prototype._getDisplayedMessages = function () {
        return (this._errorChildren && this._errorChildren.length > 0 &&
            this._control.errorState) ? 'error' : 'hint';
    };
    /**
     * Animates the placeholder up and locks it in position.
     * @return {?}
     */
    MdFormField.prototype._animateAndLockPlaceholder = function () {
        var _this = this;
        if (this._placeholder && this._canPlaceholderFloat) {
            this._showAlwaysAnimate = true;
            this._floatPlaceholder = 'always';
            _angular_cdk_rxjs.first.call(rxjs_observable_fromEvent.fromEvent(this._placeholder.nativeElement, 'transitionend')).subscribe(function () {
                _this._showAlwaysAnimate = false;
            });
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
    or child element with the `md-placeholder` directive).
     * @return {?}
     */
    MdFormField.prototype._validatePlaceholders = function () {
        if (this._control.placeholder && this._placeholderChild) {
            throw getMdFormFieldPlaceholderConflictError();
        }
    };
    /**
     * Does any extra processing that is required when handling the hints.
     * @return {?}
     */
    MdFormField.prototype._processHints = function () {
        this._validateHints();
        this._syncDescribedByIds();
    };
    /**
     * Ensure that there is a maximum of one of each `<md-hint>` alignment specified, with the
    attribute being considered as `align="start"`.
     * @return {?}
     */
    MdFormField.prototype._validateHints = function () {
        var _this = this;
        if (this._hintChildren) {
            var /** @type {?} */ startHint_1;
            var /** @type {?} */ endHint_1;
            this._hintChildren.forEach(function (hint) {
                if (hint.align == 'start') {
                    if (startHint_1 || _this.hintLabel) {
                        throw getMdFormFieldDuplicatedHintError('start');
                    }
                    startHint_1 = hint;
                }
                else if (hint.align == 'end') {
                    if (endHint_1) {
                        throw getMdFormFieldDuplicatedHintError('end');
                    }
                    endHint_1 = hint;
                }
            });
        }
    };
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
    its `aria-describedby` attribute accordingly.
     * @return {?}
     */
    MdFormField.prototype._syncDescribedByIds = function () {
        if (this._control) {
            var /** @type {?} */ ids = [];
            if (this._getDisplayedMessages() === 'hint') {
                var /** @type {?} */ startHint = this._hintChildren ?
                    this._hintChildren.find(function (hint) { return hint.align === 'start'; }) : null;
                var /** @type {?} */ endHint = this._hintChildren ?
                    this._hintChildren.find(function (hint) { return hint.align === 'end'; }) : null;
                if (startHint) {
                    ids.push(startHint.id);
                }
                else if (this._hintLabel) {
                    ids.push(this._hintLabelId);
                }
                if (endHint) {
                    ids.push(endHint.id);
                }
            }
            else if (this._errorChildren) {
                ids = this._errorChildren.map(function (mdError) { return mdError.id; });
            }
            this._control.setDescribedByIds(ids);
        }
    };
    /**
     * Throws an error if the form field's control is missing.
     * @return {?}
     */
    MdFormField.prototype._validateControlChild = function () {
        if (!this._control) {
            throw getMdFormFieldMissingControlError();
        }
    };
    return MdFormField;
}());
MdFormField.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'md-input-container, mat-input-container, md-form-field, mat-form-field',
                template: "<div class=\"mat-input-wrapper mat-form-field-wrapper\"><div class=\"mat-input-flex mat-form-field-flex\" #connectionContainer (click)=\"_control.onContainerClick && _control.onContainerClick($event)\"><div class=\"mat-input-prefix mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\"><ng-content select=\"[mdPrefix], [matPrefix]\"></ng-content></div><div class=\"mat-input-infix mat-form-field-infix\"><ng-content></ng-content><span class=\"mat-input-placeholder-wrapper mat-form-field-placeholder-wrapper\"><label class=\"mat-input-placeholder mat-form-field-placeholder\" [attr.for]=\"_control.id\" [attr.aria-owns]=\"_control.id\" [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\" #placeholder *ngIf=\"_hasPlaceholder()\"><ng-content select=\"md-placeholder, mat-placeholder\"></ng-content>{{_control.placeholder}} <span class=\"mat-placeholder-required mat-form-field-required-marker\" aria-hidden=\"true\" *ngIf=\"!hideRequiredMarker && _control.required\">*</span></label></span></div><div class=\"mat-input-suffix mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\"><ng-content select=\"[mdSuffix], [matSuffix]\"></ng-content></div></div><div class=\"mat-input-underline mat-form-field-underline\" #underline [class.mat-disabled]=\"_control.disabled\"><span class=\"mat-input-ripple mat-form-field-ripple\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\"></span></div><div class=\"mat-input-subscript-wrapper mat-form-field-subscript-wrapper\" [ngSwitch]=\"_getDisplayedMessages()\"><div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\"><ng-content select=\"md-error, mat-error\"></ng-content></div><div class=\"mat-input-hint-wrapper mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\" [@transitionMessages]=\"_subscriptAnimationState\"><div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"md-hint:not([align='end']), mat-hint:not([align='end'])\"></ng-content><div class=\"mat-input-hint-spacer mat-form-field-hint-spacer\"></div><ng-content select=\"md-hint[align='end'], mat-hint[align='end']\"></ng-content></div></div></div>",
                // MdInput is a directive and can't have styles, so we need to include its styles here.
                // The MdInput styles are fairly minimal so it shouldn't be a big deal for people who aren't using
                // MdInput.
                styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0}.mat-form-field-placeholder-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-placeholder{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform:perspective(100px);-ms-transform:none;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-placeholder{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-placeholder,.mat-form-field-empty.mat-form-field-placeholder{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-placeholder-wrapper .mat-form-field-placeholder{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-placeholder-wrapper .mat-form-field-placeholder{display:block;transition:none}.mat-form-field-placeholder:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;height:1px;width:100%}.mat-form-field-underline.mat-disabled{background-position:0;background-color:transparent}.mat-form-field-underline .mat-form-field-ripple{position:absolute;height:1px;top:0;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);visibility:hidden;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-focused .mat-form-field-underline .mat-form-field-ripple{height:2px}.mat-focused .mat-form-field-underline .mat-form-field-ripple,.mat-form-field-invalid .mat-form-field-underline .mat-form-field-ripple{visibility:visible;transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-subscript-wrapper{position:absolute;width:100%;overflow:hidden}.mat-form-field-placeholder-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::placeholder{color:transparent!important}.mat-input-element::-moz-placeholder{color:transparent!important}.mat-input-element::-webkit-input-placeholder{color:transparent!important}.mat-input-element:-ms-input-placeholder{color:transparent!important}textarea.mat-input-element{resize:vertical;overflow:auto}"],
                animations: [
                    // TODO(mmalerba): Use angular animations for placeholder animation as well.
                    _angular_animations.trigger('transitionMessages', [
                        _angular_animations.state('enter', _angular_animations.style({ opacity: 1, transform: 'translateY(0%)' })),
                        _angular_animations.transition('void => enter', [
                            _angular_animations.style({ opacity: 0, transform: 'translateY(-100%)' }),
                            _angular_animations.animate('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
                        ]),
                    ]),
                ],
                host: {
                    'class': 'mat-input-container mat-form-field',
                    '[class.mat-input-invalid]': '_control.errorState',
                    '[class.mat-form-field-invalid]': '_control.errorState',
                    '[class.mat-form-field-can-float]': '_canPlaceholderFloat',
                    '[class.mat-form-field-should-float]': '_control.shouldPlaceholderFloat || _shouldAlwaysFloat',
                    '[class.mat-focused]': '_control.focused',
                    '[class.mat-primary]': 'color == "primary"',
                    '[class.mat-accent]': 'color == "accent"',
                    '[class.mat-warn]': 'color == "warn"',
                    '[class.ng-untouched]': '_shouldForward("untouched")',
                    '[class.ng-touched]': '_shouldForward("touched")',
                    '[class.ng-pristine]': '_shouldForward("pristine")',
                    '[class.ng-dirty]': '_shouldForward("dirty")',
                    '[class.ng-valid]': '_shouldForward("valid")',
                    '[class.ng-invalid]': '_shouldForward("invalid")',
                    '[class.ng-pending]': '_shouldForward("pending")',
                },
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
MdFormField.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer2, },
    { type: _angular_core.ChangeDetectorRef, },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MD_PLACEHOLDER_GLOBAL_OPTIONS,] },] },
]; };
MdFormField.propDecorators = {
    'color': [{ type: _angular_core.Input },],
    'dividerColor': [{ type: _angular_core.Input },],
    'hideRequiredMarker': [{ type: _angular_core.Input },],
    'hintLabel': [{ type: _angular_core.Input },],
    'floatPlaceholder': [{ type: _angular_core.Input },],
    'underlineRef': [{ type: _angular_core.ViewChild, args: ['underline',] },],
    '_connectionContainerRef': [{ type: _angular_core.ViewChild, args: ['connectionContainer',] },],
    '_placeholder': [{ type: _angular_core.ViewChild, args: ['placeholder',] },],
    '_control': [{ type: _angular_core.ContentChild, args: [MdFormFieldControl,] },],
    '_placeholderChild': [{ type: _angular_core.ContentChild, args: [MdPlaceholder,] },],
    '_errorChildren': [{ type: _angular_core.ContentChildren, args: [MdError,] },],
    '_hintChildren': [{ type: _angular_core.ContentChildren, args: [MdHint,] },],
    '_prefixChildren': [{ type: _angular_core.ContentChildren, args: [MdPrefix,] },],
    '_suffixChildren': [{ type: _angular_core.ContentChildren, args: [MdSuffix,] },],
};
var MdFormFieldModule = (function () {
    function MdFormFieldModule() {
    }
    return MdFormFieldModule;
}());
MdFormFieldModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [
                    MdError,
                    MdHint,
                    MdFormField,
                    MdPlaceholder,
                    MdPrefix,
                    MdSuffix,
                ],
                imports: [
                    _angular_common.CommonModule,
                    _angular_cdk_platform.PlatformModule,
                ],
                exports: [
                    MdError,
                    MdHint,
                    MdFormField,
                    MdPlaceholder,
                    MdPrefix,
                    MdSuffix,
                ],
            },] },
];
/**
 * @nocollapse
 */
MdFormFieldModule.ctorParameters = function () { return []; };

/**
 * Function that attempts to coerce a value to a date using a DateAdapter. Date instances, null,
and undefined will be passed through. Empty strings will be coerced to null. Valid ISO 8601
strings (https://www.ietf.org/rfc/rfc3339.txt) will be coerced to dates. All other values will
result in an error being thrown.
\@param adapter The date adapter to use for coercion
\@param value The value to coerce.
\@return A date object coerced from the value.
\@throws Throws when the value cannot be coerced.
 * @template D
 * @param {?} adapter
 * @param {?} value
 * @return {?}
 */
function coerceDateProperty(adapter, value) {
    if (typeof value === 'string') {
        if (value == '') {
            value = null;
        }
        else {
            value = adapter.fromIso8601(value) || value;
        }
    }
    if (value == null || adapter.isDateInstance(value)) {
        return value;
    }
    throw Error("Datepicker: Value must be either a date object recognized by the DateAdapter or " +
        ("an ISO 8601 string. Instead got: " + value));
}
/**
 * \@docs-private
 * @param {?} provider
 * @return {?}
 */
function createMissingDateImplError(provider) {
    return Error("MdDatepicker: No provider found for " + provider + ". You must import one of the following " +
        "modules at your application root: MdNativeDateModule, or provide a custom implementation.");
}
/**
 * Datepicker data that requires internationalization.
 */
var MdDatepickerIntl = (function () {
    function MdDatepickerIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
        components if the labels have changed after initialization.
         */
        this.changes = new rxjs_Subject.Subject();
        /**
         * A label for the calendar popup (used by screen readers).
         */
        this.calendarLabel = 'Calendar';
        /**
         * A label for the button used to open the calendar popup (used by screen readers).
         */
        this.openCalendarLabel = 'Open calendar';
        /**
         * A label for the previous month button (used by screen readers).
         */
        this.prevMonthLabel = 'Previous month';
        /**
         * A label for the next month button (used by screen readers).
         */
        this.nextMonthLabel = 'Next month';
        /**
         * A label for the previous year button (used by screen readers).
         */
        this.prevYearLabel = 'Previous year';
        /**
         * A label for the next year button (used by screen readers).
         */
        this.nextYearLabel = 'Next year';
        /**
         * A label for the 'switch to month view' button (used by screen readers).
         */
        this.switchToMonthViewLabel = 'Change to month view';
        /**
         * A label for the 'switch to year view' button (used by screen readers).
         */
        this.switchToYearViewLabel = 'Change to year view';
    }
    return MdDatepickerIntl;
}());
MdDatepickerIntl.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
MdDatepickerIntl.ctorParameters = function () { return []; };
/**
 * A calendar that is used as part of the datepicker.
\@docs-private
 */
var MdCalendar = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _intl
     * @param {?} _ngZone
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     * @param {?} changeDetectorRef
     */
    function MdCalendar(_elementRef, _intl, _ngZone, _dateAdapter, _dateFormats, changeDetectorRef) {
        var _this = this;
        this._elementRef = _elementRef;
        this._intl = _intl;
        this._ngZone = _ngZone;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        /**
         * Whether the calendar should be started in month or year view.
         */
        this.startView = 'month';
        /**
         * Emits when the currently selected date changes.
         */
        this.selectedChange = new _angular_core.EventEmitter();
        /**
         * Emits when any date is selected.
         */
        this.userSelection = new _angular_core.EventEmitter();
        /**
         * Date filter for the month and year views.
         */
        this._dateFilterForViews = function (date) {
            return !!date &&
                (!_this.dateFilter || _this.dateFilter(date)) &&
                (!_this.minDate || _this._dateAdapter.compareDate(date, _this.minDate) >= 0) &&
                (!_this.maxDate || _this._dateAdapter.compareDate(date, _this.maxDate) <= 0);
        };
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MD_DATE_FORMATS');
        }
        this._intlChanges = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
    }
    Object.defineProperty(MdCalendar.prototype, "startAt", {
        /**
         * A date representing the period (month or year) to start the calendar in.
         * @return {?}
         */
        get: function () { return this._startAt; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) { this._startAt = coerceDateProperty(this._dateAdapter, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCalendar.prototype, "selected", {
        /**
         * The currently selected date.
         * @return {?}
         */
        get: function () { return this._selected; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) { this._selected = coerceDateProperty(this._dateAdapter, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCalendar.prototype, "minDate", {
        /**
         * The minimum selectable date.
         * @return {?}
         */
        get: function () { return this._minDate; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) { this._minDate = coerceDateProperty(this._dateAdapter, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCalendar.prototype, "maxDate", {
        /**
         * The maximum selectable date.
         * @return {?}
         */
        get: function () { return this._maxDate; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) { this._maxDate = coerceDateProperty(this._dateAdapter, value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCalendar.prototype, "_activeDate", {
        /**
         * The current active date. This determines which time period is shown and which date is
        highlighted when using keyboard navigation.
         * @return {?}
         */
        get: function () { return this._clampedActiveDate; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCalendar.prototype, "_periodButtonText", {
        /**
         * The label for the current calendar view.
         * @return {?}
         */
        get: function () {
            return this._monthView ?
                this._dateAdapter.format(this._activeDate, this._dateFormats.display.monthYearLabel)
                    .toLocaleUpperCase() :
                this._dateAdapter.getYearName(this._activeDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCalendar.prototype, "_periodButtonLabel", {
        /**
         * @return {?}
         */
        get: function () {
            return this._monthView ? this._intl.switchToYearViewLabel : this._intl.switchToMonthViewLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCalendar.prototype, "_prevButtonLabel", {
        /**
         * The label for the the previous button.
         * @return {?}
         */
        get: function () {
            return this._monthView ? this._intl.prevMonthLabel : this._intl.prevYearLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCalendar.prototype, "_nextButtonLabel", {
        /**
         * The label for the the next button.
         * @return {?}
         */
        get: function () {
            return this._monthView ? this._intl.nextMonthLabel : this._intl.nextYearLabel;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdCalendar.prototype.ngAfterContentInit = function () {
        this._activeDate = this.startAt || this._dateAdapter.today();
        this._focusActiveCell();
        this._monthView = this.startView != 'year';
    };
    /**
     * @return {?}
     */
    MdCalendar.prototype.ngOnDestroy = function () {
        this._intlChanges.unsubscribe();
    };
    /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    MdCalendar.prototype._dateSelected = function (date) {
        if (!this._dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
        }
    };
    /**
     * @return {?}
     */
    MdCalendar.prototype._userSelected = function () {
        this.userSelection.emit();
    };
    /**
     * Handles month selection in the year view.
     * @param {?} month
     * @return {?}
     */
    MdCalendar.prototype._monthSelected = function (month) {
        this._activeDate = month;
        this._monthView = true;
    };
    /**
     * Handles user clicks on the period label.
     * @return {?}
     */
    MdCalendar.prototype._currentPeriodClicked = function () {
        this._monthView = !this._monthView;
    };
    /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    MdCalendar.prototype._previousClicked = function () {
        this._activeDate = this._monthView ?
            this._dateAdapter.addCalendarMonths(this._activeDate, -1) :
            this._dateAdapter.addCalendarYears(this._activeDate, -1);
    };
    /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    MdCalendar.prototype._nextClicked = function () {
        this._activeDate = this._monthView ?
            this._dateAdapter.addCalendarMonths(this._activeDate, 1) :
            this._dateAdapter.addCalendarYears(this._activeDate, 1);
    };
    /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    MdCalendar.prototype._previousEnabled = function () {
        if (!this.minDate) {
            return true;
        }
        return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
    };
    /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    MdCalendar.prototype._nextEnabled = function () {
        return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
    };
    /**
     * Handles keydown events on the calendar body.
     * @param {?} event
     * @return {?}
     */
    MdCalendar.prototype._handleCalendarBodyKeydown = function (event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        if (this._monthView) {
            this._handleCalendarBodyKeydownInMonthView(event);
        }
        else {
            this._handleCalendarBodyKeydownInYearView(event);
        }
    };
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    MdCalendar.prototype._focusActiveCell = function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            rxjs_operator_first.first.call(_this._ngZone.onStable.asObservable()).subscribe(function () {
                _this._elementRef.nativeElement.querySelector('.mat-calendar-body-active').focus();
            });
        });
    };
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    MdCalendar.prototype._isSameView = function (date1, date2) {
        return this._monthView ?
            this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2) :
            this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
    };
    /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    MdCalendar.prototype._handleCalendarBodyKeydownInMonthView = function (event) {
        switch (event.keyCode) {
            case _angular_cdk_keycodes.LEFT_ARROW:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -1);
                break;
            case _angular_cdk_keycodes.RIGHT_ARROW:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1);
                break;
            case _angular_cdk_keycodes.UP_ARROW:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case _angular_cdk_keycodes.DOWN_ARROW:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case _angular_cdk_keycodes.HOME:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case _angular_cdk_keycodes.END:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate)));
                break;
            case _angular_cdk_keycodes.PAGE_UP:
                this._activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case _angular_cdk_keycodes.PAGE_DOWN:
                this._activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case _angular_cdk_keycodes.ENTER:
                if (this._dateFilterForViews(this._activeDate)) {
                    this._dateSelected(this._activeDate);
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
    MdCalendar.prototype._handleCalendarBodyKeydownInYearView = function (event) {
        switch (event.keyCode) {
            case _angular_cdk_keycodes.LEFT_ARROW:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case _angular_cdk_keycodes.RIGHT_ARROW:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case _angular_cdk_keycodes.UP_ARROW:
                this._activeDate = this._prevMonthInSameCol(this._activeDate);
                break;
            case _angular_cdk_keycodes.DOWN_ARROW:
                this._activeDate = this._nextMonthInSameCol(this._activeDate);
                break;
            case _angular_cdk_keycodes.HOME:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes.END:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes.PAGE_UP:
                this._activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case _angular_cdk_keycodes.PAGE_DOWN:
                this._activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case _angular_cdk_keycodes.ENTER:
                this._monthSelected(this._activeDate);
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * Determine the date for the month that comes before the given month in the same column in the
    calendar table.
     * @param {?} date
     * @return {?}
     */
    MdCalendar.prototype._prevMonthInSameCol = function (date) {
        // Determine how many months to jump forward given that there are 2 empty slots at the beginning
        // of each year.
        var /** @type {?} */ increment = this._dateAdapter.getMonth(date) <= 4 ? -5 :
            (this._dateAdapter.getMonth(date) >= 7 ? -7 : -12);
        return this._dateAdapter.addCalendarMonths(date, increment);
    };
    /**
     * Determine the date for the month that comes after the given month in the same column in the
    calendar table.
     * @param {?} date
     * @return {?}
     */
    MdCalendar.prototype._nextMonthInSameCol = function (date) {
        // Determine how many months to jump forward given that there are 2 empty slots at the beginning
        // of each year.
        var /** @type {?} */ increment = this._dateAdapter.getMonth(date) <= 4 ? 7 :
            (this._dateAdapter.getMonth(date) >= 7 ? 5 : 12);
        return this._dateAdapter.addCalendarMonths(date, increment);
    };
    return MdCalendar;
}());
MdCalendar.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'md-calendar, mat-calendar',
                template: "<div class=\"mat-calendar-header\"><div class=\"mat-calendar-controls\"><button mat-button class=\"mat-calendar-period-button\" (click)=\"_currentPeriodClicked()\" [attr.aria-label]=\"_periodButtonLabel\">{{_periodButtonText}}<div class=\"mat-calendar-arrow\" [class.mat-calendar-invert]=\"!_monthView\"></div></button><div class=\"mat-calendar-spacer\"></div><button mat-icon-button class=\"mat-calendar-previous-button\" [disabled]=\"!_previousEnabled()\" (click)=\"_previousClicked()\" [attr.aria-label]=\"_prevButtonLabel\"></button> <button mat-icon-button class=\"mat-calendar-next-button\" [disabled]=\"!_nextEnabled()\" (click)=\"_nextClicked()\" [attr.aria-label]=\"_nextButtonLabel\"></button></div></div><div class=\"mat-calendar-content\" (keydown)=\"_handleCalendarBodyKeydown($event)\" [ngSwitch]=\"_monthView\" cdkMonitorSubtreeFocus><md-month-view *ngSwitchCase=\"true\" [activeDate]=\"_activeDate\" [selected]=\"selected\" [dateFilter]=\"_dateFilterForViews\" (selectedChange)=\"_dateSelected($event)\" (userSelection)=\"_userSelected()\"></md-month-view><mat-year-view *ngSwitchDefault [activeDate]=\"_activeDate\" [selected]=\"selected\" [dateFilter]=\"_dateFilterForViews\" (selectedChange)=\"_monthSelected($event)\"></mat-year-view></div>",
                styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:0}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button::after,.mat-calendar-previous-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:'';margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:'';position:absolute;top:0;left:-8px;right:-8px;height:1px}"],
                host: {
                    'class': 'mat-calendar',
                },
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdCalendar.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: MdDatepickerIntl, },
    { type: _angular_core.NgZone, },
    { type: DateAdapter, decorators: [{ type: _angular_core.Optional },] },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MD_DATE_FORMATS,] },] },
    { type: _angular_core.ChangeDetectorRef, },
]; };
MdCalendar.propDecorators = {
    'startAt': [{ type: _angular_core.Input },],
    'startView': [{ type: _angular_core.Input },],
    'selected': [{ type: _angular_core.Input },],
    'minDate': [{ type: _angular_core.Input },],
    'maxDate': [{ type: _angular_core.Input },],
    'dateFilter': [{ type: _angular_core.Input },],
    'selectedChange': [{ type: _angular_core.Output },],
    'userSelection': [{ type: _angular_core.Output },],
};
/**
 * An internal class that represents the data corresponding to a single calendar cell.
\@docs-private
 */
var MdCalendarCell = (function () {
    /**
     * @param {?} value
     * @param {?} displayValue
     * @param {?} ariaLabel
     * @param {?} enabled
     */
    function MdCalendarCell(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
    return MdCalendarCell;
}());
/**
 * An internal component used to display calendar data in a table.
\@docs-private
 */
var MdCalendarBody = (function () {
    function MdCalendarBody() {
        /**
         * The number of columns in the table.
         */
        this.numCols = 7;
        /**
         * Whether to allow selection of disabled cells.
         */
        this.allowDisabledSelection = false;
        /**
         * The cell number of the active cell in the table.
         */
        this.activeCell = 0;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
        maintained even as the table resizes.
         */
        this.cellAspectRatio = 1;
        /**
         * Emits when a new value is selected.
         */
        this.selectedValueChange = new _angular_core.EventEmitter();
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    MdCalendarBody.prototype._cellClicked = function (cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    };
    Object.defineProperty(MdCalendarBody.prototype, "_firstRowOffset", {
        /**
         * The number of blank cells to put at the beginning for the first row.
         * @return {?}
         */
        get: function () {
            return this.rows && this.rows.length && this.rows[0].length ?
                this.numCols - this.rows[0].length : 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    MdCalendarBody.prototype._isActiveCell = function (rowIndex, colIndex) {
        var /** @type {?} */ cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    };
    return MdCalendarBody;
}());
MdCalendarBody.decorators = [
    { type: _angular_core.Component, args: [{ selector: '[md-calendar-body], [mat-calendar-body]',
                template: "<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\"><td class=\"mat-calendar-body-label\" [attr.colspan]=\"numCols\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\">{{label}}</td></tr><tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\"><td *ngIf=\"rowIndex === 0 && _firstRowOffset\" aria-hidden=\"true\" class=\"mat-calendar-body-label\" [attr.colspan]=\"_firstRowOffset\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\">{{_firstRowOffset >= labelMinRequiredCells ? label : ''}}</td><td *ngFor=\"let item of row; let colIndex = index\" role=\"gridcell\" class=\"mat-calendar-body-cell\" [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\" [class.mat-calendar-body-disabled]=\"!item.enabled\" [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\" [attr.aria-label]=\"item.ariaLabel\" [attr.aria-disabled]=\"!item.enabled || null\" (click)=\"_cellClicked(item)\" [style.width.%]=\"100 / numCols\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\"><div class=\"mat-calendar-body-cell-content\" [class.mat-calendar-body-selected]=\"selectedValue === item.value\" [class.mat-calendar-body-today]=\"todayValue === item.value\">{{item.displayValue}}</div></td></tr>",
                styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.71429%;padding-right:4.71429%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:0;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}[dir=rtl] .mat-calendar-body-label{text-align:right}"],
                host: {
                    'class': 'mat-calendar-body',
                },
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
MdCalendarBody.ctorParameters = function () { return []; };
MdCalendarBody.propDecorators = {
    'label': [{ type: _angular_core.Input },],
    'rows': [{ type: _angular_core.Input },],
    'todayValue': [{ type: _angular_core.Input },],
    'selectedValue': [{ type: _angular_core.Input },],
    'labelMinRequiredCells': [{ type: _angular_core.Input },],
    'numCols': [{ type: _angular_core.Input },],
    'allowDisabledSelection': [{ type: _angular_core.Input },],
    'activeCell': [{ type: _angular_core.Input },],
    'cellAspectRatio': [{ type: _angular_core.Input },],
    'selectedValueChange': [{ type: _angular_core.Output },],
};
/**
 * Used to generate a unique ID for each datepicker instance.
 */
var datepickerUid = 0;
/**
 * Injection token that determines the scroll handling while the calendar is open.
 */
var MD_DATEPICKER_SCROLL_STRATEGY = new _angular_core.InjectionToken('md-datepicker-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER = {
    provide: MD_DATEPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay.Overlay],
    useFactory: MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
MdCalendar directly as the content so we can control the initial focus. This also gives us a
place to put additional features of the popup that are not part of the calendar itself in the
future. (e.g. confirmation buttons).
\@docs-private
 */
var MdDatepickerContent = (function () {
    function MdDatepickerContent() {
    }
    /**
     * @return {?}
     */
    MdDatepickerContent.prototype.ngAfterContentInit = function () {
        this._calendar._focusActiveCell();
    };
    /**
     * Handles keydown event on datepicker content.
    \@param event The event.
     * @param {?} event
     * @return {?}
     */
    MdDatepickerContent.prototype._handleKeydown = function (event) {
        if (event.keyCode === _angular_cdk_keycodes.ESCAPE) {
            this.datepicker.close();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    return MdDatepickerContent;
}());
MdDatepickerContent.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'md-datepicker-content, mat-datepicker-content',
                template: "<mat-calendar cdkTrapFocus [id]=\"datepicker.id\" [startAt]=\"datepicker.startAt\" [startView]=\"datepicker.startView\" [minDate]=\"datepicker._minDate\" [maxDate]=\"datepicker._maxDate\" [dateFilter]=\"datepicker._dateFilter\" [selected]=\"datepicker._selected\" (selectedChange)=\"datepicker._select($event)\" (userSelection)=\"datepicker.close()\"></mat-calendar>",
                styles: [".mat-datepicker-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:block}.mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation:landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation:portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}"],
                host: {
                    'class': 'mat-datepicker-content',
                    '[class.mat-datepicker-content-touch]': 'datepicker.touchUi',
                    '(keydown)': '_handleKeydown($event)',
                },
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdDatepickerContent.ctorParameters = function () { return []; };
MdDatepickerContent.propDecorators = {
    '_calendar': [{ type: _angular_core.ViewChild, args: [MdCalendar,] },],
};
/**
 * Component responsible for managing the datepicker popup/dialog.
 */
var MdDatepicker = (function () {
    /**
     * @param {?} _dialog
     * @param {?} _overlay
     * @param {?} _ngZone
     * @param {?} _viewContainerRef
     * @param {?} _scrollStrategy
     * @param {?} _dateAdapter
     * @param {?} _dir
     * @param {?} _document
     */
    function MdDatepicker(_dialog, _overlay, _ngZone, _viewContainerRef, _scrollStrategy, _dateAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._scrollStrategy = _scrollStrategy;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /**
         * The view that the calendar should start in.
         */
        this.startView = 'month';
        /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
        than a popup and elements have more padding to allow for bigger touch targets.
         */
        this.touchUi = false;
        /**
         * Emits new selected date when selected date changes.
        \@deprecated Switch to the `dateChange` and `dateInput` binding on the input element.
         */
        this.selectedChanged = new _angular_core.EventEmitter();
        /**
         * Whether the calendar is open.
         */
        this.opened = false;
        /**
         * The id for the datepicker calendar.
         */
        this.id = "md-datepicker-" + datepickerUid++;
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */
        this._focusedElementBeforeOpen = null;
        this._inputSubscription = rxjs_Subscription.Subscription.EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */
        this._disabledChange = new rxjs_Subject.Subject();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
    }
    Object.defineProperty(MdDatepicker.prototype, "startAt", {
        /**
         * The date to open the calendar to initially.
         * @return {?}
         */
        get: function () {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        },
        /**
         * @param {?} date
         * @return {?}
         */
        set: function (date) { this._startAt = coerceDateProperty(this._dateAdapter, date); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "disabled", {
        /**
         * Whether the datepicker pop-up should be disabled.
         * @return {?}
         */
        get: function () {
            return this._disabled === undefined ? this._datepickerInput.disabled : this._disabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            var /** @type {?} */ newValue = _angular_cdk_coercion.coerceBooleanProperty(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._disabledChange.next(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "_selected", {
        /**
         * The currently selected date.
         * @return {?}
         */
        get: function () { return this._validSelected; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) { this._validSelected = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "_minDate", {
        /**
         * The minimum selectable date.
         * @return {?}
         */
        get: function () {
            return this._datepickerInput && this._datepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "_maxDate", {
        /**
         * The maximum selectable date.
         * @return {?}
         */
        get: function () {
            return this._datepickerInput && this._datepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepicker.prototype, "_dateFilter", {
        /**
         * @return {?}
         */
        get: function () {
            return this._datepickerInput && this._datepickerInput._dateFilter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdDatepicker.prototype.ngOnDestroy = function () {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
        }
    };
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    MdDatepicker.prototype._select = function (date) {
        var /** @type {?} */ oldValue = this._selected;
        this._selected = date;
        if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
            this.selectedChanged.emit(date);
        }
    };
    /**
     * Register an input with this datepicker.
    \@param input The datepicker input to register with this datepicker.
     * @param {?} input
     * @return {?}
     */
    MdDatepicker.prototype._registerInput = function (input) {
        var _this = this;
        if (this._datepickerInput) {
            throw Error('An MdDatepicker can only be associated with a single input.');
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe(function (value) { return _this._selected = value; });
    };
    /**
     * Open the calendar.
     * @return {?}
     */
    MdDatepicker.prototype.open = function () {
        if (this.opened || this.disabled) {
            return;
        }
        if (!this._datepickerInput) {
            throw Error('Attempted to open an MdDatepicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this.opened = true;
    };
    /**
     * Close the calendar.
     * @return {?}
     */
    MdDatepicker.prototype.close = function () {
        if (!this.opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
        }
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            this._focusedElementBeforeOpen.focus();
            this._focusedElementBeforeOpen = null;
        }
        this.opened = false;
    };
    /**
     * Open the calendar as a dialog.
     * @return {?}
     */
    MdDatepicker.prototype._openAsDialog = function () {
        var _this = this;
        this._dialogRef = this._dialog.open(MdDatepickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
        });
        this._dialogRef.afterClosed().subscribe(function () { return _this.close(); });
        this._dialogRef.componentInstance.datepicker = this;
    };
    /**
     * Open the calendar as a popup.
     * @return {?}
     */
    MdDatepicker.prototype._openAsPopup = function () {
        var _this = this;
        if (!this._calendarPortal) {
            this._calendarPortal = new _angular_cdk_portal.ComponentPortal(MdDatepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            var /** @type {?} */ componentRef = this._popupRef.attach(this._calendarPortal);
            componentRef.instance.datepicker = this;
            // Update the position once the calendar has rendered.
            _angular_cdk_rxjs.first.call(this._ngZone.onStable.asObservable()).subscribe(function () {
                _this._popupRef.updatePosition();
            });
        }
        this._popupRef.backdropClick().subscribe(function () { return _this.close(); });
    };
    /**
     * Create the popup.
     * @return {?}
     */
    MdDatepicker.prototype._createPopup = function () {
        var /** @type {?} */ overlayState = new _angular_cdk_overlay.OverlayConfig({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir ? this._dir.value : 'ltr',
            scrollStrategy: this._scrollStrategy()
        });
        this._popupRef = this._overlay.create(overlayState);
    };
    /**
     * Create the popup PositionStrategy.
     * @return {?}
     */
    MdDatepicker.prototype._createPopupPositionStrategy = function () {
        return this._overlay.position()
            .connectedTo(this._datepickerInput.getPopupConnectionElementRef(), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
            .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' });
    };
    return MdDatepicker;
}());
MdDatepicker.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'md-datepicker, mat-datepicker',
                template: '',
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
            },] },
];
/**
 * @nocollapse
 */
MdDatepicker.ctorParameters = function () { return [
    { type: MdDialog, },
    { type: _angular_cdk_overlay.Overlay, },
    { type: _angular_core.NgZone, },
    { type: _angular_core.ViewContainerRef, },
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [MD_DATEPICKER_SCROLL_STRATEGY,] },] },
    { type: DateAdapter, decorators: [{ type: _angular_core.Optional },] },
    { type: _angular_cdk_bidi.Directionality, decorators: [{ type: _angular_core.Optional },] },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [_angular_platformBrowser.DOCUMENT,] },] },
]; };
MdDatepicker.propDecorators = {
    'startAt': [{ type: _angular_core.Input },],
    'startView': [{ type: _angular_core.Input },],
    'touchUi': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'selectedChanged': [{ type: _angular_core.Output },],
};
var MD_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return MdDatepickerInput; }),
    multi: true
};
var MD_DATEPICKER_VALIDATORS = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return MdDatepickerInput; }),
    multi: true
};
/**
 * An event used for datepicker input and change events. We don't always have access to a native
input or change event because the event may have been triggered by the user clicking on the
calendar popup. For consistency, we always use MdDatepickerInputEvent instead.
 */
var MdDatepickerInputEvent = (function () {
    /**
     * @param {?} target
     * @param {?} targetElement
     */
    function MdDatepickerInputEvent(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
    return MdDatepickerInputEvent;
}());
/**
 * Directive used to connect an input to a MdDatepicker.
 */
var MdDatepickerInput = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     * @param {?} _mdFormField
     */
    function MdDatepickerInput(_elementRef, _renderer, _dateAdapter, _dateFormats, _mdFormField) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._mdFormField = _mdFormField;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */
        this.dateChange = new _angular_core.EventEmitter();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */
        this.dateInput = new _angular_core.EventEmitter();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */
        this._valueChange = new _angular_core.EventEmitter();
        /**
         * Emits when the disabled state has changed
         */
        this._disabledChange = new _angular_core.EventEmitter();
        this._onTouched = function () { };
        this._cvaOnChange = function () { };
        this._validatorOnChange = function () { };
        this._datepickerSubscription = rxjs_Subscription.Subscription.EMPTY;
        this._localeSubscription = rxjs_Subscription.Subscription.EMPTY;
        /**
         * The form control validator for whether the input parses.
         */
        this._parseValidator = function () {
            return _this._lastValueValid ?
                null : { 'mdDatepickerParse': { 'text': _this._elementRef.nativeElement.value } };
        };
        /**
         * The form control validator for the min date.
         */
        this._minValidator = function (control) {
            var controlValue = coerceDateProperty(_this._dateAdapter, control.value);
            return (!_this.min || !controlValue ||
                _this._dateAdapter.compareDate(_this.min, controlValue) <= 0) ?
                null : { 'mdDatepickerMin': { 'min': _this.min, 'actual': controlValue } };
        };
        /**
         * The form control validator for the max date.
         */
        this._maxValidator = function (control) {
            var controlValue = coerceDateProperty(_this._dateAdapter, control.value);
            return (!_this.max || !controlValue ||
                _this._dateAdapter.compareDate(_this.max, controlValue) >= 0) ?
                null : { 'mdDatepickerMax': { 'max': _this.max, 'actual': controlValue } };
        };
        /**
         * The form control validator for the date filter.
         */
        this._filterValidator = function (control) {
            var controlValue = coerceDateProperty(_this._dateAdapter, control.value);
            return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue) ?
                null : { 'mdDatepickerFilter': true };
        };
        /**
         * The combined form control validator for this input.
         */
        this._validator = _angular_forms.Validators.compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /**
         * Whether the last value set on the input was valid.
         */
        this._lastValueValid = false;
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MD_DATE_FORMATS');
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe(function () {
            _this.value = _this.value;
        });
    }
    Object.defineProperty(MdDatepickerInput.prototype, "mdDatepicker", {
        /**
         * The datepicker that this input is associated with.
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this.registerDatepicker(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    MdDatepickerInput.prototype.registerDatepicker = function (value) {
        if (value) {
            this._datepicker = value;
            this._datepicker._registerInput(this);
        }
    };
    Object.defineProperty(MdDatepickerInput.prototype, "matDatepicker", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            // Note that we don't set `this.mdDatepicker = value` here,
            // because that line gets stripped by the JS compiler.
            this.registerDatepicker(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepickerInput.prototype, "mdDatepickerFilter", {
        /**
         * @param {?} filter
         * @return {?}
         */
        set: function (filter$$1) {
            this._dateFilter = filter$$1;
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepickerInput.prototype, "matDatepickerFilter", {
        /**
         * @param {?} filter
         * @return {?}
         */
        set: function (filter$$1) {
            this.mdDatepickerFilter = filter$$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepickerInput.prototype, "value", {
        /**
         * The value of the input.
         * @return {?}
         */
        get: function () {
            return this._value;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            value = coerceDateProperty(this._dateAdapter, value);
            this._lastValueValid = !value || this._dateAdapter.isValid(value);
            value = this._getValidDateOrNull(value);
            var /** @type {?} */ oldDate = this.value;
            this._value = value;
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '');
            if (!this._dateAdapter.sameDate(oldDate, value)) {
                this._valueChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepickerInput.prototype, "min", {
        /**
         * The minimum valid date.
         * @return {?}
         */
        get: function () { return this._min; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._min = coerceDateProperty(this._dateAdapter, value);
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepickerInput.prototype, "max", {
        /**
         * The maximum valid date.
         * @return {?}
         */
        get: function () { return this._max; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._max = coerceDateProperty(this._dateAdapter, value);
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDatepickerInput.prototype, "disabled", {
        /**
         * Whether the datepicker-input is disabled.
         * @return {?}
         */
        get: function () { return this._disabled; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            var /** @type {?} */ newValue = _angular_cdk_coercion.coerceBooleanProperty(value);
            if (this._disabled !== newValue) {
                this._disabled = newValue;
                this._disabledChange.emit(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdDatepickerInput.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._datepicker) {
            this._datepickerSubscription =
                this._datepicker.selectedChanged.subscribe(function (selected) {
                    _this.value = selected;
                    _this._cvaOnChange(selected);
                    _this._onTouched();
                    _this.dateInput.emit(new MdDatepickerInputEvent(_this, _this._elementRef.nativeElement));
                    _this.dateChange.emit(new MdDatepickerInputEvent(_this, _this._elementRef.nativeElement));
                });
        }
    };
    /**
     * @return {?}
     */
    MdDatepickerInput.prototype.ngOnDestroy = function () {
        this._datepickerSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this._valueChange.complete();
        this._disabledChange.complete();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MdDatepickerInput.prototype.registerOnValidatorChange = function (fn) {
        this._validatorOnChange = fn;
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MdDatepickerInput.prototype.validate = function (c) {
        return this._validator ? this._validator(c) : null;
    };
    /**
     * Gets the element that the datepicker popup should be connected to.
    \@return The element to connect the popup to.
     * @return {?}
     */
    MdDatepickerInput.prototype.getPopupConnectionElementRef = function () {
        return this._mdFormField ? this._mdFormField.underlineRef : this._elementRef;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdDatepickerInput.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MdDatepickerInput.prototype.registerOnChange = function (fn) {
        this._cvaOnChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MdDatepickerInput.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    MdDatepickerInput.prototype.setDisabledState = function (disabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', disabled);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdDatepickerInput.prototype._onKeydown = function (event) {
        if (event.altKey && event.keyCode === _angular_cdk_keycodes.DOWN_ARROW) {
            this._datepicker.open();
            event.preventDefault();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdDatepickerInput.prototype._onInput = function (value) {
        var /** @type {?} */ date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
        this._lastValueValid = !date || this._dateAdapter.isValid(date);
        date = this._getValidDateOrNull(date);
        this._value = date;
        this._cvaOnChange(date);
        this._valueChange.emit(date);
        this.dateInput.emit(new MdDatepickerInputEvent(this, this._elementRef.nativeElement));
    };
    /**
     * @return {?}
     */
    MdDatepickerInput.prototype._onChange = function () {
        this.dateChange.emit(new MdDatepickerInputEvent(this, this._elementRef.nativeElement));
    };
    /**
     * @param {?} obj The object to check.
     * @return {?}
     */
    MdDatepickerInput.prototype._getValidDateOrNull = function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    return MdDatepickerInput;
}());
MdDatepickerInput.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: 'input[mdDatepicker], input[matDatepicker]',
                providers: [MD_DATEPICKER_VALUE_ACCESSOR, MD_DATEPICKER_VALIDATORS],
                host: {
                    '[attr.aria-haspopup]': 'true',
                    '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
                    '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
                    '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(blur)': '_onTouched()',
                    '(keydown)': '_onKeydown($event)',
                },
                exportAs: 'mdDatepickerInput, matDatepickerInput',
            },] },
];
/**
 * @nocollapse
 */
MdDatepickerInput.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: _angular_core.Renderer2, },
    { type: DateAdapter, decorators: [{ type: _angular_core.Optional },] },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MD_DATE_FORMATS,] },] },
    { type: MdFormField, decorators: [{ type: _angular_core.Optional },] },
]; };
MdDatepickerInput.propDecorators = {
    'mdDatepicker': [{ type: _angular_core.Input },],
    'matDatepicker': [{ type: _angular_core.Input },],
    'mdDatepickerFilter': [{ type: _angular_core.Input },],
    'matDatepickerFilter': [{ type: _angular_core.Input },],
    'value': [{ type: _angular_core.Input },],
    'min': [{ type: _angular_core.Input },],
    'max': [{ type: _angular_core.Input },],
    'disabled': [{ type: _angular_core.Input },],
    'dateChange': [{ type: _angular_core.Output },],
    'dateInput': [{ type: _angular_core.Output },],
};
var MdDatepickerToggle = (function () {
    /**
     * @param {?} _intl
     * @param {?} _changeDetectorRef
     */
    function MdDatepickerToggle(_intl, _changeDetectorRef) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = rxjs_Subscription.Subscription.EMPTY;
    }
    Object.defineProperty(MdDatepickerToggle.prototype, "disabled", {
        /**
         * Whether the toggle button is disabled.
         * @return {?}
         */
        get: function () {
            return this._disabled === undefined ? this.datepicker.disabled : this._disabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._disabled = _angular_cdk_coercion.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    MdDatepickerToggle.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.datepicker) {
            var /** @type {?} */ datepicker = changes.datepicker.currentValue;
            var /** @type {?} */ datepickerDisabled = datepicker ? datepicker._disabledChange : rxjs_observable_of.of();
            var /** @type {?} */ inputDisabled = datepicker && datepicker._datepickerInput ?
                datepicker._datepickerInput._disabledChange :
                rxjs_observable_of.of();
            this._stateChanges.unsubscribe();
            this._stateChanges = rxjs_observable_merge.merge(this._intl.changes, datepickerDisabled, inputDisabled)
                .subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
        }
    };
    /**
     * @return {?}
     */
    MdDatepickerToggle.prototype.ngOnDestroy = function () {
        this._stateChanges.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdDatepickerToggle.prototype._open = function (event) {
        if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
        }
    };
    return MdDatepickerToggle;
}());
MdDatepickerToggle.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'md-datepicker-toggle, mat-datepicker-toggle',
                template: "<button mat-icon-button type=\"button\" [attr.aria-label]=\"_intl.openCalendarLabel\" [disabled]=\"disabled\" (click)=\"_open($event)\"><mat-icon><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\" style=\"vertical-align: top\" focusable=\"false\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/></svg></mat-icon></button>",
                host: {
                    'class': 'mat-datepicker-toggle',
                },
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdDatepickerToggle.ctorParameters = function () { return [
    { type: MdDatepickerIntl, },
    { type: _angular_core.ChangeDetectorRef, },
]; };
MdDatepickerToggle.propDecorators = {
    'datepicker': [{ type: _angular_core.Input, args: ['for',] },],
    'disabled': [{ type: _angular_core.Input },],
};
var DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
\@docs-private
 */
var MdMonthView = (function () {
    /**
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     */
    function MdMonthView(_dateAdapter, _dateFormats) {
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        /**
         * Emits when a new date is selected.
         */
        this.selectedChange = new _angular_core.EventEmitter();
        /**
         * Emits when any date is selected.
         */
        this.userSelection = new _angular_core.EventEmitter();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MD_DATE_FORMATS');
        }
        var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
        var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
        var longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        var weekdays = longWeekdays.map(function (long, i) {
            return { long: long, narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MdMonthView.prototype, "activeDate", {
        /**
         * The date to display in this month view (everything other than the month and year is ignored).
         * @return {?}
         */
        get: function () { return this._activeDate; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            var /** @type {?} */ oldActiveDate = this._activeDate;
            this._activeDate = coerceDateProperty(this._dateAdapter, value) || this._dateAdapter.today();
            if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMonthView.prototype, "selected", {
        /**
         * The currently selected date.
         * @return {?}
         */
        get: function () { return this._selected; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._selected = coerceDateProperty(this._dateAdapter, value);
            this._selectedDate = this._getDateInCurrentMonth(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdMonthView.prototype.ngAfterContentInit = function () {
        this._init();
    };
    /**
     * Handles when a new date is selected.
     * @param {?} date
     * @return {?}
     */
    MdMonthView.prototype._dateSelected = function (date) {
        if (this._selectedDate != date) {
            var /** @type {?} */ selectedYear = this._dateAdapter.getYear(this.activeDate);
            var /** @type {?} */ selectedMonth = this._dateAdapter.getMonth(this.activeDate);
            var /** @type {?} */ selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
            this.selectedChange.emit(selectedDate);
        }
        this.userSelection.emit();
    };
    /**
     * Initializes this month view.
     * @return {?}
     */
    MdMonthView.prototype._init = function () {
        this._selectedDate = this._getDateInCurrentMonth(this.selected);
        this._todayDate = this._getDateInCurrentMonth(this._dateAdapter.today());
        this._monthLabel =
            this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                .toLocaleUpperCase();
        var /** @type {?} */ firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._createWeekCells();
    };
    /**
     * Creates MdCalendarCells for the dates in this month.
     * @return {?}
     */
    MdMonthView.prototype._createWeekCells = function () {
        var /** @type {?} */ daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
        var /** @type {?} */ dateNames = this._dateAdapter.getDateNames();
        this._weeks = [[]];
        for (var /** @type {?} */ i = 0, /** @type {?} */ cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            var /** @type {?} */ date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            var /** @type {?} */ enabled = !this.dateFilter ||
                this.dateFilter(date);
            var /** @type {?} */ ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            this._weeks[this._weeks.length - 1]
                .push(new MdCalendarCell(i + 1, dateNames[i], ariaLabel, enabled));
        }
    };
    /**
     * Gets the date in this month that the given Date falls on.
    Returns null if the given Date is in another month.
     * @param {?} date
     * @return {?}
     */
    MdMonthView.prototype._getDateInCurrentMonth = function (date) {
        return date && this._hasSameMonthAndYear(date, this.activeDate) ?
            this._dateAdapter.getDate(date) : null;
    };
    /**
     * Checks whether the 2 dates are non-null and fall within the same month of the same year.
     * @param {?} d1
     * @param {?} d2
     * @return {?}
     */
    MdMonthView.prototype._hasSameMonthAndYear = function (d1, d2) {
        return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
            this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    };
    return MdMonthView;
}());
MdMonthView.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'md-month-view',
                template: "<table class=\"mat-calendar-table\"><thead class=\"mat-calendar-table-header\"><tr><th *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr></thead><tbody mat-calendar-body role=\"grid\" [label]=\"_monthLabel\" [rows]=\"_weeks\" [todayValue]=\"_todayDate\" [selectedValue]=\"_selectedDate\" [labelMinRequiredCells]=\"3\" [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\" (selectedValueChange)=\"_dateSelected($event)\"></tbody></table>",
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdMonthView.ctorParameters = function () { return [
    { type: DateAdapter, decorators: [{ type: _angular_core.Optional },] },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MD_DATE_FORMATS,] },] },
]; };
MdMonthView.propDecorators = {
    'activeDate': [{ type: _angular_core.Input },],
    'selected': [{ type: _angular_core.Input },],
    'dateFilter': [{ type: _angular_core.Input },],
    'selectedChange': [{ type: _angular_core.Output },],
    'userSelection': [{ type: _angular_core.Output },],
};
/**
 * An internal component used to display a single year in the datepicker.
\@docs-private
 */
var MdYearView = (function () {
    /**
     * @param {?} _dateAdapter
     * @param {?} _dateFormats
     */
    function MdYearView(_dateAdapter, _dateFormats) {
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        /**
         * Emits when a new month is selected.
         */
        this.selectedChange = new _angular_core.EventEmitter();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MD_DATE_FORMATS');
        }
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MdYearView.prototype, "activeDate", {
        /**
         * The date to display in this year view (everything other than the year is ignored).
         * @return {?}
         */
        get: function () { return this._activeDate; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            var /** @type {?} */ oldActiveDate = this._activeDate;
            this._activeDate = coerceDateProperty(this._dateAdapter, value) || this._dateAdapter.today();
            if (this._dateAdapter.getYear(oldActiveDate) != this._dateAdapter.getYear(this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdYearView.prototype, "selected", {
        /**
         * The currently selected date.
         * @return {?}
         */
        get: function () { return this._selected; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._selected = coerceDateProperty(this._dateAdapter, value);
            this._selectedMonth = this._getMonthInCurrentYear(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdYearView.prototype.ngAfterContentInit = function () {
        this._init();
    };
    /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    MdYearView.prototype._monthSelected = function (month) {
        var /** @type {?} */ daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1));
        this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    };
    /**
     * Initializes this month view.
     * @return {?}
     */
    MdYearView.prototype._init = function () {
        var _this = this;
        this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
        this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
        var /** @type {?} */ monthNames = this._dateAdapter.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(function (row) { return row.map(function (month) { return _this._createCellForMonth(month, monthNames[month]); }); });
    };
    /**
     * Gets the month in this year that the given Date falls on.
    Returns null if the given Date is in another year.
     * @param {?} date
     * @return {?}
     */
    MdYearView.prototype._getMonthInCurrentYear = function (date) {
        return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ?
            this._dateAdapter.getMonth(date) : null;
    };
    /**
     * Creates an MdCalendarCell for the given month.
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    MdYearView.prototype._createCellForMonth = function (month, monthName) {
        var /** @type {?} */ ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);
        return new MdCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._isMonthEnabled(month));
    };
    /**
     * Whether the given month is enabled.
     * @param {?} month
     * @return {?}
     */
    MdYearView.prototype._isMonthEnabled = function (month) {
        if (!this.dateFilter) {
            return true;
        }
        var /** @type {?} */ firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
        // If any date in the month is enabled count the month as enabled.
        for (var /** @type {?} */ date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    return MdYearView;
}());
MdYearView.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'md-year-view, mat-year-view',
                template: "<table class=\"mat-calendar-table\"><thead class=\"mat-calendar-table-header\"><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr></thead><tbody mat-calendar-body role=\"grid\" allowDisabledSelection=\"true\" [label]=\"_yearLabel\" [rows]=\"_months\" [todayValue]=\"_todayMonth\" [selectedValue]=\"_selectedMonth\" [labelMinRequiredCells]=\"2\" [numCols]=\"4\" [cellAspectRatio]=\"4 / 7\" [activeCell]=\"_dateAdapter.getMonth(activeDate)\" (selectedValueChange)=\"_monthSelected($event)\"></tbody></table>",
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
MdYearView.ctorParameters = function () { return [
    { type: DateAdapter, decorators: [{ type: _angular_core.Optional },] },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [MD_DATE_FORMATS,] },] },
]; };
MdYearView.propDecorators = {
    'activeDate': [{ type: _angular_core.Input },],
    'selected': [{ type: _angular_core.Input },],
    'dateFilter': [{ type: _angular_core.Input },],
    'selectedChange': [{ type: _angular_core.Output },],
};
var MdDatepickerModule = (function () {
    function MdDatepickerModule() {
    }
    return MdDatepickerModule;
}());
MdDatepickerModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule,
                    MdButtonModule,
                    MdDialogModule,
                    MdIconModule,
                    _angular_cdk_overlay.OverlayModule,
                    _angular_cdk_a11y.A11yModule,
                ],
                exports: [
                    MdCalendar,
                    MdCalendarBody,
                    MdDatepicker,
                    MdDatepickerContent,
                    MdDatepickerInput,
                    MdDatepickerToggle,
                    MdMonthView,
                    MdYearView,
                ],
                declarations: [
                    MdCalendar,
                    MdCalendarBody,
                    MdDatepicker,
                    MdDatepickerContent,
                    MdDatepickerInput,
                    MdDatepickerToggle,
                    MdMonthView,
                    MdYearView,
                ],
                providers: [
                    MdDatepickerIntl,
                    MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER,
                ],
                entryComponents: [
                    MdDatepickerContent,
                ]
            },] },
];
/**
 * @nocollapse
 */
MdDatepickerModule.ctorParameters = function () { return []; };

exports.MdDatepickerModule = MdDatepickerModule;
exports.MdCalendar = MdCalendar;
exports.MdCalendarCell = MdCalendarCell;
exports.MdCalendarBody = MdCalendarBody;
exports.coerceDateProperty = coerceDateProperty;
exports.MD_DATEPICKER_SCROLL_STRATEGY = MD_DATEPICKER_SCROLL_STRATEGY;
exports.MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY = MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY;
exports.MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER = MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER;
exports.MdDatepickerContent = MdDatepickerContent;
exports.MdDatepicker = MdDatepicker;
exports.MD_DATEPICKER_VALUE_ACCESSOR = MD_DATEPICKER_VALUE_ACCESSOR;
exports.MD_DATEPICKER_VALIDATORS = MD_DATEPICKER_VALIDATORS;
exports.MdDatepickerInputEvent = MdDatepickerInputEvent;
exports.MdDatepickerInput = MdDatepickerInput;
exports.MdDatepickerIntl = MdDatepickerIntl;
exports.MdDatepickerToggle = MdDatepickerToggle;
exports.MdMonthView = MdMonthView;
exports.MdYearView = MdYearView;
exports.MAT_DATEPICKER_SCROLL_STRATEGY = MD_DATEPICKER_SCROLL_STRATEGY;
exports.MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER = MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER;
exports.MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY = MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY;
exports.MAT_DATEPICKER_VALIDATORS = MD_DATEPICKER_VALIDATORS;
exports.MAT_DATEPICKER_VALUE_ACCESSOR = MD_DATEPICKER_VALUE_ACCESSOR;
exports.MatCalendar = MdCalendar;
exports.MatCalendarBody = MdCalendarBody;
exports.MatCalendarCell = MdCalendarCell;
exports.MatDatepicker = MdDatepicker;
exports.MatDatepickerContent = MdDatepickerContent;
exports.MatDatepickerInput = MdDatepickerInput;
exports.MatDatepickerInputEvent = MdDatepickerInputEvent;
exports.MatDatepickerIntl = MdDatepickerIntl;
exports.MatDatepickerModule = MdDatepickerModule;
exports.MatDatepickerToggle = MdDatepickerToggle;
exports.MatMonthView = MdMonthView;
exports.MatYearView = MdYearView;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-datepicker.umd.js.map
