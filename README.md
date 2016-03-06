
# Overview
Media sharing site with support for image, video and audio files. AngularJS project with a bunch of other libraries for various effects.
Major libraries used are Videogular for video playback and Wavesurfer for audio playback.
## Functions
Registeration, logging in, uploading. Browsing of various media. Playback for videos and audio. Media liking, commenting and social media sharing.
##Screenshots
### Desktop - Frontpage
![Desktop](/../Screenshots/screenshots/desktop.jpg?raw=true "Desktop")
### Tablet and mobile - Frontpage
![TabletMobile](/../Screenshots/screenshots/tabletMobile.jpg?raw=true "Tablet and Mobile")
### Mobile - Various views from the site
![Views](/../Screenshots/screenshots/views.jpg?raw=true "Various views from the site")
#### Premaid mixin for media queries:
````scss
  @include phone
  @include tablet
  @include desktop
  @include device-portrait
  @include device-landscape
 ````
#### Fonts:
  ````scss
  $font-futura: "futura";
  $font-roboto: "roboto", sans-serif;
 ````
  
#### Vars:
```` scss
  // Colors
  $color-dark: #221f26;
  $color-light: #f5f5f5;
  
  $color-green: lighten(#3bd23d, 5%);
  $color-yellow: #edbd2e;
  $color-red: #de3b59;
  $color-blue: #19f3bf;
  
  $color-accent: #ccc;
  
  // Devices
  $width-tablet: 600px;
  $width-desktop: 1024px;
  $width-x-desktop: 1600px;

  // Font size
  $font-size-small: 12px;
  $font-size-regular: 16px;
  $font-size-large: 24px;
  $font-size-x-large: 32px;
  $font-size-xx-large: 48px;
  $font-size-xxx-large: 64px;
  $font-size-xxxx-large: 96px;
  ````
