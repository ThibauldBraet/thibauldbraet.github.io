---
layout: page
title: Housing
subtitle: Housing in NYC
---

When looking for housing, people want to buy as cheap as possible, a large area to live on and if it is possible with a view on Central Park. Achieving all of these is of course not possible. This webpage gives an overview of the most important metrics to consider when looking for a house in NYC and how each region of NYC scores on this metric. When looking for a house, people care most about the quality price ratio, measured in the area to live in and the price you have to pay for the property. The neighbourhood to live in is important as well but this is measured by other metrics like education and crime rates, described in the other webpages


### Price per Gross Square Feet
Let us first have a look at how the price is correlated with the area of the residence. We had a looked per zip code at the total area of the sales in the past 12 months and the total sales price. When looking at this metric per borough, we see that there is already a clear difference between the boroughs. In the distribution plot below, all distribution were normalized. We see that the center of the distribution lies further to the left for the Bronx as it does for the other boroughs and as expected, Manhatten has the highest price/surface ratio

{% include graph/housing/distribution_ppsf.html %}   

When we look at how this metric evolved through time, we see that it is growing exponentially. This holds for all boroughs but especially Manhattan is getting extremely expensive to live in. Antoher remarkable thing to notice is that while Brooklyn was still one of the cheaper regions in 2003, it has climbed up the ladder and is now, after Manhattan, the most expensive borough to live in when considering this metric
{% include graph/housing/ppsf_evolution.html %}   

In the map below, this metric was evaluated per zip code. We see that it evolves quite naturally throughout the map and that each borough scores quite uniform. Only Queens seems to be divided in two where it is more expensive to live in northern pars compared to the southern part.
<iframe src="https://thibauldbraet.github.io/maps/NYC_PPSQ.html" width="100%" height="400px"></iframe>

### Price per Unit
{% include graph/housing/distribution_ppu.html %}   
{% include graph/housing/price_ppu_scatter.html %}   
{% include graph/housing/ppu_evolution.html %}   


## Square Feet per Unit
{% include graph/housing/sqpu_evolution.html %}

