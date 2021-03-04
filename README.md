# Holberton Smiling School Javascript


## Description

Implement web pages with Bootstrap

-   [Homepage](https://intranet.hbtn.io/rltoken/X5mp-bZwa8Jzi3HI4xqSLA "Homepage")  -  [fig file](https://intranet.hbtn.io/rltoken/zsIWYdFMnWtImWisjLgfTw "fig file")
-   [Pricing](https://intranet.hbtn.io/rltoken/Bbop8wwZOLJsavfT6szqdQ "Pricing")  -  [fig file](https://intranet.hbtn.io/rltoken/5yAyDbQvLAVmm3IC_NRV3g "fig file")
-   [Courses](https://intranet.hbtn.io/rltoken/PSFYeol4NYMEmSBsxUyuoQ "Courses")  -  [fig file](https://intranet.hbtn.io/rltoken/Jzp3WS1dZwYd8Q_wTIYp9Q "fig file")


<p align="center"><img src="https://github.com/afinesami/holberton-smiling-school-javascript/blob/main/3c71cc99d2fc1c12a3d3.jpg" alt="final result"></a></p>

---
# holberton-smiling-school
* This is a fullstack web specialization project at Holberton school.
* The goal of this project is a implement a Figma design template in HTML, CSS and Bootstrap
* The project has no guiding instructions.
* There are 3 page to implement.
* There are 3 different layout (desktop, tablet and mobile) for each page.


### [Reuse and polish your Bootstrap integration](./0-homepage.html)
* Copy files from [0x0B. Implement a design with bootstrap](https://github.com/afinesami/holberton-smiling-school)

### [Homepage - quotes](./1-homepage.html)

Replace static quotes by dynamic loading:

-   URL:  `https://smileschool-api.hbtn.info/quotes`
-   No static quotes should be present in the quotes section
-   During the Ajax request, a loader should be present
-   Carousel should work like before

### [Homepage - popular tutorials](./2-homepage.html)

Replace static video cards by dynamic loading:

-   URL:  `https://smileschool-api.hbtn.info/popular-tutorials`
-   No static video cards should be present in the section
-   During the Ajax request, a loader should be present
-   Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
-   Don’t forget the responsive part!

### [Homepage - latest videos](./homepage.html)

Replace static video card by dynamic loading:

-   URL:  `https://smileschool-api.hbtn.info/latest-videos`
-   No static video cards should be present in the section
-   During the Ajax request, a loader should be present
-   Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
-   Don’t forget the responsive part!

### [Pricing - quotes](./pricing.html)

Replace static quotes by dynamic loading:

-   URL:  `https://smileschool-api.hbtn.info/quotes`
-   No static quotes should be present in the quotes section
-   During the Ajax request, a loader should be present
-   Carousel should work like before

### [Courses](./courses.html)

Replace static video card by dynamic loading:

-   URL:  `https://smileschool-api.hbtn.info/courses`
    -   `GET`  parameters:
        -   `q`: search value (in our case, the value of the field KEYWORDS)
        -   `topic`: topic filter value (in our case, the value of the field TOPICS)
        -   `sort`: order of all courses (in our case, the value of the field SORT BY)
-   No static video cards should be present in the section
-   During the Ajax request, a loader should be present
-   Dropdowns are dynamic (coming from the API):
    -   Topic: list of  `topics`
    -   Sort by: list of  `sorts`
-   Search value should be initialized by the value  `q`  in the API response
-   The list of video cards is coming from  `courses`  in the API response
-   API request must be done when:
    -   Search value is changing
    -   A new Topic is selected
    -   A new Sort by is selected

### [JSON to XML](./xml-scripts.js)

Convert all your JSON Ajax call to another API… a XML API!

Copy files - same content, except loading  `xml-scripts.js`  instead of  `script.js`

-   `homepage.html`  ->  `xml-homepage.html`
-   `pricing.html`  ->  `xml-pricing.html`
-   `courses.html`  ->  `xml-courses.html`

And use this API:

-   quotes:  `https://smileschool-api.hbtn.info/xml/quotes`
-   popular tutorials:  `https://smileschool-api.hbtn.info/xml/popular-tutorials`
-   latest videos:  `https://smileschool-api.hbtn.info/xml/latest-videos`
-   courses:  `https://smileschool-api.hbtn.info/xml/courses`

Final result should be the same as the JSON API version



---

## Author
* **Lafine Sami** - [Lafine Sami](https://github.com/afinesami)
