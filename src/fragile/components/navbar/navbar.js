import React, { Component } from 'react'
import { Container, Menu , Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class NavbarFragile extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu fixed='top' stackable inverted>
        <Container>
        <Menu.Item>
          <strong><Icon name='medapps' style={{marginRight: '0px'}}></Icon>Fragile</strong>
        </Menu.Item>

        <Menu.Item as={Link} to="/fragile"
          name='Anasayfa'
          active={activeItem === 'Anasayfa'}
          onClick={this.handleItemClick}
        >
          Anasayfa
        </Menu.Item>
        <Menu.Item as={Link} to="/fragile/settings"
          name='Ayarlar'
          active={activeItem === 'Ayarlar'}
          onClick={this.handleItemClick}
        >
          Ayarlar
        </Menu.Item>
        <Menu.Item as={Link} to="/do"
          name='Do'
          active={activeItem === 'Do'}
          onClick={this.handleItemClick}
        >
          Do'ya Dön
        </Menu.Item>
        </Container>
      </Menu>
    )
  }
}