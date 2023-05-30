# WATO amazing website by amazing people
- [WATO amazing website by amazing people](#wato-amazing-website-by-amazing-people)
- [How To:](#how-to)
  - [Create New Job Postings](#create-new-job-postings)
  - [Create New Blog Posts](#create-new-blog-posts)

# How To:

## Create New Job Postings

> All job posting pages are generated dynamically, all one needs to do is create a markdown document.

- Create a markdown document in `/job_postings`, titled anything
- Write a metadata section by fencing some text with `---`. Inside write the job title and team. Follow the headers and format exactly or it won't work.

**e.g.**
```
---
title: "Graphic Designer"
team: "BizOps"
subteam: "Design"
location: "Waterloo, ON"
type: "Part Time"
---
```
*These details will be visible on the job posting list.*
- Then, add whatever content you want below the metadata. The markdown will be parsed automatically to generate headings, block quotes, italics, bold and more.
- Embedded images need to be placed under `/public/img/FILE_NAME.jpg`

**e.g.**
```md
![Alt Text](/public/img/cool_image.png)
```
*This will display `cool_image.png` and show text "Alt Text" when hovered.*

- Refer to a markdown cheat sheet such as [this](https://www.markdownguide.org/cheat-sheet/) for more info about what formatting styles are possible. Note some of the more advanced syntax might not work.


## Create New Blog Posts

```
---
title: 'blog 2'  
date: 'March 18 2023'  
contact: '123-456-7890'  
image: '/images/img2.jpg'  
description: 'Lorem ipsum text'  
---
```
Image will be stored under public/images, if image path is not provided, there will be no image showing. Blogs will be saved under assets/blogs, when rendering blogs, the blogs will be sorted automatically to have the latest on top, make sure to follow the specific format shown above especially for date (Month day year)
