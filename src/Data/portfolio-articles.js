export const PortfolioArticles = [
    {
        title: "A tool to parse TransXChange bus timetables and import them into microsimulation models",
        articlePath: "bus-timetables",
        summaryText: "I developed a tool to import bus routes and timetables into the Aimsun microsimulation software package using data provided in the Traveline National Dataset. The bus timetable data is first converted from an XML format into CSV files which are then processed to generate bus routes and daily timetable information within Aimsun.",
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
        summaryText: "I developed a tool to automate the creation of walking and cycling isochrones using QGIS, OpenStreetMap data, and the GRASS vector network analysis toolkit. Previously, isochrones were created using Microsoft Publisher on the basis of manual measurements taken on Google Maps. By developing a GIS-based solution to this task I improved the quality and presentation of the output maps and significantly decreased the time taken to produce them.",
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
];