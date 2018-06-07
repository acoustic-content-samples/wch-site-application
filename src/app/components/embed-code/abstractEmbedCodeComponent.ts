/*
 * Do not modify this file, it will be auto-generated.
 */
import {
    RenderingContextBinding,
    AbstractRenderingComponent
} from '@ibm-wch-sdk/ng';
import {
    Observable
} from 'rxjs';

/*
 * @name Embed code
 * @id fdee49eb-1367-4005-8bfe-7e634a4d7e0f
 */
export abstract class AbstractEmbedCodeComponent extends AbstractRenderingComponent {

    /*
     * {
     *   "displayType": "multiLine",
     *   "elementType": "text",
     *   "key": "html",
     *   "label": "HTML"
     * }
     */
    @RenderingContextBinding('text.html', '')
    readonly onHtml: Observable<string>;

    /*
     * @see #onHtml
     */
    @RenderingContextBinding()
    readonly html: string;

    /*
     * {
     *   "displayType": "multiLine",
     *   "elementType": "text",
     *   "key": "css",
     *   "label": "CSS"
     * }
     */
    @RenderingContextBinding('text.css', '')
    readonly onCss: Observable<string>;

    /*
     * @see #onCss
     */
    @RenderingContextBinding()
    readonly css: string;

    /*
     * {
     *   "displayType": "multiLine",
     *   "elementType": "text",
     *   "key": "js",
     *   "label": "JS"
     * }
     */
    @RenderingContextBinding('text.js', '')
    readonly onJs: Observable<string>;

    /*
     * @see #onJs
     */
    @RenderingContextBinding()
    readonly js: string;

    /*
     * {
     *   "elementType": "toggle",
     *   "helpText": "Allows content (e.g. a video player) to be resized to fit the entire screen.",
     *   "key": "allowFullScreen",
     *   "label": "Allow full screen"
     * }
     */
    @RenderingContextBinding('toggle.allowFullScreen', false)
    readonly onAllowFullScreen: Observable<boolean>;

    /*
     * @see #onAllowFullScreen
     */
    @RenderingContextBinding()
    readonly allowFullScreen: boolean;

    /*
     * {
     *   "elementType": "toggle",
     *   "helpText": "If selected, the Embed code compoenent will show scrollbars if the content surpasses the set width and height dimensions.",
     *   "key": "showScrollBars",
     *   "label": "Show scroll bars"
     * }
     */
    @RenderingContextBinding('toggle.showScrollBars', false)
    readonly onShowScrollBars: Observable<boolean>;

    /*
     * @see #onShowScrollBars
     */
    @RenderingContextBinding()
    readonly showScrollBars: boolean;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "Height of Embed code compoenent (e.g. 300px, 100%). If not set, the height defaults to the height of the content.",
     *   "key": "height",
     *   "label": "Height"
     * }
     */
    @RenderingContextBinding('text.height', '')
    readonly onHeight: Observable<string>;

    /*
     * @see #onHeight
     */
    @RenderingContextBinding()
    readonly height: string;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "Width of Embed code compoenent (e.g. 300px, 100%). If not set, the width defaults to fill available space.",
     *   "key": "width",
     *   "label": "Width"
     * }
     */
    @RenderingContextBinding('text.width', '')
    readonly onWidth: Observable<string>;

    /*
     * @see #onWidth
     */
    @RenderingContextBinding()
    readonly width: string;

    protected constructor() {
        super();
    }
}
