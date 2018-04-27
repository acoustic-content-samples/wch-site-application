import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { TypeEmbedCodeComponent } from './../../components/embed-code/typeEmbedCodeComponent';

/*
 * @name embedCodeLayout
 * @id embed-code-layout
 */
@LayoutComponent({
    selector: 'embed-code-layout'
})
@Component({
  selector: 'app-embed-code-layout-component',
  templateUrl: './embedCodeLayout.html',
  styleUrls: ['./embedCodeLayout.scss'],
  preserveWhitespaces: false
})
export class EmbedCodeLayoutComponent extends TypeEmbedCodeComponent implements AfterViewInit {

  @ViewChild('snippet') snippetElem: ElementRef;
  iframeHeight: string;
  iframeWidth: string;

  constructor() {
    super();
    /*
* TODO initialize your custom fields here, note that
* you can refer to the values bound via @RenderingContextBinding from
* your super class.
*
* Make sure to call 'this.safeSubscribe' if you plan to subscribe to observables
*/
    this.safeSubscribe(this.onHeight, () => {
      this.resizeIFrame();
    });
    this.safeSubscribe(this.onWidth, () => {
      this.resizeIFrame();
    });
    this.safeSubscribe(this.onHtml, () => {
      this.resizeIFrame();
    });
    this.safeSubscribe(this.onJs, () => {
      this.resizeIFrame();
    });
    this.safeSubscribe(this.onCss, () => {
      this.resizeIFrame();
    });
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.snippetElem) {
      this.snippetElem.nativeElement.onload = () => {
        this.resizeIFrame();
      };
    }
  }

  resizeIFrame() {
    if (this.height) {
      this.iframeHeight = this.height;
    } else {
      if (this.snippetElem) {
        this.iframeHeight = this.snippetElem.nativeElement.contentDocument.documentElement.scrollHeight + 'px';
      } else {
        this.iframeHeight = '100%';
      }
    }
    if (this.width) {
      this.iframeWidth = this.width;
    } else {
      this.iframeWidth = '100%';
    }
  }

}
