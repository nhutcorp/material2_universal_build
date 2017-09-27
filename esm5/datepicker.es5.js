/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { A11yModule } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, EventEmitter, Inject, Injectable, InjectionToken, Input, NgModule, NgZone, Optional, Output, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation, forwardRef } from '@angular/core';
import { MdButtonModule } from '@angular/material/button';
import { MdDialog, MdDialogModule } from '@angular/material/dialog';
import { MdIconModule } from '@angular/material/icon';
import { DOWN_ARROW, END, ENTER, ESCAPE, HOME, LEFT_ARROW, PAGE_DOWN, PAGE_UP, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { DateAdapter, MATERIAL_COMPATIBILITY_MODE, MD_DATE_FORMATS } from '@angular/material/core';
import { first } from 'rxjs/operator/first';
import { Subject } from 'rxjs/Subject';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ComponentPortal } from '@angular/cdk/portal';
import { first as first$1 } from '@angular/cdk/rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MdFormField } from '@angular/material/form-field';
import { merge } from 'rxjs/observable/merge';
import { of } from 'rxjs/observable/of';
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
        this.changes = new Subject();
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
    { type: Injectable },
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
        this.selectedChange = new EventEmitter();
        /**
         * Emits when any date is selected.
         */
        this.userSelection = new EventEmitter();
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
            first.call(_this._ngZone.onStable.asObservable()).subscribe(function () {
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
            case LEFT_ARROW:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -1);
                break;
            case RIGHT_ARROW:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1);
                break;
            case UP_ARROW:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case DOWN_ARROW:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case HOME:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case END:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate)));
                break;
            case PAGE_UP:
                this._activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case PAGE_DOWN:
                this._activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case ENTER:
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
            case LEFT_ARROW:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case RIGHT_ARROW:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case UP_ARROW:
                this._activeDate = this._prevMonthInSameCol(this._activeDate);
                break;
            case DOWN_ARROW:
                this._activeDate = this._nextMonthInSameCol(this._activeDate);
                break;
            case HOME:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;
            case END:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;
            case PAGE_UP:
                this._activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case PAGE_DOWN:
                this._activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case ENTER:
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
    { type: Component, args: [{ selector: 'md-calendar, mat-calendar',
                template: "<div class=\"mat-calendar-header\"><div class=\"mat-calendar-controls\"><button mat-button class=\"mat-calendar-period-button\" (click)=\"_currentPeriodClicked()\" [attr.aria-label]=\"_periodButtonLabel\">{{_periodButtonText}}<div class=\"mat-calendar-arrow\" [class.mat-calendar-invert]=\"!_monthView\"></div></button><div class=\"mat-calendar-spacer\"></div><button mat-icon-button class=\"mat-calendar-previous-button\" [disabled]=\"!_previousEnabled()\" (click)=\"_previousClicked()\" [attr.aria-label]=\"_prevButtonLabel\"></button> <button mat-icon-button class=\"mat-calendar-next-button\" [disabled]=\"!_nextEnabled()\" (click)=\"_nextClicked()\" [attr.aria-label]=\"_nextButtonLabel\"></button></div></div><div class=\"mat-calendar-content\" (keydown)=\"_handleCalendarBodyKeydown($event)\" [ngSwitch]=\"_monthView\" cdkMonitorSubtreeFocus><md-month-view *ngSwitchCase=\"true\" [activeDate]=\"_activeDate\" [selected]=\"selected\" [dateFilter]=\"_dateFilterForViews\" (selectedChange)=\"_dateSelected($event)\" (userSelection)=\"_userSelected()\"></md-month-view><mat-year-view *ngSwitchDefault [activeDate]=\"_activeDate\" [selected]=\"selected\" [dateFilter]=\"_dateFilterForViews\" (selectedChange)=\"_monthSelected($event)\"></mat-year-view></div>",
                styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:0}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button::after,.mat-calendar-previous-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:'';margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:'';position:absolute;top:0;left:-8px;right:-8px;height:1px}"],
                host: {
                    'class': 'mat-calendar',
                },
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdCalendar.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MdDatepickerIntl, },
    { type: NgZone, },
    { type: DateAdapter, decorators: [{ type: Optional },] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MD_DATE_FORMATS,] },] },
    { type: ChangeDetectorRef, },
]; };
MdCalendar.propDecorators = {
    'startAt': [{ type: Input },],
    'startView': [{ type: Input },],
    'selected': [{ type: Input },],
    'minDate': [{ type: Input },],
    'maxDate': [{ type: Input },],
    'dateFilter': [{ type: Input },],
    'selectedChange': [{ type: Output },],
    'userSelection': [{ type: Output },],
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
        this.selectedValueChange = new EventEmitter();
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
    { type: Component, args: [{ selector: '[md-calendar-body], [mat-calendar-body]',
                template: "<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\"><td class=\"mat-calendar-body-label\" [attr.colspan]=\"numCols\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\">{{label}}</td></tr><tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\"><td *ngIf=\"rowIndex === 0 && _firstRowOffset\" aria-hidden=\"true\" class=\"mat-calendar-body-label\" [attr.colspan]=\"_firstRowOffset\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\">{{_firstRowOffset >= labelMinRequiredCells ? label : ''}}</td><td *ngFor=\"let item of row; let colIndex = index\" role=\"gridcell\" class=\"mat-calendar-body-cell\" [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\" [class.mat-calendar-body-disabled]=\"!item.enabled\" [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\" [attr.aria-label]=\"item.ariaLabel\" [attr.aria-disabled]=\"!item.enabled || null\" (click)=\"_cellClicked(item)\" [style.width.%]=\"100 / numCols\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\"><div class=\"mat-calendar-body-cell-content\" [class.mat-calendar-body-selected]=\"selectedValue === item.value\" [class.mat-calendar-body-today]=\"todayValue === item.value\">{{item.displayValue}}</div></td></tr>",
                styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.71429%;padding-right:4.71429%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:0;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}[dir=rtl] .mat-calendar-body-label{text-align:right}"],
                host: {
                    'class': 'mat-calendar-body',
                },
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
MdCalendarBody.ctorParameters = function () { return []; };
MdCalendarBody.propDecorators = {
    'label': [{ type: Input },],
    'rows': [{ type: Input },],
    'todayValue': [{ type: Input },],
    'selectedValue': [{ type: Input },],
    'labelMinRequiredCells': [{ type: Input },],
    'numCols': [{ type: Input },],
    'allowDisabledSelection': [{ type: Input },],
    'activeCell': [{ type: Input },],
    'cellAspectRatio': [{ type: Input },],
    'selectedValueChange': [{ type: Output },],
};
/**
 * Used to generate a unique ID for each datepicker instance.
 */
var datepickerUid = 0;
/**
 * Injection token that determines the scroll handling while the calendar is open.
 */
var MD_DATEPICKER_SCROLL_STRATEGY = new InjectionToken('md-datepicker-scroll-strategy');
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
    deps: [Overlay],
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
        if (event.keyCode === ESCAPE) {
            this.datepicker.close();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    return MdDatepickerContent;
}());
MdDatepickerContent.decorators = [
    { type: Component, args: [{ selector: 'md-datepicker-content, mat-datepicker-content',
                template: "<mat-calendar cdkTrapFocus [id]=\"datepicker.id\" [startAt]=\"datepicker.startAt\" [startView]=\"datepicker.startView\" [minDate]=\"datepicker._minDate\" [maxDate]=\"datepicker._maxDate\" [dateFilter]=\"datepicker._dateFilter\" [selected]=\"datepicker._selected\" (selectedChange)=\"datepicker._select($event)\" (userSelection)=\"datepicker.close()\"></mat-calendar>",
                styles: [".mat-datepicker-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:block}.mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation:landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation:portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}"],
                host: {
                    'class': 'mat-datepicker-content',
                    '[class.mat-datepicker-content-touch]': 'datepicker.touchUi',
                    '(keydown)': '_handleKeydown($event)',
                },
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdDatepickerContent.ctorParameters = function () { return []; };
MdDatepickerContent.propDecorators = {
    '_calendar': [{ type: ViewChild, args: [MdCalendar,] },],
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
        this.selectedChanged = new EventEmitter();
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
        this._inputSubscription = Subscription.EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */
        this._disabledChange = new Subject();
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
            var /** @type {?} */ newValue = coerceBooleanProperty(value);
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
            this._calendarPortal = new ComponentPortal(MdDatepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            var /** @type {?} */ componentRef = this._popupRef.attach(this._calendarPortal);
            componentRef.instance.datepicker = this;
            // Update the position once the calendar has rendered.
            first$1.call(this._ngZone.onStable.asObservable()).subscribe(function () {
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
        var /** @type {?} */ overlayState = new OverlayConfig({
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
    { type: Component, args: [{ selector: 'md-datepicker, mat-datepicker',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
            },] },
];
/**
 * @nocollapse
 */
MdDatepicker.ctorParameters = function () { return [
    { type: MdDialog, },
    { type: Overlay, },
    { type: NgZone, },
    { type: ViewContainerRef, },
    { type: undefined, decorators: [{ type: Inject, args: [MD_DATEPICKER_SCROLL_STRATEGY,] },] },
    { type: DateAdapter, decorators: [{ type: Optional },] },
    { type: Directionality, decorators: [{ type: Optional },] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] },] },
]; };
MdDatepicker.propDecorators = {
    'startAt': [{ type: Input },],
    'startView': [{ type: Input },],
    'touchUi': [{ type: Input },],
    'disabled': [{ type: Input },],
    'selectedChanged': [{ type: Output },],
};
var MD_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MdDatepickerInput; }),
    multi: true
};
var MD_DATEPICKER_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return MdDatepickerInput; }),
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
        this.dateChange = new EventEmitter();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */
        this.dateInput = new EventEmitter();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */
        this._valueChange = new EventEmitter();
        /**
         * Emits when the disabled state has changed
         */
        this._disabledChange = new EventEmitter();
        this._onTouched = function () { };
        this._cvaOnChange = function () { };
        this._validatorOnChange = function () { };
        this._datepickerSubscription = Subscription.EMPTY;
        this._localeSubscription = Subscription.EMPTY;
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
        this._validator = Validators.compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
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
        set: function (filter) {
            this._dateFilter = filter;
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
        set: function (filter) {
            this.mdDatepickerFilter = filter;
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
            var /** @type {?} */ newValue = coerceBooleanProperty(value);
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
        if (event.altKey && event.keyCode === DOWN_ARROW) {
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
    { type: Directive, args: [{
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
    { type: ElementRef, },
    { type: Renderer2, },
    { type: DateAdapter, decorators: [{ type: Optional },] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MD_DATE_FORMATS,] },] },
    { type: MdFormField, decorators: [{ type: Optional },] },
]; };
MdDatepickerInput.propDecorators = {
    'mdDatepicker': [{ type: Input },],
    'matDatepicker': [{ type: Input },],
    'mdDatepickerFilter': [{ type: Input },],
    'matDatepickerFilter': [{ type: Input },],
    'value': [{ type: Input },],
    'min': [{ type: Input },],
    'max': [{ type: Input },],
    'disabled': [{ type: Input },],
    'dateChange': [{ type: Output },],
    'dateInput': [{ type: Output },],
};
var MdDatepickerToggle = (function () {
    /**
     * @param {?} _intl
     * @param {?} _changeDetectorRef
     */
    function MdDatepickerToggle(_intl, _changeDetectorRef) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = Subscription.EMPTY;
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
            this._disabled = coerceBooleanProperty(value);
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
            var /** @type {?} */ datepickerDisabled = datepicker ? datepicker._disabledChange : of();
            var /** @type {?} */ inputDisabled = datepicker && datepicker._datepickerInput ?
                datepicker._datepickerInput._disabledChange :
                of();
            this._stateChanges.unsubscribe();
            this._stateChanges = merge(this._intl.changes, datepickerDisabled, inputDisabled)
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
    { type: Component, args: [{ selector: 'md-datepicker-toggle, mat-datepicker-toggle',
                template: "<button mat-icon-button type=\"button\" [attr.aria-label]=\"_intl.openCalendarLabel\" [disabled]=\"disabled\" (click)=\"_open($event)\"><mat-icon><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\" style=\"vertical-align: top\" focusable=\"false\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/></svg></mat-icon></button>",
                host: {
                    'class': 'mat-datepicker-toggle',
                },
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdDatepickerToggle.ctorParameters = function () { return [
    { type: MdDatepickerIntl, },
    { type: ChangeDetectorRef, },
]; };
MdDatepickerToggle.propDecorators = {
    'datepicker': [{ type: Input, args: ['for',] },],
    'disabled': [{ type: Input },],
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
        this.selectedChange = new EventEmitter();
        /**
         * Emits when any date is selected.
         */
        this.userSelection = new EventEmitter();
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
    { type: Component, args: [{ selector: 'md-month-view',
                template: "<table class=\"mat-calendar-table\"><thead class=\"mat-calendar-table-header\"><tr><th *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr></thead><tbody mat-calendar-body role=\"grid\" [label]=\"_monthLabel\" [rows]=\"_weeks\" [todayValue]=\"_todayDate\" [selectedValue]=\"_selectedDate\" [labelMinRequiredCells]=\"3\" [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\" (selectedValueChange)=\"_dateSelected($event)\"></tbody></table>",
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdMonthView.ctorParameters = function () { return [
    { type: DateAdapter, decorators: [{ type: Optional },] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MD_DATE_FORMATS,] },] },
]; };
MdMonthView.propDecorators = {
    'activeDate': [{ type: Input },],
    'selected': [{ type: Input },],
    'dateFilter': [{ type: Input },],
    'selectedChange': [{ type: Output },],
    'userSelection': [{ type: Output },],
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
        this.selectedChange = new EventEmitter();
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
    { type: Component, args: [{ selector: 'md-year-view, mat-year-view',
                template: "<table class=\"mat-calendar-table\"><thead class=\"mat-calendar-table-header\"><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr></thead><tbody mat-calendar-body role=\"grid\" allowDisabledSelection=\"true\" [label]=\"_yearLabel\" [rows]=\"_months\" [todayValue]=\"_todayMonth\" [selectedValue]=\"_selectedMonth\" [labelMinRequiredCells]=\"2\" [numCols]=\"4\" [cellAspectRatio]=\"4 / 7\" [activeCell]=\"_dateAdapter.getMonth(activeDate)\" (selectedValueChange)=\"_monthSelected($event)\"></tbody></table>",
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
MdYearView.ctorParameters = function () { return [
    { type: DateAdapter, decorators: [{ type: Optional },] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MD_DATE_FORMATS,] },] },
]; };
MdYearView.propDecorators = {
    'activeDate': [{ type: Input },],
    'selected': [{ type: Input },],
    'dateFilter': [{ type: Input },],
    'selectedChange': [{ type: Output },],
};
var MdDatepickerModule = (function () {
    function MdDatepickerModule() {
    }
    return MdDatepickerModule;
}());
MdDatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MdButtonModule,
                    MdDialogModule,
                    MdIconModule,
                    OverlayModule,
                    A11yModule,
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
/**
 * Generated bundle index. Do not edit.
 */
export { MdDatepickerModule, MdCalendar, MdCalendarCell, MdCalendarBody, coerceDateProperty, MD_DATEPICKER_SCROLL_STRATEGY, MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY, MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER, MdDatepickerContent, MdDatepicker, MD_DATEPICKER_VALUE_ACCESSOR, MD_DATEPICKER_VALIDATORS, MdDatepickerInputEvent, MdDatepickerInput, MdDatepickerIntl, MdDatepickerToggle, MdMonthView, MdYearView, MD_DATEPICKER_SCROLL_STRATEGY as MAT_DATEPICKER_SCROLL_STRATEGY, MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER as MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER, MD_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY as MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY, MD_DATEPICKER_VALIDATORS as MAT_DATEPICKER_VALIDATORS, MD_DATEPICKER_VALUE_ACCESSOR as MAT_DATEPICKER_VALUE_ACCESSOR, MdCalendar as MatCalendar, MdCalendarBody as MatCalendarBody, MdCalendarCell as MatCalendarCell, MdDatepicker as MatDatepicker, MdDatepickerContent as MatDatepickerContent, MdDatepickerInput as MatDatepickerInput, MdDatepickerInputEvent as MatDatepickerInputEvent, MdDatepickerIntl as MatDatepickerIntl, MdDatepickerModule as MatDatepickerModule, MdDatepickerToggle as MatDatepickerToggle, MdMonthView as MatMonthView, MdYearView as MatYearView };
//# sourceMappingURL=datepicker.es5.js.map
