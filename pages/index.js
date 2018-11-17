import React, { Component } from "react";
import factoryInstance from "./../contracts/factory";
import { Card, Button, Grid } from "semantic-ui-react";
import Layout from "../components/Layouts";

class CampaignIndex extends Component {
  async componentDidMount() {
    // this function is to load the data
    // const campaigns = await factoryInstance.methods
    //   .getDeployedContracts()
    //   .call();
    // console.log(campaigns);
  }

  static async getInitialProps() {
    // this method is alternative to `componentDidMount` inside
    // the next nextjs server. So use it to fetch the data.
    // Hence we can use serverside rendering.
    // this function will be called without rendering this component
    const campaigns = await factoryInstance.methods
      .getDeployedContracts()
      .call();
    return { campaigns };
  }

  renderCampaignsList() {
    const campaignsList = this.props.campaigns.map(address => {
      return {
        header: address,
        description: "this is test",
        link: <a>visit campaign</a>,
        fluid: true
      };
    });
    return <Card.Group items={campaignsList} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
          />
          <h3>Open Campaigns</h3>
          <Grid columns="equal">
            <Grid.Column width={12}>
              <Grid.Row stretched>
                <Grid.Column>{this.renderCampaignsList()}</Grid.Column>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                labelPosition="right"
                primary
              />
            </Grid.Column>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
