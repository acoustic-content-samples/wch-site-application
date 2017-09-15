/*******************************************************************************
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
import {
    LayoutComponent, RenderingContext
} from 'ibm-wch-sdk-ng';
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { TypeSignUpComponent } from './../../components/sign-up/typeSignUpComponent';
import {Subscription} from "rxjs/Subscription";
import {UtilsService} from "../../common/utils/utils.service";

declare var $: any;
declare var Foundation: any;

/**
 * @name signUpLayout
 * @id sign-up-layout
 */
@LayoutComponent({
    selector: 'sign-up-layout'
})
@Component({
  selector: 'app-sign-up-layout-component',
  templateUrl: './signUpLayout.html',
  styleUrls: ['./signUpLayout.scss']
})
export class SignUpLayoutComponent extends TypeSignUpComponent implements OnInit, OnDestroy{

    @ViewChild('revealModal') revealModal: ElementRef;

    emailAddress: string = '';

    rContext: RenderingContext;
    itemId: string;
    reveal: any;

    readonly BACKGROUND_IMG_KEY:string = 'backgroundImage';
    readonly HEADLINE_KEY:string = 'text';
    readonly CALL_TO_ACTION_KEY:string = 'link';
    readonly CONFIRMATION_KEY:string = 'dialogMessage';


    constructor(private utilsService: UtilsService) {
        super();
    }

    ngOnInit() {
        super.ngOnInit();

        this.safeSubscribe(this.onRenderingContext, (renderingContext) => {
            this.rContext = renderingContext;
            this.itemId = `signup-${this.rContext.id}`;
        })
    }

    ngAfterViewInit(){
    	super.ngAfterViewInit();
        this.reveal = new Foundation.Reveal($(`#${this.itemId}`));
    }

    ngOnDestroy() {
        //clean up reveal modal
        let elem = this.reveal.$element.foundation('destroy');
        $(elem).remove();
    	super.ngOnDestroy();
    }

    openModal(){
        this.addEmail();
        $(this.revealModal.nativeElement).foundation('open');
    }

    addEmail() {
        return;
    }

}
