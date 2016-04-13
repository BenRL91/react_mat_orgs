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
              <Link to={'/jisaacks/orgs'}>
                <ListItem className='list-item' rightAvatar={<i className='fa fa-user'/>}>
                  jisaacks
                </ListItem>
              </Link>
              <Link to={'/wycats/orgs'}>
                <ListItem className='list-item' rightAvatar={<i className='fa fa-user'/>}>
                  wycats
                </ListItem>
              </Link>
              <Link to={'/sindresorhus/orgs'}>
                <ListItem className='list-item' rightAvatar={<i className='fa fa-user'/>}>
                  sindresorhus
                </ListItem>
              </Link>
              <Link to={'/addyosmani/orgs'}>
                <ListItem className='list-item' rightAvatar={<i className='fa fa-user'/>}>
                  addyosmani
                </ListItem>
              </Link>
              <Link to={'/dhh/orgs'}>
                <ListItem className='list-item' rightAvatar={<i className='fa fa-user'/>}>
                  dhh
                </ListItem>
              </Link>
            </List>
        </Paper>
      </div>
    )
  }
}
