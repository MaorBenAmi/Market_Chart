import React, {Component} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import CandleStick from './CandleStick';

class ChartTabs extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeTab: 0,
      periodTime : ["MIN_1", "MIN_5", "HOUR_1", "WEEK_1"],
      titles:["1 minute", "5 minutes", "1 hour", "1 week"]
    };    
  }

  handleSelect(pSelectedTab) {
    this.setState({ 
      activeTab : pSelectedTab
     });
  }

  render() {
    return (
      <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect} id="tabsContainer">
        {this.state.periodTime.map((periodTime, index) => 
          <Tab eventKey={index} title={this.state.titles[index]} activeTab={index}>
            <CandleStick periodTime={periodTime} activeTab={index} />
          </Tab>
        )}
      </Tabs>
    );
  }
}

export default ChartTabs;