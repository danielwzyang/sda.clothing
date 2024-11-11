
# SDA Website
A website for a club in Stuyvesant High School centered around designing and selling clothes to use the profits for charity
## firebase folder

### config.tsx
edit firebase config using environment variables in vercel setup
needs the following environment variables

     FIREBASE_API_KEY
     FIREBASE_AUTH_DOMAIN
     FIREBASE_PROJECT_ID
     FIREBASE_STORAGE_BUCKET
     FIREBASE_MESSAGING_SENDER_ID
     FIREBASE_APP_ID
     FIREBASE_MEASUREMENT_ID

all of these can be found in the firebase config

### get.tsx
async server function get
takes no arguments and returns an object containing the "clothes" collection
the collection contains objects (called documents by firebase) which have specific string ids
these objects contain information about the clothes as attributes
|attribute|info|
|--|--|
|models|string[]; length >= 1; strings must be valid model names<br><br>used when calling cloudinary to display images for model credit|
|name|string<br><br>used to display name on collection page and individual clothing pages|
|price|string<br><br>used to display price; $XX.XX  or SOLD|
|images|integer; >= 1<br><br>the number of images that should be displayed in the individual clothing page sliders (ignoring the model images at the end); has to match the number of images stored in the Cloudinary database|
|desc|string[]; typically length = 4; each string is one line of the description<br><br>used to display description in individual clothing pages; each string is its own line|

## components/ui folder
the .tsx files that aren't listed are components imported from shadcn/ui or don't have any props / functionality that needs documentation
all the animation is done using framer motion

### skewedParagraph.tsx
exports Paragraph component (different from Paragraph component from centerParagraph.tsx)
staggered header and paragraph reveal animation
used in the about page sections
|props|info|
|--|--|
|title|string<br><br>used as the header|
|lines|string[]<br><br>used as the lines for the paragraph; each string represents its own line and the line breaks have to be made manually to match the width of the paragraph|
|side|1 or -1<br><br>1 means on the left side, so the text is aligned to the left and the skew is for the left side<br>-1 means on the right side, so the text is aligned to the right and the skew is for the right side|

this isn't used directly on a page but it's referenced in the Section component

### aboutSection.tsx
exports Section component
used as the wrapper for the skewed paragraph in the about section
has the same props as skewedParagraph and just passes them down 

### centerParagraph.tsx
exports Paragraph component
instead of having a title and side this only has the lines which has the same type + restrictions as the lines prop for the skewed paragraph
used in the individual clothing pages to display the description

### clothingCard.tsx
exports ClothingCard component
used for the main collection page
image is taken from Cloudinary database
the first image for any given id is the id0; ex: id = "cmigyl", cloudinary id for cover = "cmiygl0"
|props|info|
|--|--|
|id|string<br><br>has to be valid clothing id|
|data|object that contains the name and price<br><br>name: string, price: string|

the data prop isn't all that important since you can just pass the  entire document data since it contains the name and price

### clothingCarousel.tsx
exports ClothingCarousel component
used in the individual clothing pages
image slider
grabs images from the Cloudinary
|props|info|
|--|--|
|tag|string<br><br>same as the id for any document|
|length|number<br><br>same as the images attribute in document|
|models|string[]<br><br>same as the models attribute in document

### teamCard.tsx
exports TeamCard component
used in the team page
|props|info|
|--|--|
|name|string|
|position|string|
|bio|string<br><br>should be relatively short (around 20 words)|
|facebook|string|
|instagram|string|
|mail|string|
|image|string<br><br>should be a path to the image in the public folder (ex: "/daniel.png"); this doesn't use cloudinary since the images are stored in the public folder|
