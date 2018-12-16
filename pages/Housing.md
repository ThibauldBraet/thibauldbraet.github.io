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
<iframe src="https://thibauldbraet.github.io/_includes/maps/NYC_PPSQ.html" width="100%" height="400px"></iframe>

### Price per Unit
Price per square feet doesn't say everything about how afforable it is to live somewhere. One can imagine that the bigger the house you buy the more favorable the price/area ratio will be. Maybe you just have a limited total budget. Then you don't care if you have to pay for e.g. 400\\$ per square feet if you have to buy a 10 million dollar mansion for that.   

When we look at the distribution of the price per living unit, we do see kind of the same distribution as when looking at the price per area. Only the houses in Manhattan seem to have a very broad distribution with thus some enormously expensive homes, as expected but if you really want to live in Manhattan, you can also find some places as affordable as a place in the Bronx. This will probably be at the expense of a smaller area to live on, we will look into that further on this page.
{% include graph/housing/distribution_ppu.html %}   

The evolution of the prices per unit show again a similar behaviour. The housing prices in Manhattan are exploding as crazy while the other one show a milder but still exponentially growing behaviour. Again there can be noticed that the prices per unit in Brooklyn have been growing very fast, making it one of the most expensive boroughs to live in, in contrary to the situation of 2003. People having bought a house in Brooklyn in the early 2000's probably have made a great decision.
{% include graph/housing/ppu_evolution.html %}   

When we look at the distribution per zip code. We see again a pretty similar behaviour to the one as when evaluating the price per area. In this map however, it seems even more uniform throughout the borought but again with Queens being divided in a northern and souther part. When we look at Manhatten, we see that the zip codes neighbouring the Bronx borough is acutally quite cheap to live, these units will probably be the units mentioned earlier in the distribution graphs. After all it might thus be more difficult than expected to find an affordable living unit in Manhattan since you will then basically almost be living in the Bronx.
<iframe src="https://thibauldbraet.github.io/_includes/maps/NYC_PPU.html" width="100%" height="400px"></iframe>


## Square Feet per Unit
Finally let's see what the size of the units is in which people live.
{% include graph/housing/distribution_fpu.html %} 

{% include graph/housing/sfpu_evolution.html %}

<iframe src="https://thibauldbraet.github.io/_includes/maps/NYC_FPU.html" width="100%" height="400px"></iframe>

