import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, Directive, ElementRef, Inject, NgModule, Optional, Renderer2, Self, ViewEncapsulation, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_COMPATIBILITY_MODE, MdCommonModule, MdRippleModule, mixinColor, mixinDisableRipple, mixinDisabled } from '@angular/material/core';
import { A11yModule, FocusMonitor } from '@angular/cdk/a11y';
import { Platform } from '@angular/cdk/platform';
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
    { type: Directive, args: [{
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
    { type: Directive, args: [{
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
    { type: Directive, args: [{
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
    { type: Directive, args: [{
                selector: 'button[md-fab], button[mat-fab], a[md-fab], a[mat-fab]',
                host: { 'class': 'mat-fab' }
            },] },
];
/**
 * @nocollapse
 */
MdFab.ctorParameters = function () { return [
    { type: MdButton, decorators: [{ type: Self }, { type: Optional }, { type: Inject, args: [forwardRef(function () { return MdButton; }),] },] },
    { type: MdAnchor, decorators: [{ type: Self }, { type: Optional }, { type: Inject, args: [forwardRef(function () { return MdAnchor; }),] },] },
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
    { type: Directive, args: [{
                selector: 'button[md-mini-fab], button[mat-mini-fab], a[md-mini-fab], a[mat-mini-fab]',
                host: { 'class': 'mat-mini-fab' }
            },] },
];
/**
 * @nocollapse
 */
MdMiniFab.ctorParameters = function () { return [
    { type: MdButton, decorators: [{ type: Self }, { type: Optional }, { type: Inject, args: [forwardRef(function () { return MdButton; }),] },] },
    { type: MdAnchor, decorators: [{ type: Self }, { type: Optional }, { type: Inject, args: [forwardRef(function () { return MdAnchor; }),] },] },
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
    tslib_1.__extends(MdButton, _super);
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
    { type: Component, args: [{ selector: "button[md-button], button[md-raised-button], button[md-icon-button],\n             button[md-fab], button[md-mini-fab],\n             button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab]",
                host: {
                    '[disabled]': 'disabled || null',
                },
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div mat-ripple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"_isRoundButton || _isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"_isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                styles: [".mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px}[disabled].mat-button,[disabled].mat-fab,[disabled].mat-icon-button,[disabled].mat-mini-fab,[disabled].mat-raised-button{cursor:default}.cdk-keyboard-focused.mat-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-icon-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-mini-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-raised-button .mat-button-focus-overlay{opacity:1}.mat-button::-moz-focus-inner,.mat-fab::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-mini-fab::-moz-focus-inner,.mat-raised-button::-moz-focus-inner{border:0}.mat-fab,.mat-mini-fab,.mat-raised-button{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-fab:not([disabled]):active,.mat-mini-fab:not([disabled]):active,.mat-raised-button:not([disabled]):active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}[disabled].mat-fab,[disabled].mat-mini-fab,[disabled].mat-raised-button{box-shadow:none}.mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{transition:none;opacity:0}.mat-button:hover .mat-button-focus-overlay{opacity:1}.mat-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button,.mat-icon-button,.mat-raised-button{color:currentColor}.mat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*{vertical-align:middle}.mat-button-focus-overlay,.mat-button-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-focus-overlay{background-color:rgba(0,0,0,.12);border-radius:inherit;opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}@media screen and (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}@media screen and (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                inputs: ['disabled', 'disableRipple', 'color'],
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                viewProviders: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true }],
            },] },
];
/**
 * @nocollapse
 */
MdButton.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: Platform, },
    { type: FocusMonitor, },
]; };
/**
 * Raised Material design button.
 */
var MdAnchor = (function (_super) {
    tslib_1.__extends(MdAnchor, _super);
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
    { type: Component, args: [{ selector: "a[md-button], a[md-raised-button], a[md-icon-button], a[md-fab], a[md-mini-fab],\n             a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab], a[mat-mini-fab]",
                host: {
                    '[attr.tabindex]': 'disabled ? -1 : 0',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '(click)': '_haltDisabledEvents($event)',
                },
                inputs: ['disabled', 'disableRipple', 'color'],
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div mat-ripple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"_isRoundButton || _isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"_isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                styles: [".mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px}[disabled].mat-button,[disabled].mat-fab,[disabled].mat-icon-button,[disabled].mat-mini-fab,[disabled].mat-raised-button{cursor:default}.cdk-keyboard-focused.mat-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-icon-button .mat-button-focus-overlay,.cdk-keyboard-focused.mat-mini-fab .mat-button-focus-overlay,.cdk-keyboard-focused.mat-raised-button .mat-button-focus-overlay{opacity:1}.mat-button::-moz-focus-inner,.mat-fab::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-mini-fab::-moz-focus-inner,.mat-raised-button::-moz-focus-inner{border:0}.mat-fab,.mat-mini-fab,.mat-raised-button{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-fab:not([disabled]):active,.mat-mini-fab:not([disabled]):active,.mat-raised-button:not([disabled]):active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}[disabled].mat-fab,[disabled].mat-mini-fab,[disabled].mat-raised-button{box-shadow:none}.mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{transition:none;opacity:0}.mat-button:hover .mat-button-focus-overlay{opacity:1}.mat-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab:not([disabled]):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button,.mat-icon-button,.mat-raised-button{color:currentColor}.mat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*{vertical-align:middle}.mat-button-focus-overlay,.mat-button-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-focus-overlay{background-color:rgba(0,0,0,.12);border-radius:inherit;opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}@media screen and (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}@media screen and (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * @nocollapse
 */
MdAnchor.ctorParameters = function () { return [
    { type: Platform, },
    { type: FocusMonitor, },
    { type: ElementRef, },
    { type: Renderer2, },
]; };
var MdButtonModule = (function () {
    function MdButtonModule() {
    }
    return MdButtonModule;
}());
MdButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MdRippleModule,
                    MdCommonModule,
                    A11yModule,
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
 * Generated bundle index. Do not edit.
 */
export { MdButtonModule, MdButtonCssMatStyler, MdRaisedButtonCssMatStyler, MdIconButtonCssMatStyler, MdFab, MdMiniFab, MdButtonBase, _MdButtonMixinBase, MdButton, MdAnchor, MdButton as MatButton, MdButtonBase as MatButtonBase, MdButtonCssMatStyler as MatButtonCssMatStyler, MdButtonModule as MatButtonModule, MdAnchor as MatAnchor, MdIconButtonCssMatStyler as MatIconButtonCssMatStyler, MdFab as MatFab, MdMiniFab as MatMiniFab, MdRaisedButtonCssMatStyler as MatRaisedButtonCssMatStyler };
//# sourceMappingURL=button.es5.js.map
