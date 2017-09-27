/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectorRef } from '@angular/core';
import { MdDrawer, MdDrawerContainer, MdDrawerContent } from './drawer';
export declare class MdSidenavContent extends MdDrawerContent {
    constructor(changeDetectorRef: ChangeDetectorRef, container: MdSidenavContainer);
}
export declare class MdSidenav extends MdDrawer {
    /** Whether the sidenav is fixed in the viewport. */
    fixedInViewport: boolean;
    private _fixedInViewport;
    /**
     * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
     * mode.
     */
    fixedTopGap: number;
    private _fixedTopGap;
    /**
     * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
     * fixed mode.
     */
    fixedBottomGap: number;
    private _fixedBottomGap;
}
export declare class MdSidenavContainer extends MdDrawerContainer {
    _drawers: any;
    _content: any;
}
