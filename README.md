[![Netlify Status](https://api.netlify.com/api/v1/badges/2cf9d372-dc50-4c35-9c5e-24b005b517d3/deploy-status)](https://app.netlify.com/sites/clclab/deploys)

Maintaining the CLC Lab website
===============================

[Installation](#installation)
• [News](#news)
• [Publications](#publications)
• [Blogposts](#blogposts)
• [Development](#development)
• [Notes](#notes) 

The clc site is generated using [Jekyll](https://jekyllrb.com/). The site is hosted at Netlify at [clclab.netlify.com](https://clclab.netlify.com). Every time changes are made to the repository, the site is automatically regenerated. The address [projects.illc.uva.nl/clclab](https://projects.illc.uva.nl/clclab) redirects to Netlify.

Installation
------------

Maintaing the website is easiest if you fist install Jekyll locally;
see for example this guide on installing [Jekyll with Bundler](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/).
After cloning the repository:

```bash
# Install all dependencies
bundle install

# To serve the website
bundle exec jekyll serve --livereload
```

Then go to http://127.0.0.1:4000, the website will be served here. 
Whenever you edit a file, the site is regenerated and your browser
will automatically refresh the page. After making the required changes,
push your commits to the remote repository. Netfify will automatically
start regenerating the website.

[News](_data/news.yml)
----

See **[`_data/news.yml`](_data/news.yml)**.
Every news item has a `date` and a `text` field.
This is the format:

```yaml
- date: yyyy-mm-dd
  text: >-
    Your news message as markdown. 
    So you can use **bold** or _italic_ text,
    [links](https://...), etc etc.
```

[Publications](assets/bibliography/clc_publications.bib)
--------------------------------------------------------

The publications of the clc lab are stored in [`assets/bibliography/clc_publications.bib`](assets/bibliography/clc_publications.bib).
The file is used to generate the publications page.To avoid corrupting the BibTeX file, please use [BibDesk](https://bibdesk.sourceforge.io/) to edit the file.

* `CLC-A-Conference={1}`: custom field that indicates that this is a publication at an A conference.

Note: the other bibtex files in `assets/bibliography` contain references that are cited elsewhere on the website, e.g. in blogposts.

[People](_data/people.yml)
--------------------------

Details about (former) lab members are stored in [`_data/people.yml`](_data/people.yml).
Supported fields are:

* `name`
* `type`: one of `current`, `former`, `collaborator`
* `position`: one of `PI`, `postdoc`, `phd`, `master`
* `url`, `github`, `twitter`: links
* `email`: email adress (please remove for former members)
* `img`: picture. Please upload images to `assets/people/`
* `interests`: a brief description of interests. Markdown allowed.
* `startyear` and `endyear`: used for former members only

[Blogposts](_posts)
----------------------------------------

Blogposts are stored in [`_posts`](_posts) as markdownfiles named ``yyyy-mm-dd-title.md``. 
Jekyll only processes files that start with a header: a section deliminated by three dashes.
The header contains metadata about the file in YAML format, such as the title.
Here's a starter for a blogpost:

```md
---
layout: blog
title: "I know what you see"
subtitle: "Reading minds, part 1"
author: Iris Proff
published: 2018-11-23
image: /assets/posts/2018/Linda-Jolink-reading-minds-1.jpg
---

## Header 2

And some more **boldface** text or *italic* text.
You can cite papers {% cite Zuidema2003 %}. 
Like latex, you only need the cite key in your bibtex file (specified in the references section at the bottom of the file).

## Another section

And some more text

- list item
- list item 2

You can include images and youtube videos as follows:

{%
 include figure
 path="/assets/posts/2000/my-figure.jpg"
 alt="Description of the figure"
 caption="A caption"
 credits="Illustration by Jelle Zuidema"
%}

{%
  include youtube
  id="nsjDnYxJ0bo"
  caption="A caption for the video
%}

(but you can also just include html)

<div class="references">
  <h4>References</h4>
  {% bibliography --cited --file name_of_my_bibtex_file %}
</div>
```

Please keep the following in mind.

* **Style:** Should be accessible or entertaining.
* **Images:** If possible, include one or two pictures.
Think about whether your results/methods/framework could be nicely visualized as an infographic or interactive plot.
* **Citations:** Please use [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) for citations: `{% cite Zuidema2009 %}`
* You can use formulas.

Development
-----------

Directory structure:

* `/_data`: YAML files with structured data.
* `/_posts` and `/_pages`: blogposts and pages
* `/_includes` and `/_layouts`: these directories contain the template files used by Jekyll when generating the website.
* `/assets`: all publicly available files, such as css, js, images, pdfs, bibliography etc.
* `/src`: javascript source code for filtering the publications. The code is saved to `assets/js/bundle.js`.

Notes
-----

* **Marco Vervoort** wrote the script to make https://clclab.netlify.app/ available at https://projects.illc.uva.nl/LaCo/clclab. Contact him about problems etc regarding this setup..
