import { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography, useTheme, Card, CardContent } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import ProgressCircle from "../../components/ProgressCircle";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import CurrencyPoundOutlinedIcon from '@mui/icons-material/CurrencyPoundOutlined';
import axios from "axios";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [bitcoinData, setBitcoinData] = useState(null);

    useEffect(() => {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => {
                if (res.data) {
                    setBitcoinData(res.data);
                }
                else { console.error("Invalid API response"); }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Hello, Brooklyn Simmons" subtitle="Welcome to Spot trading!" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: "green",
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        Start Trading
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >

                <Box
                    gridColumn="span 7"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Population Graph
                            </Typography>
                        </Box>
                    </Box>
                    <Box height="250px"
                        m="-10px 0 20px 30px"
                        display="flex "
                        alignItems="center">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>

                <Box
                    gridColumn="span 5"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600">
                        Campaign
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                display="flex"
                justifyContent="space-between"
                marginTop="20px"
                flexWrap="wrap"
            >
                {/* ROW 1 */}
                <Card sx={{ minWidth: 220, minHeight: 180, backgroundColor: colors.primary[400] }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <CurrencyBitcoinIcon
                                sx={{ color: "rgba(255, 255, 59, 0.824)", fontSize: "26px" }}
                            />
                        </Typography>
                        <Typography variant="h4" component="div" sx={{ mb: 1.2 }}>
                            {bitcoinData ? bitcoinData.chartName : "heading"}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            {bitcoinData ? `${bitcoinData.bpi.USD.code} ${bitcoinData.bpi.USD.rate}` : ''}
                            <br />
                            {bitcoinData ? `${bitcoinData.bpi.EUR.code} ${bitcoinData.bpi.EUR.rate}` : ''}
                        </Typography>
                        <Button sx={{ backgroundColor: "rgba(255, 255, 59, 0.824)", fontWeight: "600" }} variant="contained">Contained</Button>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 220, minHeight: 180, backgroundColor: colors.primary[400] }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <CurrencyExchangeIcon
                                sx={{ color: "green", fontSize: "26px" }}
                            />
                        </Typography>
                        <Typography variant="h4" component="div" sx={{ mb: 1.2 }}>
                            {bitcoinData ? bitcoinData.chartName : "heading"}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            {bitcoinData ? `${bitcoinData.bpi.GBP.code} ${bitcoinData.bpi.GBP.rate}` : ''}
                            <br />
                            {bitcoinData ? `${bitcoinData.bpi.USD.code} ${bitcoinData.bpi.USD.rate}` : ''}
                        </Typography>
                        <Button sx={{ backgroundColor: "green", fontWeight: "600" }} variant="contained">Contained</Button>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 220, minHeight: 180, backgroundColor: colors.primary[400] }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <EuroRoundedIcon
                                sx={{ color: "royalblue", fontSize: "26px" }}
                            />
                        </Typography>
                        <Typography variant="h4" component="div" sx={{ mb: 1.2 }}>
                            {bitcoinData ? bitcoinData.chartName : "heading"}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            {bitcoinData ? `${bitcoinData.bpi.EUR.code} ${bitcoinData.bpi.EUR.rate}` : ''}
                            <br />
                            {bitcoinData ? `${bitcoinData.bpi.GBP.code} ${bitcoinData.bpi.GBP.rate}` : ''}
                        </Typography>
                        <Button sx={{ backgroundColor: "royalblue", fontWeight: "600" }} variant="contained">Contained</Button>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 220, minHeight: 180, backgroundColor: colors.primary[400] }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <CurrencyPoundOutlinedIcon
                                sx={{ color: "greenyellow", fontSize: "26px" }}
                            />
                        </Typography>
                        <Typography variant="h4" component="div" sx={{ mb: 1.2 }}>
                            {bitcoinData ? bitcoinData.chartName : "heading"}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            {bitcoinData ? `${bitcoinData.bpi.USD.code} ${bitcoinData.bpi.USD.rate}` : ''}
                            <br />
                            {bitcoinData ? `${bitcoinData.bpi.EUR.code} ${bitcoinData.bpi.EUR.rate}` : ''}
                        </Typography>
                        <Button sx={{ backgroundColor: "greenyellow", fontWeight: "600" }} variant="contained">Contained</Button>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Dashboard;