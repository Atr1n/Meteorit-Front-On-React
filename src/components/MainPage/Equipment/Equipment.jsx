import React, {useRef, useLayoutEffect} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Equipment = () => {
    
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    chart.data = [
        {
            "country": "Системы электроснабжения",
            "litres": 200
        }, 
        {
            "country": "Czech Republic",
            "litres": 200
        }, 
        {
            "country": "Ireland",
            "litres": 200
        }, 
        {
            "country": "Germany",
            "litres": 200
        }, 
        {
            "country": "Australia",
            "litres": 200
        }, 
        {
            "country": "Austria",
            "litres": 200
        }, 
        {
            "country": "UK",
            "litres": 200
        }, 
        {
            "country": "Belgium",
            "litres": 200
        }, 
        {
            "country": "The Netherlands",
            "litres": 200
        },
        {
            "country": "The Netherlands",
            "litres": 200
        },
    ];

    let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";

   
    chart.innerRadius = am4core.percent(50);

  
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    
    return (
        <section className="equipment">
            <div className="container">
                <div className="equipment-title">
                    <h2>мы предлагаем огромный выбор оборудования:</h2>
                </div>
                <div id="chartdiv" style={{ width: "100%", height: "500px" }}>
                    <div>asd</div>
                </div>
            </div>
        </section>
    )
}

export default Equipment