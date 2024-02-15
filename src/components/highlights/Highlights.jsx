import React from 'react';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import MarketSnapshotChart from './MarketSnapshotChart';

const Highlights = () => {
  return (
    <React.Fragment>
      <Typography variant="h4">Market Snapshot: Kajiado County Prices (Feb 7th - Feb 14th, 2024)</Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">Key Points:</Typography>
          <Typography>Downward trends: Maize (-27.9%), Beans (-16.8%), Irish Potato (-68.4%), Tilapia (-57.1%)</Typography>
          <Typography>Stable prices: Meat Beef, Kales/Sukuma Wiki</Typography>
          <Typography>Volatility: All except Beef & Kales</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6">Actionable Insights:</Typography>
          <Typography>Consider: Potential opportunities in Beef & Kales due to stability.</Typography>
          <Typography>Monitor: Volatile items (Maize, Beans, etc.) for potential price swings.</Typography>
          <Typography>Research: Underlying factors driving price movements (supply, demand, etc.)</Typography>
        </CardContent>
      </Card>

      {/* Replace this with your actual data visualization component */}
      <Card>
        <MarketSnapshotChart />
      </Card>

      {/* the visualize data for the whole sale price  */}
      

      <Button variant="contained" color="primary">Download Detailed Report</Button>
      <Button variant="contained" color="secondary">Sign Up for Price Alerts</Button>
    </React.Fragment>
  );
}

export default Highlights;