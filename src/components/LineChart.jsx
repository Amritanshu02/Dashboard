import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Chart as Chartjs } from "chart.js/auto";

const LineChart = () => {
    const [dataLine, setDataLine] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(res => {

                const responseData = res.data.data;
                if (Array.isArray(responseData) && responseData.length > 0) {
                    const labels = responseData.map(item => item.Year);
                    const populations = responseData.map(item => item.Population);
                    setDataLine({
                        labels: labels.reverse(),
                        datasets: [{
                            label: 'United States',
                            data: populations.reverse(),
                        }]
                    });

                } else {
                    console.error("No data found in API response.");
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <Line data={dataLine} />
    );
};

export default LineChart;