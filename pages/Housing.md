---
layout: page
title: Housing
subtitle: Housing in NYC
---

When looking for housing, people want to spend as little money as possible, have a large area to live on and, if it possible, have a view of Central Park. Achieving all of these at once is, of course, difficult. This webpage gives an overview of the most important metrics to consider when looking for a house in NYC and how each region of NYC scores on this metric. When looking for a house, people care most about the quality price ratio. This is dependent on the living surface area and the price you have to pay for the property. The neighbourhood to live in is important as well but this is measured by other metrics like education and crime rates, described in the other webpages.

### Price per Gross Square Feet
Let us first have a look at how the price is correlated with the area of the residence. We had a looked per zip code at the total area of the sales in the past 12 months and the total sales price. When looking at this metric per borough, we see that there is already a clear difference between the boroughs. In the distribution plot below, all distributions were normalized. We see that the center of the distribution lies further to the left for the Bronx in comparison with the other boroughs and as expected, Manhattan has the highest price/surface ratio.

{% include graph/housing/distribution_ppsf.html %}   

When we look at how this metric has evolved over time, we see that it is growing exponentially. This statement holds for all the boroughs, but Manhattan, in particular, is rapidly becoming extremely expensive to live in. Antoher remarkable thing to notice is that while Brooklyn was still one of the cheaper regions in 2003, it has climbed up the ladder and is now, after Manhattan, the most expensive borough to live in when considering this metric
{% include graph/housing/ppsf_evolution.html %}   

In the map below, this metric was evaluated per zip code. We see that it evolves quite naturally throughout the map and that scores are quite even within each borough. Only Queens seems to be divided into two where it is more expensive to live in northern part compared to the southern part.
<iframe src="https://thibauldbraet.github.io/maps/housing/NYC_PPSF.html" width="100%" height="400px"></iframe>

### Price per Unit
The price per square feet does not say everything about how afforable it is to live somewhere. One can imagine that the bigger the house you buy the more favorable the price/area ratio will be. Maybe you just have a limited total budget. Then you don't care if you have to pay e.g. 400\$ per square feet if you have to buy a 10 million dollar mansion for that.   

When we look at the distribution of the price per living unit, we do see kind of the same distribution as when looking at the price per area. Only the houses in Manhattan seem to have a very broad distribution with some enormously expensive homes, as expected. If you really want to live in Manhattan, you can also find some places as affordable as a place in the Bronx. This will probably be at the expense of a smaller area to live on. We will look into that further here.
{% include graph/housing/distribution_ppu.html %}   

The evolution of the prices per unit show again a similar behaviour. The housing prices in Manhattan are exploding as crazy while the other ones show a milder but still exponentially growing behaviour. Again there can be noticed that the prices per unit in Brooklyn have been growing very fast, making it one of the most expensive boroughs to live in, in contrary to the situation of 2003. People having bought a house in Brooklyn in the early 2000's probably have made a great decision.
{% include graph/housing/ppu_evolution.html %}   

When we look at the distribution per zip code, we see again a pretty similar behaviour to the one as when evaluating the price per area. In this map however, it seems even more uniform throughout the borought but again with Queens being divided in a northern and souther part. When we look at Manhatten, we see that the zip codes neighbouring the Bronx are actually quite cheap to live. These units are likely the units mentioned earlier in the distribution graphs. Thus, it seems that it will be more difficult than expected to find an affordable place in Manhattan as you will be effectively living in the Bronx anyways.
<iframe src="https://thibauldbraet.github.io/maps/housing/NYC_PPU.html" width="100%" height="400px"></iframe>


## Square Feet per Unit
Finally, let's see how big the units that most people live in are.

Most people seem to live in a house/appartment of around 1000 square feet (~ 92m²). What's remarkable here is that Manhatten is the borough with the leftmost center of distribution. Apparantly the people in Manhattan are thus living in the smallest houses. However, the distribution is also the broadest for Manhattan with some very large houses as well. Taking into account the previous graphs, we might conclude that the gap between poor and rich is also the biggest in Manhattan. It seems that you have people who can afford to pay a lot of money to live in a large house while others are able to find a cheaper place at the cost of a smaller living area. The other boroughs seem to be similar to each other.
{% include graph/housing/distribution_fpu.html %} 

The living surface is not really evolving over time. If any trend could be recognized at all, it would be a slightly downwards trend but this is very minimal. This graph shows however that Manhattan on average indeed has the smallest houses but remarkably is how big the houses in Staten Island are. On the previous analysis they also score pretty good which thus means that you can there find a pretty large place for a reasonable price.  
{% include graph/housing/sfpu_evolution.html %}

Staten Island has indeed the largest houses, without any zip codes underperforming. Remarkably, though, Queens now seems to be subdivided into a western and eastern part. When looking at the map overall, there can be concluded that the further away from Manhattan, which is considered the center of New York, the larger the houses in general are
<iframe src="https://thibauldbraet.github.io/maps/housing/NYC_FPU.html" width="100%" height="400px"></iframe>

