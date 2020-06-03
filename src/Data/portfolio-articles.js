export const PortfolioArticles = [
    {
        title: "A tool to parse TransXChange bus timetables and import them into microsimulation models",
        articlePath: "bus-timetables",
        summaryText: "I developed a tool to import bus routes and timetables into the Aimsun microsimulation software package using data provided in the Traveline National Dataset.",
        thumbnail: "bus-timetables-thumb",
        articleText: [
            "I developed a tool to import bus routes and timetables into the Aimsun microsimulation software package using data provided in the Traveline National Dataset. The bus timetable data is first converted from an XML format into CSV files which are then processed to generate bus routes and daily timetable information within Aimsun.",
            "For large models, there can often be dozens of bus routes and adding them manually can be a difficult and time-consuming process. By developing an automated solution utilising externally maintained data, I greatly reduced the time taken and improved the accuracy of the final results.",
            "The code for the program is available on my GitHub page and can be found <span class=\"inline-link bold\"><a href='//github.com/JoelPerren/Fore-LoadBusTimetablesIntoAimsun'>here</a></span>."
        ],
        skills: [
            "Working with external XML standards.",
            "Detailed understanding of the Aimsun Python API.",
            "Good knoweldge of the Python language."
        ],
        images: [
            "bus-timetables-model",
            "bus-timetables-routes"
        ]
    },
    {
        title: "Walking and Cycling Isochrone Generation Tool",
        articlePath: "isochrone-generator",
        summaryText: "I developed a tool to automate the creation of walking and cycling isochrones using QGIS, OpenStreetMap data, and the GRASS vector network analysis toolkit.",
        thumbnail: "isochrone-thumb",
        articleText: [
            "I developed a tool to automate the creation of walking and cycling isochrones using QGIS, OpenStreetMap data, and the GRASS vector network analysis toolkit. Previously, isochrones were created using Microsoft Publisher on the basis of manual measurements taken on Google Maps. By developing a GIS-based solution to this task I improved the quality and presentation of the output maps and significantly decreased the time taken to produce them.",
            "To create the tool, I first had to extract a network of walkable and cyclable roads from OpenStreetMap in a multi-stage process. First, I downloaded all of the data for Great Britain and then processed it to extract all of the walkable roads using osm2po, a Java program which outputs a SQL file for PostGIS. I then converted the data into a shapefile.",
            "Using the QGIS Graphical Model builder, I then automated a workflow to generate isochrones from a given origin point. The GRASS vector network analysis toolkit is utilised to generate isolines which are then further processed to produce aesthetically pleasing polygon isochrones.",
            "This GIS-based method is significantly faster than the previous manual method and also produces more pleasant looking figures. QGIS is now used throughout the company for all figure creation tasks."
        ],
        skills: [
            "Advanced QGIS knowledge, including network analysis.",
            "Extracting and processing data from OpenStreetMap.",
            "Initiative to identify a problem and develop a solution."
        ],
        images: [
            "isochrone-workflow",
            "isochrone-figure"
        ]
    },
    {
        title: "Vehicular Trip Distribution Tool",
        articlePath: "trip-distribution",
        summaryText: "I developed a JavaScript program to estimate the distribution of vehicle trips from proposed development sites using 2011 census data and the Google Routes API.",
        thumbnail: "tripdist-thumb",
        articleText: [
            "A common task I encountered at Fore Consulting was estimating the distribution of vehicle trips from development sites. When I joined the company this processes was undertaken manually and involved running several hundred manual direction queries in Google Maps to determine the likely routes people might take between the development site and their places of work or vice versa.",
            "I developed a program to automate this process in the form of a locally hosted website. Users input the location of the development site by clicking on the map and input all the required destinations via an input box which accepts all the common census areas (LSOAs, MSOAs, and census merged local authority districts). When the program is run it sends asynchronous direction requests to Google Maps via an API for each origin-destination pair and utilises an exponential back off to avoid breaching Google’s Terms of Service.",
            "When all the direction requests are completed, the program outputs a GeoJSON file which can be loaded into a desktop GIS program or a CSV containing the travel time and distance between each OD pair which is used to create gravity models.",
            "In total this program has reduced the time taken to estimate the distribution of trips from a development site from several hours – sometimes over a day for large sites – to 10 minutes. It is also significantly more accurate. The program is now used across the company for all tasks requiring the distribution of trips.",
            "The code for the program is available on my GitHub page and can be found <span class=\"inline-link bold\"><a href='//github.com/JoelPerren/Fore-TripDistribution'>here</a></span>."
        ],
        skills: [
            "HTML, CSS, and JavaScript.",
            "Handling of asyncronous API calls.",
            "Initiative to identify a problem and develop a solution."
        ],
        images: [
            "trip-distribution"
        ]
    },
    {
        title: "A 'Ruthless Gerrymander' or 'Redressing Imbalance'? The Electoral Implications of the 2018 Boundary Review",
        articlePath: "boundary-review",
        summaryText: "For my Masters Dissertation, I analysed the likely impact that the initial proposals of the 2018 Westminster parliamentary boundary review would have had upon the results of the 2015 and 2017 general elections as well as the level of electoral bias present in each election.",
        thumbnail: "boundary-review-thumb",
        articleText: [
            "For my Masters Dissertation, I analysed the likely impact that the initial proposals of the 2018 Westminster parliamentary boundary review would have had upon the results of the 2015 and 2017 general elections as well as the level of electoral bias present in each election. Ultimately, it sought to examine the boundary review would disproportionately benefit one party over another.",
            "This project involved two stages: Firstly, the results of the 2015 and 2017 elections were interpolated from the existing constituencies into the constituencies proposed by the 2018 review via a process of ‘dasymetric binary interpolation’. Secondly, the level and composition of electoral bias was calculated for both the actual and hypothetical elections in order to determine how this bias would be affected by the proposed constituencies.",
            "It was found that in both the 2015 and 2017 elections the initial constituencies proposed by the 2018 review would have improved the electoral prospects of the Conservative party at the expense of Labour and the Liberal Democrats. However, it was also found that the proposed constituencies would have significantly reduced the amount of electoral bias resulting from differences in electorate sizes between constituencies. It was concluded that much of the apparent benefit which the boundary review provided to the Conservatives resulted from reducing existing electoral bias which largely favours the Labour party currently."
        ],
        skills: [
            "Advanced GIS and statistical analysis.",
            "Complex dasymetric binary interpolation.",
            "Excellent organisation and written communication."
        ],
        images: [
            "boundary-review-2015",
            "boundary-review-2017"
        ]
    },
    {
        title: "Visualising data with Leaflet",
        articlePath: "leaflet",
        summaryText: "I developed a Leaflet map to explore some of the different methods of data visulisation available on an online map.",
        thumbnail: "leaflet-thumb",
        articleText: [
            "This project explored the different methods of data visualisation which can be utilised to present a large data set in an online map. Using the Leaflet JavaScript library, it allows for the visualisation of 1,675 recorded cases of criminal damage or arson which occurred in Northumbria in February, 2017.",
            "The data can be viewed as raw points, clusters of points, as a choropleth map, or as a heatmap. Accompanying each method of data visualisation is a brief commentary discussing the utility and limitation of each method.",
            "This project can be viewed <span class=\"inline-link bold\"><a href='//joelperren.github.io/dataviz/index.html'>here</a></span>."
        ],
        skills: [
            "Leaflet API.",
            "Data visualisation techniques."
        ],
        images: [
            "leaflet-pointmap",
            "leaflet-clustered",
            "leaflet-choropleth",
            "leaflet-heat"
        ]
    },
    {
        title: "Mapping the Blue Plaques of Leeds",
        articlePath: "blue-plaques",
        summaryText: "I developed a web map of the Blue Plaques in Leeds. As well as showing the locations of the plaques, the map also displays additional information for each plaque in an info window including the plaques message, sponsor, and date of placement.",
        thumbnail: "blue-plaques-thumb",
        articleText: [
            "I created an online map showing the locations of Blue Plaques in Leeds with the Google Maps API. The data is stored in JSON format with British National Grid coordinates before being converted into the correct coordinate reference system and being plotted onto the map. The Marker Cluster plugin is utilised to cluster points together at small scales.",
            "As well as showing the locations of the plaques, the map also displays additional information for each plaque in an info window including the plaques message, sponsor, and date of placement.",
            "This project can be viewed <span class=\"inline-link bold\"><a href='//joelperren.github.io/blueplaques/Leeds_Blue_Plaques.html'>here</a></span>."
        ],
        skills: [
            "Google Maps API.",
        ],
        images: [
            "blue-plaques-overview",
            "blue-plaques-info"
        ]
    },
    {
        title: "Projection Peruser — a Java program to compare how map projections distort the world",
        articlePath: "projection-peruser",
        summaryText: "Projection Peruser is a Java program which utilises the GeoTools library in order to show the user how different map projections distort the world in different ways.",
        thumbnail: "projection-peruser-thumb",
        articleText: [
            "This project was the final project for the Advanced Java module during my master's degree. It is a program which allows the user to compare how different map projections distort the world in different ways. It works by re-projecting a shapefile to a number of different coordinate reference systems. It also includes a grid and a set of Tissot's Intricacies to better demonstrate the distortion.",
            "The program was coded in Java utilising the GeoTools library. In order to code the program I first had to independently learn GeoTools through its (less than ideal) documentation as GeoTools was not taught in the module.",
            "The program works by first loading two shapefiles which are projected in EPSG:4326: one shapefile is of the world's landmasses, the other is a set of Tissot's Intricacies which demonstrate map distortion. A grid is then drawn over the map extent. The user is then able to choose one of five projections and the map content is re-projected to the chosen projection.",
            "Additional information on each projection is also available to the user in the form of a query button. Finally, the re-projected shapefile of the world can also be exported for use in other projects.",
            "As part of this assessment, the code was uploaded to GitHub and can be found <span class=\"inline-link bold\"><a href='//github.com/JoelPerren/projection_peruser'>here</a></span>."
        ],
        skills: [
            "Self-directed learning and Java proficiency",
            "An understanding the GeoTools library",
            "An understanding of Coordinate Reference Systems and coordinate conversion"
        ],
        images: [
            "projection-peruser-plate-carree",
            "projection-peruser-mercator",
            "projection-peruser-peters",
            "projection-peruser-eckert-iv",
            "projection-peruser-mollweide"
        ]
    },
    {
        title: "Fallout Tracker — a Java program to simulate the fallout of particles from a bomb",
        articlePath: "fallout-tracker",
        summaryText: "Fallout Tracker was the final project for the introduction to Java module during my master's degree. It is a basic program to simulate the fallout of particles from a bomb within an abstract environment according to a set of user-defined probabilities.",
        thumbnail: "fallout-tracker-thumb",
        articleText: [
            "This project was the final project for the introduction to Java module during my master's degree. It is a basic program to simulate the fallout of particles from a hypothetical bomb within an abstract environment according to a set of user-defined probabilities.",
            "Firstly, a bomb location is chosen by the user by either loading a raster file containing the location of the bomb, or by clicking on the bomb location window to set a location. The constraints of the simulation can then be changed from their default settings if required at which point the simulation can be run. The program simulates the movement of the define number of particles according to the probabilities defined by the user. The final destination of each particle is then shown to the user."
        ],
        skills: [
            "",
            "",
            ""
        ],
        images: [
            "fallout-tracker"
        ]
    },
    {
        title: "Comparing land classification by the British Land Capability Assessment to a Multi-Criteria Evaluation",
        articlePath: "lca-mca-comparison",
        summaryText: "In this project, I compared the difference in results between two methods of land classification: the British land capability assessment (LCA), and a Multi-Criteria Evaluation (MCE).",
        thumbnail: "lca-thumb",
        articleText: [
            "In this project, I compared the difference in results between two methods of land-capability classification for agriculture: the British land capability assessment (LCA), and a multi-criteria evaluation (MCE).",
            "The LCA is based on known relationships between crop production and management and the physical factors of soil, topography, and climate. For this assessment, I was provided with separate raster layers containing information these factors and I then reclassified each layer into the requisite grade categories. The factor maps were combined into the final LCA output by maximum operator.",
            "I then developed a separate MCE to contrast against the LCA. I chose five factors for the MCE: soil limitations; slope; elevation; wetness; and road access.",
            "Weights for these factors were devised using the analytical hierarchy process which ranks each factor by its relative importance compared to the other factors in the study. The advantage of this process is that comparing each factor in turn allows for a simple series of decisions to be made and produces a more justifiable result when compared to the complex decision of comparing all the factors at once.",
            "Both outputs identify a geographical trend whereby the most arable land is located in the flat land to the north while suitability decreases towards the south of the study area, however the MCE output demonstrates more fine-detail — areas which received a single classification through the LCA methodology are often more differentiated in the MCE output."
        ],
        skills: [
            "",
            "",
            ""
        ],
        images: [
            "lca-final-lca",
            "lca-final-mce",
            "lca-mosaic-lca",
            "lca-mosaic-mce"
        ]
    },
    {
        title: "A comparison of spatial analytic techniques to identify burglary hotspots in Leeds",
        articlePath: "crime-mapping",
        summaryText: "In this project, I explored the ways in which crime mapping techniques can be used to highlight the geographies of burglary and considered which mapping techniques provide the most utility for identifying crime hotspots.",
        thumbnail: "crime-mapping-thumb",
        articleText: [
            "In this project, I explored the ways in which crime mapping techniques can be used to highlight the geographies of burglary and also considered which technique would likely provide the most accurate visualisation.",
            "This project involved implementing a number of different crime mapping techniques including Gi* statistics, kernel density estimation, and the Geographical Analysis Machine (GAM) and then compared their utility in the determination of crime hotspots to basic visualisation techniques.",
            "Compared to a point map and a choropleth map, all of the more advanced methods implemented were argued to have more utility in identifying burglary hotspots, although each had its drawbacks. Ultimately it was concluded that the GAM output was likely the most reliable in identifying crime hotspots due to its representation of crime as a surface and its use of statistical significance testing."
        ],
        skills: [
            "",
            "",
            ""
        ],
        images: [
            "crime-mapping-points",
            "crime-mapping-choropleth",
            "crime-mapping-density",
            "crime-mapping-gam",
            "crime-mapping-gstat"
        ]
    },
];