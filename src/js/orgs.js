import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { ajax } from 'jquery';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import Paper from 'material-ui/lib/paper'

export default class Orgs extends Component {
  constructor(...args){
    super(...args);
    this.state = {
      orgs: []
    }
  }
  makeListItem(org){
    return (
      <div key={org.id}>
        <ListItem
          primaryText={org.login}
          leftAvatar={<Avatar src ={org.avatar_url}/>}
          rightIcon={<ActionGrade/>}>
        </ListItem>
      <Divider/>
      </div>
    )
  }
  componentWillMount(){
    let { user_name } = this.props.params
    ajax(`https://api.github.com/users/${user_name}/orgs`).then( orgs=>{
      this.setState({ orgs })
    })
  }
  render(){
    let { orgs } = this.state;
    return (
      <Paper zDepth={4}>
          <List subheader='Organizations'>
            {orgs.map(::this.makeListItem)}
          </List>
          <button onClick={()=> hashHistory.push('/')}>Back</button>
      </Paper>
    )
  }
}
