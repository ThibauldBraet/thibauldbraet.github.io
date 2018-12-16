---
layout: page
title: Crime
subtitle: Crime in NYC
---

New York City is the largest city in the United States by over 4 million people; as such, it is natural that with
large population comes a large amount of crime. [Detailed crime data](https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i) exists for New York for years from 2006 to now, so we are able to gain some insight into the data.

### New York City's Crime in Numbers

Between 2006 and 2017, on average there were roughly 475,000 crimes committed per year in New York City. However, there is a general downward trend in these numbers:

![Crime per Year](../img/crime/crime_by_years.png)

In 2017, the most recent year for which we have complete data, the breakdown for crimes with valid information is as follows:

#### *458152* Total Crimes
#### *66303* Violations (the least severe category of crimes)
#### *253999* Misdemeanors (the second least severe category of crimes)
#### *137830* Felonies (the most severe category of crimes)

For some perspective on the most common types of specific crimes below, the ten most common specific crimes committed are displayed below.

![Most Common Crimes](../img/crime/category_counts.png)

The most frequently committed crime is petit larceny (a misdemeanor), which in New York is defined to be theft of 
objects with monetary value of $1000 or less. Only one violation is on the top ten: second degree harassment. This is a general crime that encompasses other specific types of infractions all under the general mantle to "alarm or annoy another person". 

Two types of assaults appear in the top ten. 3rd degree assault is a misdemeanor, and includes lesser injuries such as causing
black eyes or bruises. Felony assault is, as is implied by the category, more severe in scope. The remaining felonies in the
top ten involve "standard" crimes such as drug use, burglary, and robbery.

### Periodic Crime Patterns
Further trends reveal themselves when examining crime on a monthly, daily, and hourly basis.

![Crime per Month](../img/crime/crimes_per_month.png)

As can be seen, crime is at its highest in the warmer months of the year (April through October), and decreases in the winter.

![Crime per Hour with Categories](../img/crime/crimes_per_hour_cats.png)

Crime reaches its peak in the afternoon and evening. As time passes late into the night and early in the morning, 
the amount of crimes decreases to a low at around 5-6 AM. The proportions of the different categories of crimes remain
roughly the same across hours; however, there are relatively less violations late in the night. This alludes to a rough
correlation between the hour of the day and the severity of the crime; a crime committed late at night is more likely
to be violent or more severe in nature compared to one during the day.

# ![Crime per Hour](../img/crime/crimes_per_hour.png)

![Crime per Weekday/Hour Combination](../img/crime/crime_per_hour_weekday.png)

Peak crime for the city occurs on weekdays in the afternoons. On weekdays, crime is much lower in the mornings compared to 
afternoons. However, it can be seen that these patterns shift over the weekends. While the amount of crime on weekends never
quite reaches the high peaks of weekdays, the daily peaks are reached later in the night. The heightened frequency of crime
continues until 4 AM on Saturday and Sunday morning, coinciding with when the nightlife would generally be reaching its peak.


### Geographic Data and Maps

<iframe src="https://thibauldbraet.github.io/maps/crime/pop_map.html" width="100%" height="400px"></iframe>
<iframe src="https://thibauldbraet.github.io/maps/crime/crime_counts.html" width="100%" height="400px"></iframe>
<iframe src="https://thibauldbraet.github.io/maps/crime/crime_rates.html" width="100%" height="400px"></iframe>
