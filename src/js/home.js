import React, { Component } from 'react'
import { Link } from 'react-router';
import Paper from 'material-ui/lib/paper';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

export default class Home extends Component {
  render(){
    return (
      <div className='home'>
        <Paper zDepth={4}>
          <h1>GitHub Users</h1>
            <List>
              <ListItem className='list-item'>
                <Link to={'/jisaacks/orgs'}>jisaacks</Link>
              </ListItem>
              <ListItem className='list-item'>
                <Link to={'/wycats/orgs'}>wycats</Link>
              </ListItem>
              <ListItem className='list-item'>
                <Link to={'/sindresorhus/orgs'}>sindresorhus</Link>
              </ListItem>
              <ListItem className='list-item'>
                <Link to={'/addyosmani/orgs'}>addyosmani</Link>
              </ListItem>
              <ListItem className='list-item'>
                <Link to={'/dhh/orgs'}>dhh</Link>
              </ListItem>
            </List>
        </Paper>
      </div>
    )
  }
}
