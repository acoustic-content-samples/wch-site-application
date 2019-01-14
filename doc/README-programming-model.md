## Watson Content Hub Sites Customization Programming Model

This document covers best practices for developing Sites with Watson Content Hub. In the different sections it outlines based on samples how different use cases like for instance referencing an image that is stored in the content type can be implemented.
For more introductory information on Sites in Watson Content Hub see:

[Developing your own website](http://developer.ibm.com/customer-engagement/docs/developing-your-own-website/)

[Managing a web site in Watson Content Hub](https://www.ibm.com/support/knowledgecenter/SS3UMF/dch/admin/website_admin_std.html)

## Table of Contents

-   [Watson Content Hub Sites Customization Programming Model](#watson-content-hub-sites-customization-programming-model)
-   [Table of Contents](#table-of-contents)
    -   [Process overview](#process-overview)
    -   [Referencing content elements from layout templates](#referencing-content-elements-from-layout-templates)
    -   [Including an Image from the referenced content](#including-an-image-from-the-referenced-content)
    -   [Including a Category from the referenced content](#including-a-category-from-the-referenced-content)
    -   [Including a Formatted text element from the referenced content](#including-a-formatted-text-element-from-the-referenced-content)
    -   [Including a Date element from the referenced content](#including-a-date-element-from-the-referenced-content)
    -   [Including a Link element from the referenced content](#including-a-link-element-from-the-referenced-content)
    -   [Including a File element from the referenced content](#including-a-file-element-from-the-referenced-content)
    -   [Including a Location element from the referenced content](#including-a-location-element-from-the-referenced-content)
    -   [Including a Video element from the referenced content](#including-a-video-element-from-the-referenced-content)
    -   [Including an Option selection in the referenced content](#including-an-option-selection-in-the-referenced-content)
    -   [Including a reference to a content item, referencing its layout](#including-a-reference-to-a-content-item-referencing-its-layout)
    -   [Including references to content items, without referencing its layout](#including-references-to-content-items-without-referencing-its-layout)
    -   [Including multi-valued references, referencing their layouts](#including-multi-valued-references-referencing-their-layouts)
    -   [Including multi-valued references, without referencing their layouts](#including-multi-valued-references-without-referencing-their-layouts)
    -   [Triggering a search and showing results, referencing their layouts](#triggering-a-search-and-showing-results-referencing-their-layouts)
    -   [Triggering a search and showing results, without referencing their layouts](#triggering-a-search-and-showing-results-without-referencing-their-layouts)
    -   [How to include a custom JS component](#how-to-include-a-custom-js-component)
    -   [Working with multiple content hubs](#working-with-multiple-content-hubs)
    -   [Managing the site application source](#managing-the-site-application-source)
    -   [Adding inline edit functionality](#adding-inline-edit-functionality)
        -   [Example](#example)
    -   [Adding inline edit functionality](#adding-inline-edit-functionality)

### Process overview

1. Create layout with the command "npm run create-layout"
2. Modify the files src\app\layouts\<generated-layout>\*
3. Avoid touching the files in src\app\components\<generated-layout>\*
4. Surround the html structure with the ID of the content (for future item highlighting): `<div [id]="renderingContext.id" class="…">…</div>`
   **renderingContext**: object containing the representation the content item. This is implicitly created by the create-layout command.
5. Develop the remaining layout code.
6. Publish the layout to the live site: `npm run build-deploy`
7. Run “npm start” and customize and test the layout locally

### Referencing content elements from layout templates

To reference content item elements, you can simply use the element key inside double curlies in HTML like this: `{{<element key>}}`
For example, for an element named “Text” with key “text”: `<h1 class="text-hero">{{text}}</h1>`
See Angular template syntax documentation for syntax details: https://angular.io/guide/template-syntax
Note that the out-of-the-box provided layouts use ‘rContext’ like this: `{{rContext.<elementType>[<element key>]}}`
For example: `<h1 class="text-hero">{{rContext.text[HEADLINE_KEY]}}</h1>`

### Including an Image from the referenced content

1. In **src\app\layouts\\<generated-layout\>\\<name\>.ts** include at the header: `import { UtilsService } from '@ibm-wch/components-ng-shared-utilities'";`
2. In **src\app\layouts\\<generated-layout\>\\<name\>.ts** pass the service into the constructor:

```
constructor(private utilService: UtilsService) {
  super();
}
```

3. In **src\app\layouts\\<generated-layout\>\\<name\>.html** include : `<img [src]="utilService.getImageUrl(renderingContext, IMAGE_KEY, 'short')" [alt]="image.altText ? image.altText : ''" [title]="image.altText ? image.altText : ''" />`

**IMAGE_KEY**: key used for the image in the content type. This value is not implicit and will need to be defined.

**image**: the image element from the renderingContext. This property is autogenerated when running the "npm run create-layout" command.

**short**: image rendition to use

### Including a Category from the referenced content

The UtilsService has a predefined getFirstCategory() function that will return the name of the first category of the category element as a string.

1. In **src\app\layouts\\<generated-layout\>\\<name\>.ts** include at the header: `import { UtilsService } from '@ibm-wch/components-ng-shared-utilities';`
2. In **src\app\layouts\\<generated-layout\>\\<name\>.ts** pass the service into the constructor:

```
constructor(private utilService: UtilsService) {
  super();
}
```

3. In **src\app\layouts\\<generated-layout\>\\<name\>.html** include : `<p>{{utilService.getFirstCategory(renderingContext, 'categoryElementKey')}}</p>`

**renderingContext**: the rendering context of the content item. This value is not implicit and will need to be defined.
**categoryElementKey**: string, the name of the category element key in the Watson Content Hub content type.

### Including a Formatted text element from the referenced content

In order to render a Formatted Text element, use the **innerHTML** attribute of the HTML \<div> tag and pass the value through the supplied **formattedText** Angular pipe.
`<div [innerHTML]="message | formattedText:html"></div>`

**message**: the Formatted Text element from the renderingContext. This property is autogenerated when running the "npm run create-layout" command.

### Including a Date element from the referenced content

1. Use the HTML **\<time>** tag and pass the Date element into the **datetime** attribute.
2. In the body of the HTML **\<time>** tag, include the Date element, passing it through the Angular date filter.
   `<time [attr.datetime]="eventDate">{{eventDate | date:'longDate'}}</time>`

**eventDate**: the Date element from the renderingContext. This property is autogenerated when running the "npm run create-layout" command.

### Including a Link element from the referenced content

All links are rendered as internal resource links, unless the protocol is included in the link (e.g. https://www.ibm.com).
If the link you would like to include is a route to a page, prefix the page route name with '#/'
Place the \<elementKey>.linkURL inside the **href** attribute of the HTML \<a> tag.
`<a href="readMoreLink.linkURL">{{readMoreLink.linkText}}</a>`

**readMoreLink**: the Link element from the renderingContext. This property is autogenerated when running the "npm run create-layout" command.

Properties of the Link element:

-   linkURL - the URL to be rendered
-   linkText - the value to be displayed for the link
-   LinkDescription - description of link

### Including a File element from the referenced content

The JSON structure for a file element is as follows:

```
{
  "asset": {
    "fileName": "",
    "fileSize": 000,
    "id": "00000000-0000-0000-0000-000000000000",
    "mediaType": "",
    "resourceUri": "/delivery/v1/resources/<asset-id>"
  },
  "elementType": "file",
  "url": "/<content-hub-id>/dxresources/<folder>/<asset-id>.<file-extension>"
}
```

To add a downloadable file link, include the following code in the layout html file:

```
<a [href]="renderingContext.context.hub.deliveryUrl.origin + file.url" [download]="file.asset.fileName">{{file.asset.fileName}}</a>
```

**renderingContext**: object containing the representation the content item. This is implicitly created by the create-layout command.

**file**: the rendering context of the file element. This property is autogenerated when running the "npm run create-layout" command.

### Including a Location element from the referenced content

Location elements consist of a latitude and longitude, supplied by the business user.

```
{
  "elementType": "location",
  "latitude": 0.000000,
  "longitude": 0.00000
}
```

These values can be supplied to any plugin that takes coordinates as arguments.
(e.g. Google Maps embed code. In this case, the url for the iframe must be sanitized via the formattedText pipe provided by the out-of-the-box SPA)

```
<iframe [src]="'https://maps.google.com/maps?q=' + location.latitude + ',' + location.longitude + '&hl=es;z=14&amp;output=embed' | formattedText:'resourceUrl'"></iframe>
```

**location**: the rendering context of the location element. This property is autogenerated when running the "npm run create-layout" command.

### Including a Video element from the referenced content

The Video element JSON includes information about the video as an element as well as the information about the video asset it references:

```
{
  "asset": {
    "fileName": "",
    "fileSize": 000,
    "id": "00000000-0000-0000-0000-00000000000",
    "mediaType": "",
    "resourceUri": "/delivery/v1/resources/<asset-id>"
  },
  "elementType": "video",
  "url": "/<content-hub-id>/dxresources/<folder>/<asset-id>.<file-extension>"
}
```

The easiest way to include a video in your site is to use the HTML **\<video\>** tag:

```
<video width="100%" height="auto" controls>
	<source [src]="renderingContext?.context.hub.deliveryUrl.origin + video.url" [type]="video.asset.mediaType">
	Your browser doesn't support HTML5 video.
</video>
```

**renderingContext**: object containing the representation the content item. This property is autogenerated when running the "npm run create-layout" command.

**video**: the rendering context of the Video element to be rendered. This property is autogenerated when running the "npm run create-layout" command.

Note: in the out-of-the-box HeroVideo component, the [Video.js](http://videojs.com/) plugin is used to render the video.

### Including an Option selection in the referenced content

Option selection elements allow the business user to control how the content is rendered via options defined in the content type.
The JSON of a single Option selection element is an object with a single 'selection' property `{ "selection": "<pre-defined value>" }`, while an Option selection element with 'allow multiple selections' setting enabled JSON contains an array of all selections:

```
[ { "selection": "Monday" },
{ "selection": "Tuesday" },
{ "selection": "Wednesday" },
{ "selection": "Thursday" },
{ "selection": "Friday" },
{ "selection": "Saturday" },
{ "selection": "Sunday" } ]
```

Examples of single Options selection:
Hide content based on selected option

```
<div *ngIf="option.selection == 'left-align'">
//some code
</div>
```

**option**: the rendering context of the Option selection element to be rendered. This property is autogenerated when running the "npm run create-layout" command.

Add a css class based on selected option

```
<div [ngClass]="{'float-left': option.selection == 'left-align'}">
//some code
</div>
```

**option**: the rendering context of the Option selection element to be rendered. This property is autogenerated when running the "npm run create-layout" command.

Example of an Option selection element with 'allow multiple selections' setting enabled:

Manipulate variable data inside the layout TypeScript file.

```
let availableDays = [];

options.forEach((day) => {
	availableDays.push(day.selection);
});
```

**options**: the rendering context of the Option selection element to be rendered. This property is autogenerated when running the "npm run create-layout" command.

The developer has control over how the selected option changes the appearance or function of the layout.

### Including a reference to a content item, referencing its layout

```
<div class="grid-container">
   <wch-contentref [renderingContext]="item">
   </wch-contentref>
</div>
```

**item**: the rendering context of the reference element to be rendered. This property is autogenerated when running the "npm run create-layout" command.

### Including references to content items, without referencing its layout

If you would like to render the referenced item, without using its specified layout, this can be done by accessing the elements of the rendering context directly.

```
<div class="grid-container">
   <div [id]="item.id">
   		{{item.<elementType>[<elementKey>]}}
   </div>
</div>
```

**item**: the rendering context of the reference element to be rendered. This property is autogenerated when running the "npm run create-layout" command.

### Including multi-valued references, referencing their layouts

```
<div class="section" *ngFor="let item of sectionOne | trackBy: trackByComponentId">
  <div class="grid-container">
    <wch-contentref [renderingContext]="item"></wch-contentref>
  </div>
</div>
```

**sectionOne**: the multi-valued reference element to be rendered. This property is autogenerated when running the "npm run create-layout" command.

**trackByComponentId**: a property provided by the SDK to improve rendering performance on the ngFor directive.

### Including multi-valued references, without referencing their layouts

If you would like to render the referenced items, without using their specified layouts, this can be done by accessing the elements of the rendering contexts directly.

```
<div class="section" *ngFor="let item of sectionOne | trackBy: trackByComponentId">
  <div [id]="item.id">
    {{item.<elementType>[<elementKey>]}}
  </div>
</div>
```

**sectionOne**: the multi-valued reference element to be rendered. This property is autogenerated when running the "npm run create-layout" command.

**trackByComponentId**: a property provided by the SDK to improve rendering performance on the ngFor directive.

### Triggering a search and showing results, referencing their layouts

The SDK provides the wch-contentquery component that is used for querying content:

```
<wch-contentquery [query]='queryString' #q>
  <wch-contentref *ngFor="let rc of q.onRenderingContexts | async" 	[renderingContext]="rc"></wch-contentref>
</wch-contentquery>
```

**q**: local name used to access the list returned from `wch-contentquery`
**queryString**: Solr query used to search for WCH content

### Triggering a search and showing results, without referencing their layouts

The SDK provides the wch-contentquery component that is used for querying content. But the results can be rendered, without referencing their individual layouts:

```
<wch-contentquery [query]='queryString' #q>
  <div *ngFor="let rc of q.onRenderingContexts | async">
  	{{rc.<elementType>[<elementKey>]}}
  </div>
</wch-contentquery>
```

**q**: local name used to access the list returned from `wch-contentquery`
**queryString**: Solr query used to search for WCH content

### How to include a custom JS component

The SPA uses 3rd party plugins to render some components like the carousel, navigation drop downs, and video controls. To include these 3rd party scripts we add the following to the **src\app\app.module.ts** file:

```
import 'script-loader!jquery';
import 'script-loader!foundation-sites/dist/js/foundation.js';
import 'script-loader!video.js/dist/video.js';
```

Typescript requires properties to be defined before you can use them. In order to use jQuery in a component it will need to be defined. Add the following to the top of the component ts file after the imports: `declare var $: any;`

### Working with multiple content hubs

For multiple isolated environments, such as for dev/test, staging, and production, you can use a different content hub for each environment. This provides complete isolation for each environment, with separate:

-   Pages, content, assets, web resources, templates, etc.
-   User access and other hub settings

You can select which content hub to work with by running: `wchtools init` \[specify hub API URL when prompted]. Use wchtools to move any Content Hub artifacts from one content hub to another

### Managing the site application source

The updated site application source should be stored in a source code management system such as GitHub. When working with multiple developers, you should update the managed source frequently, to avoid conflicts within shared files. For example, generating a layout updates a shared file where all layout components are registered. When IBM updates the site application source on GitHub, you can decide if you want to get the updates and merge them with your source.

### Adding inline edit functionality

The Site Manager in Watson Content Hub offers an edit mode that allows a business user to make inline editing changes directly. The elements in a [Component](https://angular.io/api/core/Component) need the **wchEditable** directive to attach inline edit functionality.

The directive assumes that the [Component](https://angular.io/api/core/Component) contains a `onRenderingContext` property that exposes the `RenderingContext` of the item currently edited. This contract is fulfilled automatically if the component extends [AbstractRenderingComponent](https://www.npmjs.com/package/@ibm-wch-sdk/ng#_30d66fd25c62891da799936c1e1454566f3770b753be58d94b5621b01603a546).

The directive requires as a parameter a string identifying the editable property. This string must reference a property on the [Component](https://angular.io/api/core/Component) that has been bound to a field of the content item via a `@RenderingContextBinding` directive. This directive contains the actual selector of the field. Note that this binding is done automatically if the components are generated via the [CLI](https://www.npmjs.com/package/@ibm-wch-sdk/cli).

#### Example

```html
<div wchEditable="myField">{{renderingContext.elements.myField.value}}</div>
```

assuming the following binding

```typescript
export class MyComponent extends AbstractRenderingComponent {
	@RenderingContextBinding('elements.myField.value')
	myField: string;
}
```
