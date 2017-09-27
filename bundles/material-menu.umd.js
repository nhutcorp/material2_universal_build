/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('rxjs/Subject'), require('@angular/cdk/scrolling'), require('@angular/cdk/platform'), require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/cdk/a11y'), require('@angular/cdk/rxjs'), require('rxjs/observable/merge'), require('rxjs/Subscription'), require('@angular/animations'), require('@angular/cdk/portal'), require('rxjs/observable/of')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser', '@angular/cdk/bidi', '@angular/cdk/coercion', 'rxjs/Subject', '@angular/cdk/scrolling', '@angular/cdk/platform', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/cdk/a11y', '@angular/cdk/rxjs', 'rxjs/observable/merge', 'rxjs/Subscription', '@angular/animations', '@angular/cdk/portal', 'rxjs/observable/of'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}, global.ng.material.menu = global.ng.material.menu || {}),global.ng.core,global.ng.common,global.ng.platformBrowser,global.ng.cdk.bidi,global.ng.cdk.coercion,global.Rx,global.ng.cdk.scrolling,global.ng.cdk.platform,global.ng.cdk.keycodes,global.ng.cdk.overlay,global.ng.cdk.a11y,global.ng.cdk.rxjs,global.Rx.Observable,global.Rx,global.ng.animations,global.ng.cdk.portal,global.Rx.Observable));
}(this, (function (exports,_angular_core,_angular_common,_angular_platformBrowser,_angular_cdk_bidi,_angular_cdk_coercion,rxjs_Subject,_angular_cdk_scrolling,_angular_cdk_platform,_angular_cdk_keycodes,_angular_cdk_overlay,_angular_cdk_a11y,_angular_cdk_rxjs,rxjs_observable_merge,rxjs_Subscription,_angular_animations,_angular_cdk_portal,rxjs_observable_of) { 'use strict';

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
    DateAdapter.prototype.compareDate = function (first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
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
    DateAdapter.prototype.sameDate = function (first, second) {
        return first && second ? !this.compareDate(first, second) : first == second;
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
 * Below are all the animations for the md-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 */
/**
 * This animation controls the menu panel's entry and exit from the page.
 *
 * When the menu panel is added to the DOM, it scales in and fades in its border.
 *
 * When the menu panel is removed from the DOM, it simply fades out after a brief
 * delay to display the ripple.
 */
// TODO(kara): switch to :enter and :leave once Mobile Safari is sorted out.
var transformMenu = _angular_animations.trigger('transformMenu', [
    _angular_animations.state('void', _angular_animations.style({
        opacity: 0,
        // This starts off from 0.01, instead of 0, because there's an issue in the Angular animations
        // as of 4.2, which causes the animation to be skipped if it starts from 0.
        transform: 'scale(0.01, 0.01)'
    })),
    _angular_animations.state('enter-start', _angular_animations.style({
        opacity: 1,
        transform: 'scale(1, 0.5)'
    })),
    _angular_animations.state('enter', _angular_animations.style({
        transform: 'scale(1, 1)'
    })),
    _angular_animations.transition('void => enter-start', _angular_animations.animate('100ms linear')),
    _angular_animations.transition('enter-start => enter', _angular_animations.animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    _angular_animations.transition('* => void', _angular_animations.animate('150ms 50ms linear', _angular_animations.style({ opacity: 0 })))
]);
/**
 * This animation fades in the background color and content of the menu panel
after its containing element is scaled in.
 */
var fadeInItems = _angular_animations.trigger('fadeInItems', [
    _angular_animations.state('showing', _angular_animations.style({ opacity: 1 })),
    _angular_animations.transition('void => *', [
        _angular_animations.style({ opacity: 0 }),
        _angular_animations.animate('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
    ])
]);
/**
 * Throws an exception for the case when menu trigger doesn't have a valid md-menu instance
\@docs-private
 * @return {?}
 */
function throwMdMenuMissingError() {
    throw Error("md-menu-trigger: must pass in an md-menu instance.\n\n    Example:\n      <md-menu #menu=\"mdMenu\"></md-menu>\n      <button [mdMenuTriggerFor]=\"menu\"></button>");
}
/**
 * Throws an exception for the case when menu's x-position value isn't valid.
In other words, it doesn't match 'before' or 'after'.
\@docs-private
 * @return {?}
 */
function throwMdMenuInvalidPositionX() {
    throw Error("x-position value must be either 'before' or after'.\n      Example: <md-menu x-position=\"before\" #menu=\"mdMenu\"></md-menu>");
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
In other words, it doesn't match 'above' or 'below'.
\@docs-private
 * @return {?}
 */
function throwMdMenuInvalidPositionY() {
    throw Error("y-position value must be either 'above' or below'.\n      Example: <md-menu y-position=\"above\" #menu=\"mdMenu\"></md-menu>");
}
/**
 * \@docs-private
 */
var MdMenuItemBase = (function () {
    function MdMenuItemBase() {
    }
    return MdMenuItemBase;
}());
var _MdMenuItemMixinBase = mixinDisabled(MdMenuItemBase);
/**
 * This directive is intended to be used inside an md-menu tag.
It exists mostly to set the role attribute.
 */
var MdMenuItem = (function (_super) {
    __extends(MdMenuItem, _super);
    /**
     * @param {?} _elementRef
     */
    function MdMenuItem(_elementRef) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        /**
         * Stream that emits when the menu item is hovered.
         */
        _this.hover = new rxjs_Subject.Subject();
        /**
         * Whether the menu item is highlighted.
         */
        _this._highlighted = false;
        /**
         * Whether the menu item acts as a trigger for a sub-menu.
         */
        _this._triggersSubmenu = false;
        return _this;
    }
    /**
     * Focuses the menu item.
     * @return {?}
     */
    MdMenuItem.prototype.focus = function () {
        this._getHostElement().focus();
    };
    /**
     * @return {?}
     */
    MdMenuItem.prototype.ngOnDestroy = function () {
        this.hover.complete();
    };
    /**
     * Used to set the `tabindex`.
     * @return {?}
     */
    MdMenuItem.prototype._getTabIndex = function () {
        return this.disabled ? '-1' : '0';
    };
    /**
     * Returns the host DOM element.
     * @return {?}
     */
    MdMenuItem.prototype._getHostElement = function () {
        return this._elementRef.nativeElement;
    };
    /**
     * Prevents the default element actions if it is disabled.
     * @param {?} event
     * @return {?}
     */
    MdMenuItem.prototype._checkDisabled = function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /**
     * Emits to the hover stream.
     * @return {?}
     */
    MdMenuItem.prototype._emitHoverEvent = function () {
        if (!this.disabled) {
            this.hover.next(this);
        }
    };
    return MdMenuItem;
}(_MdMenuItemMixinBase));
MdMenuItem.decorators = [
    { type: _angular_core.Component, args: [{ selector: '[md-menu-item], [mat-menu-item]',
                inputs: ['disabled'],
                host: {
                    'role': 'menuitem',
                    'class': 'mat-menu-item',
                    '[class.mat-menu-item-highlighted]': '_highlighted',
                    '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.disabled]': 'disabled || null',
                    '(click)': '_checkDisabled($event)',
                    '(mouseenter)': '_emitHoverEvent()',
                },
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: "<ng-content></ng-content><div class=\"mat-menu-ripple\" *ngIf=\"!disabled\" mat-ripple [matRippleTrigger]=\"_getHostElement()\"></div>",
                exportAs: 'mdMenuItem, matMenuItem',
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdMenuItem.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };
/**
 * Injection token to be used to override the default options for `md-menu`.
 */
var MD_MENU_DEFAULT_OPTIONS = new _angular_core.InjectionToken('md-menu-default-options');
/**
 * Start elevation for the menu panel.
\@docs-private
 */
var MD_MENU_BASE_ELEVATION = 2;
var MdMenu = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _defaultOptions
     */
    function MdMenu(_elementRef, _defaultOptions) {
        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /**
         * Subscription to tab events on the menu panel
         */
        this._tabSubscription = rxjs_Subscription.Subscription.EMPTY;
        /**
         * Config object to be passed into the menu's ngClass
         */
        this._classList = {};
        /**
         * Current state of the panel animation.
         */
        this._panelAnimationState = 'void';
        /**
         * Whether the menu should overlap its trigger.
         */
        this.overlapTrigger = this._defaultOptions.overlapTrigger;
        /**
         * Event emitted when the menu is closed.
         */
        this.close = new _angular_core.EventEmitter();
    }
    Object.defineProperty(MdMenu.prototype, "xPosition", {
        /**
         * Position of the menu in the X axis.
         * @return {?}
         */
        get: function () { return this._xPosition; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value !== 'before' && value !== 'after') {
                throwMdMenuInvalidPositionX();
            }
            this._xPosition = value;
            this.setPositionClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMenu.prototype, "yPosition", {
        /**
         * Position of the menu in the Y axis.
         * @return {?}
         */
        get: function () { return this._yPosition; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value !== 'above' && value !== 'below') {
                throwMdMenuInvalidPositionY();
            }
            this._yPosition = value;
            this.setPositionClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMenu.prototype, "classList", {
        /**
         * This method takes classes set on the host md-menu element and applies them on the
        menu template that displays in the overlay container.  Otherwise, it's difficult
        to style the containing menu from outside the component.
        \@param classes list of class names
         * @param {?} classes
         * @return {?}
         */
        set: function (classes) {
            if (classes && classes.length) {
                this._classList = classes.split(' ').reduce(function (obj, className) {
                    obj[className] = true;
                    return obj;
                }, {});
                this._elementRef.nativeElement.className = '';
                this.setPositionClasses();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdMenu.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._keyManager = new _angular_cdk_a11y.FocusKeyManager(this.items).withWrap();
        this._tabSubscription = this._keyManager.tabOut.subscribe(function () { return _this.close.emit('keydown'); });
    };
    /**
     * @return {?}
     */
    MdMenu.prototype.ngOnDestroy = function () {
        this._tabSubscription.unsubscribe();
        this.close.emit();
        this.close.complete();
    };
    /**
     * Stream that emits whenever the hovered menu item changes.
     * @return {?}
     */
    MdMenu.prototype.hover = function () {
        return _angular_cdk_rxjs.RxChain.from(this.items.changes)
            .call(_angular_cdk_rxjs.startWith, this.items)
            .call(_angular_cdk_rxjs.switchMap, function (items) { return rxjs_observable_merge.merge.apply(void 0, items.map(function (item) { return item.hover; })); })
            .result();
    };
    /**
     * Handle a keyboard event from the menu, delegating to the appropriate action.
     * @param {?} event
     * @return {?}
     */
    MdMenu.prototype._handleKeydown = function (event) {
        switch (event.keyCode) {
            case _angular_cdk_keycodes.ESCAPE:
                this.close.emit('keydown');
                event.stopPropagation();
                break;
            case _angular_cdk_keycodes.LEFT_ARROW:
                if (this.parentMenu && this.direction === 'ltr') {
                    this.close.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes.RIGHT_ARROW:
                if (this.parentMenu && this.direction === 'rtl') {
                    this.close.emit('keydown');
                }
                break;
            default:
                this._keyManager.onKeydown(event);
        }
    };
    /**
     * Focus the first item in the menu. This method is used by the menu trigger
    to focus the first item when the menu is opened by the ENTER key.
     * @return {?}
     */
    MdMenu.prototype.focusFirstItem = function () {
        this._keyManager.setFirstItemActive();
    };
    /**
     * It's necessary to set position-based classes to ensure the menu panel animation
    folds out from the correct direction.
     * @param {?=} posX
     * @param {?=} posY
     * @return {?}
     */
    MdMenu.prototype.setPositionClasses = function (posX, posY) {
        if (posX === void 0) { posX = this.xPosition; }
        if (posY === void 0) { posY = this.yPosition; }
        this._classList['mat-menu-before'] = posX === 'before';
        this._classList['mat-menu-after'] = posX === 'after';
        this._classList['mat-menu-above'] = posY === 'above';
        this._classList['mat-menu-below'] = posY === 'below';
    };
    /**
     * Sets the menu panel elevation.
    \@param depth Number of parent menus that come before the menu.
     * @param {?} depth
     * @return {?}
     */
    MdMenu.prototype.setElevation = function (depth) {
        // The elevation starts at the base and increases by one for each level.
        var /** @type {?} */ newElevation = "mat-elevation-z" + (MD_MENU_BASE_ELEVATION + depth);
        var /** @type {?} */ customElevation = Object.keys(this._classList).find(function (c) { return c.startsWith('mat-elevation-z'); });
        if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
            }
            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
        }
    };
    /**
     * Starts the enter animation.
     * @return {?}
     */
    MdMenu.prototype._startAnimation = function () {
        this._panelAnimationState = 'enter-start';
    };
    /**
     * Resets the panel animation to its initial state.
     * @return {?}
     */
    MdMenu.prototype._resetAnimation = function () {
        this._panelAnimationState = 'void';
    };
    /**
     * Callback that is invoked when the panel animation completes.
     * @param {?} event
     * @return {?}
     */
    MdMenu.prototype._onAnimationDone = function (event) {
        // After the initial expansion is done, trigger the second phase of the enter animation.
        if (event.toState === 'enter-start') {
            this._panelAnimationState = 'enter';
        }
    };
    return MdMenu;
}());
MdMenu.decorators = [
    { type: _angular_core.Component, args: [{ selector: 'md-menu, mat-menu',
                template: "<ng-template><div class=\"mat-menu-panel\" [ngClass]=\"_classList\" (keydown)=\"_handleKeydown($event)\" (click)=\"close.emit('click')\" [@transformMenu]=\"_panelAnimationState\" (@transformMenu.done)=\"_onAnimationDone($event)\" role=\"menu\"><div class=\"mat-menu-content\" [@fadeInItems]=\"'showing'\"><ng-content></ng-content></div></div></ng-template>",
                styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:2px}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-menu-panel.mat-menu-after.mat-menu-below{transform-origin:left top}.mat-menu-panel.mat-menu-after.mat-menu-above{transform-origin:left bottom}.mat-menu-panel.mat-menu-before.mat-menu-below{transform-origin:right top}.mat-menu-panel.mat-menu-before.mat-menu-above{transform-origin:right bottom}[dir=rtl] .mat-menu-panel.mat-menu-after.mat-menu-below{transform-origin:right top}[dir=rtl] .mat-menu-panel.mat-menu-after.mat-menu-above{transform-origin:right bottom}[dir=rtl] .mat-menu-panel.mat-menu-before.mat-menu-below{transform-origin:left top}[dir=rtl] .mat-menu-panel.mat-menu-before.mat-menu-above{transform-origin:left bottom}.mat-menu-panel.ng-animating{pointer-events:none}@media screen and (-ms-high-contrast:active){.mat-menu-panel{outline:solid 1px}}.mat-menu-content{padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;position:relative}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item .mat-icon{vertical-align:middle}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:'';display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:8px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute}"],
                changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core.ViewEncapsulation.None,
                preserveWhitespaces: false,
                animations: [
                    transformMenu,
                    fadeInItems
                ],
                exportAs: 'mdMenu, matMenu'
            },] },
];
/**
 * @nocollapse
 */
MdMenu.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [MD_MENU_DEFAULT_OPTIONS,] },] },
]; };
MdMenu.propDecorators = {
    'xPosition': [{ type: _angular_core.Input },],
    'yPosition': [{ type: _angular_core.Input },],
    'templateRef': [{ type: _angular_core.ViewChild, args: [_angular_core.TemplateRef,] },],
    'items': [{ type: _angular_core.ContentChildren, args: [MdMenuItem,] },],
    'overlapTrigger': [{ type: _angular_core.Input },],
    'classList': [{ type: _angular_core.Input, args: ['class',] },],
    'close': [{ type: _angular_core.Output },],
};
/**
 * Injection token that determines the scroll handling while the menu is open.
 */
var MD_MENU_SCROLL_STRATEGY = new _angular_core.InjectionToken('md-menu-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MD_MENU_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var MD_MENU_SCROLL_STRATEGY_PROVIDER = {
    provide: MD_MENU_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay.Overlay],
    useFactory: MD_MENU_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Default top padding of the menu panel.
 */
var MENU_PANEL_TOP_PADDING = 8;
/**
 * This directive is intended to be used in conjunction with an md-menu tag.  It is
responsible for toggling the display of the provided menu instance.
 */
var MdMenuTrigger = (function () {
    /**
     * @param {?} _overlay
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _scrollStrategy
     * @param {?} _parentMenu
     * @param {?} _menuItemInstance
     * @param {?} _dir
     */
    function MdMenuTrigger(_overlay, _element, _viewContainerRef, _scrollStrategy, _parentMenu, _menuItemInstance, _dir) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._scrollStrategy = _scrollStrategy;
        this._parentMenu = _parentMenu;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closeSubscription = rxjs_Subscription.Subscription.EMPTY;
        this._positionSubscription = rxjs_Subscription.Subscription.EMPTY;
        this._hoverSubscription = rxjs_Subscription.Subscription.EMPTY;
        this._openedByMouse = false;
        /**
         * Event emitted when the associated menu is opened.
         */
        this.onMenuOpen = new _angular_core.EventEmitter();
        /**
         * Event emitted when the associated menu is closed.
         */
        this.onMenuClose = new _angular_core.EventEmitter();
        if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }
    }
    Object.defineProperty(MdMenuTrigger.prototype, "_deprecatedMdMenuTriggerFor", {
        /**
         * @deprecated
         * @return {?}
         */
        get: function () {
            return this.menu;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this.menu = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMenuTrigger.prototype, "_deprecatedMatMenuTriggerFor", {
        /**
         * @deprecated
         * @return {?}
         */
        get: function () {
            return this.menu;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this.menu = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMenuTrigger.prototype, "_matMenuTriggerFor", {
        /**
         * @return {?}
         */
        get: function () {
            return this.menu;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this.menu = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdMenuTrigger.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._checkMenu();
        this.menu.close.subscribe(function (reason) {
            _this.closeMenu();
            // If a click closed the menu, we should close the entire chain of nested menus.
            if (reason === 'click' && _this._parentMenu) {
                _this._parentMenu.close.emit(reason);
            }
        });
        if (this.triggersSubmenu()) {
            // Subscribe to changes in the hovered item in order to toggle the panel.
            this._hoverSubscription = _angular_cdk_rxjs.filter
                .call(this._parentMenu.hover(), function (active) { return active === _this._menuItemInstance; })
                .subscribe(function () {
                _this._openedByMouse = true;
                _this.openMenu();
            });
        }
    };
    /**
     * @return {?}
     */
    MdMenuTrigger.prototype.ngOnDestroy = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
        this._cleanUpSubscriptions();
    };
    Object.defineProperty(MdMenuTrigger.prototype, "menuOpen", {
        /**
         * Whether the menu is open.
         * @return {?}
         */
        get: function () {
            return this._menuOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMenuTrigger.prototype, "dir", {
        /**
         * The text direction of the containing app.
         * @return {?}
         */
        get: function () {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Whether the menu triggers a sub-menu or a top-level one.
     * @return {?}
     */
    MdMenuTrigger.prototype.triggersSubmenu = function () {
        return !!(this._menuItemInstance && this._parentMenu);
    };
    /**
     * Toggles the menu between the open and closed states.
     * @return {?}
     */
    MdMenuTrigger.prototype.toggleMenu = function () {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
    };
    /**
     * Opens the menu.
     * @return {?}
     */
    MdMenuTrigger.prototype.openMenu = function () {
        var _this = this;
        if (!this._menuOpen) {
            this._createOverlay().attach(this._portal);
            this._closeSubscription = this._menuClosingActions().subscribe(function () { return _this.menu.close.emit(); });
            this._initMenu();
            if (this.menu instanceof MdMenu) {
                this.menu._startAnimation();
            }
        }
    };
    /**
     * Closes the menu.
     * @return {?}
     */
    MdMenuTrigger.prototype.closeMenu = function () {
        if (this._overlayRef && this.menuOpen) {
            this._resetMenu();
            this._overlayRef.detach();
            this._closeSubscription.unsubscribe();
            this.menu.close.emit();
            if (this.menu instanceof MdMenu) {
                this.menu._resetAnimation();
            }
        }
    };
    /**
     * Focuses the menu trigger.
     * @return {?}
     */
    MdMenuTrigger.prototype.focus = function () {
        this._element.nativeElement.focus();
    };
    /**
     * This method sets the menu state to open and focuses the first item if
    the menu was opened via the keyboard.
     * @return {?}
     */
    MdMenuTrigger.prototype._initMenu = function () {
        this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
        this.menu.direction = this.dir;
        this._setMenuElevation();
        this._setIsMenuOpen(true);
        // Should only set focus if opened via the keyboard, so keyboard users can
        // can easily navigate menu items. According to spec, mouse users should not
        // see the focus style.
        if (!this._openedByMouse) {
            this.menu.focusFirstItem();
        }
    };
    /**
     * Updates the menu elevation based on the amount of parent menus that it has.
     * @return {?}
     */
    MdMenuTrigger.prototype._setMenuElevation = function () {
        if (this.menu.setElevation) {
            var /** @type {?} */ depth = 0;
            var /** @type {?} */ parentMenu = this.menu.parentMenu;
            while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
            }
            this.menu.setElevation(depth);
        }
    };
    /**
     * This method resets the menu when it's closed, most importantly restoring
    focus to the menu trigger if the menu was opened via the keyboard.
     * @return {?}
     */
    MdMenuTrigger.prototype._resetMenu = function () {
        this._setIsMenuOpen(false);
        // Focus only needs to be reset to the host element if the menu was opened
        // by the keyboard and manually shifted to the first menu item.
        if (!this._openedByMouse) {
            this.focus();
        }
        this._openedByMouse = false;
    };
    /**
     * @param {?} isOpen
     * @return {?}
     */
    MdMenuTrigger.prototype._setIsMenuOpen = function (isOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.onMenuOpen.emit() : this.onMenuClose.emit();
        if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
        }
    };
    /**
     * This method checks that a valid instance of MdMenu has been passed into
    mdMenuTriggerFor. If not, an exception is thrown.
     * @return {?}
     */
    MdMenuTrigger.prototype._checkMenu = function () {
        if (!this.menu) {
            throwMdMenuMissingError();
        }
    };
    /**
     * This method creates the overlay from the provided menu's template and saves its
    OverlayRef so that it can be attached to the DOM when openMenu is called.
     * @return {?}
     */
    MdMenuTrigger.prototype._createOverlay = function () {
        if (!this._overlayRef) {
            this._portal = new _angular_cdk_portal.TemplatePortal(this.menu.templateRef, this._viewContainerRef);
            var /** @type {?} */ config = this._getOverlayConfig();
            this._subscribeToPositions(/** @type {?} */ (config.positionStrategy));
            this._overlayRef = this._overlay.create(config);
        }
        return this._overlayRef;
    };
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
    \@returns OverlayConfig
     * @return {?}
     */
    MdMenuTrigger.prototype._getOverlayConfig = function () {
        return new _angular_cdk_overlay.OverlayConfig({
            positionStrategy: this._getPosition(),
            hasBackdrop: !this.triggersSubmenu(),
            backdropClass: 'cdk-overlay-transparent-backdrop',
            direction: this.dir,
            scrollStrategy: this._scrollStrategy()
        });
    };
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
    on the menu based on the new position. This ensures the animation origin is always
    correct, even if a fallback position is used for the overlay.
     * @param {?} position
     * @return {?}
     */
    MdMenuTrigger.prototype._subscribeToPositions = function (position) {
        var _this = this;
        this._positionSubscription = position.onPositionChange.subscribe(function (change) {
            var /** @type {?} */ posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
            var /** @type {?} */ posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
            _this.menu.setPositionClasses(posX, posY);
        });
    };
    /**
     * This method builds the position strategy for the overlay, so the menu is properly connected
    to the trigger.
    \@returns ConnectedPositionStrategy
     * @return {?}
     */
    MdMenuTrigger.prototype._getPosition = function () {
        var _a = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'], originX = _a[0], originFallbackX = _a[1];
        var _b = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'], overlayY = _b[0], overlayFallbackY = _b[1];
        var _c = [overlayY, overlayFallbackY], originY = _c[0], originFallbackY = _c[1];
        var _d = [originX, originFallbackX], overlayX = _d[0], overlayFallbackX = _d[1];
        var /** @type {?} */ offsetY = 0;
        if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            // TODO(crisbeto): this should be a function, once the overlay supports it.
            // Right now it will be wrong for the fallback positions.
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
        }
        else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        }
        return this._overlay.position()
            .connectedTo(this._element, { originX: originX, originY: originY }, { overlayX: overlayX, overlayY: overlayY })
            .withDirection(this.dir)
            .withOffsetY(offsetY)
            .withFallbackPosition({ originX: originFallbackX, originY: originY }, { overlayX: overlayFallbackX, overlayY: overlayY })
            .withFallbackPosition({ originX: originX, originY: originFallbackY }, { overlayX: overlayX, overlayY: overlayFallbackY })
            .withFallbackPosition({ originX: originFallbackX, originY: originFallbackY }, { overlayX: overlayFallbackX, overlayY: overlayFallbackY });
    };
    /**
     * Cleans up the active subscriptions.
     * @return {?}
     */
    MdMenuTrigger.prototype._cleanUpSubscriptions = function () {
        this._closeSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
        this._hoverSubscription.unsubscribe();
    };
    /**
     * Returns a stream that emits whenever an action that should close the menu occurs.
     * @return {?}
     */
    MdMenuTrigger.prototype._menuClosingActions = function () {
        var _this = this;
        var /** @type {?} */ backdrop = ((this._overlayRef)).backdropClick();
        var /** @type {?} */ parentClose = this._parentMenu ? this._parentMenu.close : rxjs_observable_of.of(null);
        var /** @type {?} */ hover = this._parentMenu ? _angular_cdk_rxjs.RxChain.from(this._parentMenu.hover())
            .call(_angular_cdk_rxjs.filter, function (active) { return active !== _this._menuItemInstance; })
            .call(_angular_cdk_rxjs.filter, function () { return _this._menuOpen; })
            .result() : rxjs_observable_of.of(null);
        return rxjs_observable_merge.merge(backdrop, parentClose, hover);
    };
    /**
     * Handles mouse presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    MdMenuTrigger.prototype._handleMousedown = function (event) {
        if (!_angular_cdk_a11y.isFakeMousedownFromScreenReader(event)) {
            this._openedByMouse = true;
            // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.
            if (this.triggersSubmenu()) {
                event.preventDefault();
            }
        }
    };
    /**
     * Handles key presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    MdMenuTrigger.prototype._handleKeydown = function (event) {
        var /** @type {?} */ keyCode = event.keyCode;
        if (this.triggersSubmenu() && ((keyCode === _angular_cdk_keycodes.RIGHT_ARROW && this.dir === 'ltr') ||
            (keyCode === _angular_cdk_keycodes.LEFT_ARROW && this.dir === 'rtl'))) {
            this.openMenu();
        }
    };
    /**
     * Handles click events on the trigger.
     * @param {?} event
     * @return {?}
     */
    MdMenuTrigger.prototype._handleClick = function (event) {
        if (this.triggersSubmenu()) {
            // Stop event propagation to avoid closing the parent menu.
            event.stopPropagation();
            this.openMenu();
        }
        else {
            this.toggleMenu();
        }
    };
    return MdMenuTrigger;
}());
MdMenuTrigger.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: "[md-menu-trigger-for], [mat-menu-trigger-for],\n             [mdMenuTriggerFor], [matMenuTriggerFor]",
                host: {
                    'aria-haspopup': 'true',
                    '(mousedown)': '_handleMousedown($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(click)': '_handleClick($event)',
                },
                exportAs: 'mdMenuTrigger, matMenuTrigger'
            },] },
];
/**
 * @nocollapse
 */
MdMenuTrigger.ctorParameters = function () { return [
    { type: _angular_cdk_overlay.Overlay, },
    { type: _angular_core.ElementRef, },
    { type: _angular_core.ViewContainerRef, },
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [MD_MENU_SCROLL_STRATEGY,] },] },
    { type: MdMenu, decorators: [{ type: _angular_core.Optional },] },
    { type: MdMenuItem, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self },] },
    { type: _angular_cdk_bidi.Directionality, decorators: [{ type: _angular_core.Optional },] },
]; };
MdMenuTrigger.propDecorators = {
    '_deprecatedMdMenuTriggerFor': [{ type: _angular_core.Input, args: ['md-menu-trigger-for',] },],
    '_deprecatedMatMenuTriggerFor': [{ type: _angular_core.Input, args: ['mat-menu-trigger-for',] },],
    '_matMenuTriggerFor': [{ type: _angular_core.Input, args: ['matMenuTriggerFor',] },],
    'menu': [{ type: _angular_core.Input, args: ['mdMenuTriggerFor',] },],
    'onMenuOpen': [{ type: _angular_core.Output },],
    'onMenuClose': [{ type: _angular_core.Output },],
};
var MdMenuModule = (function () {
    function MdMenuModule() {
    }
    return MdMenuModule;
}());
MdMenuModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_cdk_overlay.OverlayModule,
                    _angular_common.CommonModule,
                    MdRippleModule,
                    MdCommonModule,
                ],
                exports: [MdMenu, MdMenuItem, MdMenuTrigger, MdCommonModule],
                declarations: [MdMenu, MdMenuItem, MdMenuTrigger],
                providers: [
                    MD_MENU_SCROLL_STRATEGY_PROVIDER,
                    {
                        provide: MD_MENU_DEFAULT_OPTIONS,
                        useValue: {
                            overlapTrigger: true,
                            xPosition: 'after',
                            yPosition: 'below',
                        },
                    }
                ],
            },] },
];
/**
 * @nocollapse
 */
MdMenuModule.ctorParameters = function () { return []; };

exports.MD_MENU_SCROLL_STRATEGY = MD_MENU_SCROLL_STRATEGY;
exports.fadeInItems = fadeInItems;
exports.transformMenu = transformMenu;
exports.MdMenuModule = MdMenuModule;
exports.MdMenu = MdMenu;
exports.MD_MENU_DEFAULT_OPTIONS = MD_MENU_DEFAULT_OPTIONS;
exports.MdMenuItem = MdMenuItem;
exports.MdMenuTrigger = MdMenuTrigger;
exports.MAT_MENU_DEFAULT_OPTIONS = MD_MENU_DEFAULT_OPTIONS;
exports.MatMenu = MdMenu;
exports.MatMenuItem = MdMenuItem;
exports.MatMenuModule = MdMenuModule;
exports.MatMenuTrigger = MdMenuTrigger;
exports.ɵa23 = MdMenuItemBase;
exports.ɵb23 = _MdMenuItemMixinBase;
exports.ɵd23 = MD_MENU_SCROLL_STRATEGY_PROVIDER;
exports.ɵc23 = MD_MENU_SCROLL_STRATEGY_PROVIDER_FACTORY;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-menu.umd.js.map
