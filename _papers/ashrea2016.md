---
layout: paper
title: City Scale Modeling with OpenStudio
authors: D. Macumber, K. Gruchalla, N. Brunhart-Lupo, M. Gleason, J. Abbot-Whitley, J. Robertson, B. Polly, K. Fleming, M. Schott
journal: ASHRAE and IBPSA-USA SimBuild 2016
order: 2016-08
pubdate: August 2016
image: /images/portland.png
image_text: OpenStudio Geometry for Portland Dataset
links:
 - path: "https://www.ashrae.org/File%20Library/docLib/Events/Simbuild2016/Papers/C018.pdf"
   title: paper
 - path: "http://www.gruchalla.org/papers/macumber-simbuild2016.bib"
   title: bibtex
---
 Assessing the impact of energy efficiency technologies at a city scale is of great interest to city planners, utility companies, and policy makers. This paper describes a flexible framework which can be used to create and run city scale building energy simulations. The framework is built around the new OpenStudio City Database (CityDB). Building footprints, building height, building type, and other data can be imported into the database from public records or other sources. The OpenStudio City User Interface (CityUI) can be used to inspect and edit data in the CityDB. Unknown data can be inferred or assigned from a statistical sampling of other datasets such as the Commercial Buildings Energy Consumption Survey (CBECS) or Residential Energy Consumption Survey (RECS). Once all required data is available, OpenStudio measures are used to create starting point energy models for each building in the dataset and to model particular energy efficiency measures for each building. Together this framework allows a user to pose several scenarios such as “what if 30% of the commercial retail buildings added roof top solar” or “what if all elementary schools converted to ground source heat pumps” and then visualize the impacts at a city scale. This paper focuses on modeling existing building stock using public records; however, the framework is capable of supporting the evaluation of new construction and the use of proprietary data sources.