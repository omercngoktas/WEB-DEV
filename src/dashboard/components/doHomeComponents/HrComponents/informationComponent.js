import React, { Component } from 'react';
import {Segment, Card, Icon , Button , Container,Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class HrinfComponent extends Component {
    constructor(props){
        super(props)
        this.state={
          data: []
        }
      }
      render(){
        
        return(
            
        <Segment >
            <Container >
                <Grid doubling columns={5}  style={{paddingLeft : '9rem'}} stackable> 
                    <Grid.Column >
                        <Card >
                            <Card.Content>
                                <Button stackable as={Link} to="/do/EmployeeList/EmployeeList">
                                <Card.Header textAlign="center" >
                                        <Icon name='hacker news square' color='teal' size='big'/>
                                </Card.Header>
                                <hr></hr>
                                <Card.Header textAlign="center">
                                        Yeni Başvuru Listesi
                                </Card.Header>
                                </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card >
                            <Card.Content>
                            <Button as={Link} to="/do/EmployeeList/Degerlendirme">
                                <Card.Header textAlign="center">
                                        <Icon name='thumbs down outline' color='teal' size='big' loading/>
                                </Card.Header>
                                <hr></hr>
                                <Card.Header textAlign="center" >
                                        Değerlendirme Aşamasında
                                </Card.Header>
                                </Button>
                                </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card >
                        <Card.Content>
                        <Button as={Link} to="/do/EmployeeList/Gorusulecek">
                            <Card.Header textAlign="center" >
                                <Icon.Group size='Huge'>
                                    <Icon loading size='big' name='circle notch' color='teal' />
                                    <Icon name='check' color='teal'  />
                                </Icon.Group>
                            </Card.Header>
                            <hr></hr>
                            <Card.Header textAlign="center">
                                    İşe Alınacak Kişiler
                            </Card.Header>
                            </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card >         
                            <Card.Content>
                            <Button as={Link} to="/do/EmployeeList/Alinacaklar">
                            <Card.Header textAlign="center">
                                        <Icon name='conversation' color='teal' size='big'/>
                                </Card.Header>
                                <hr></hr>
                                <Card.Header textAlign="center" >
                                        Görüşülecek Aşamasında
                                </Card.Header>
                                </Button>
                                </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card>
                            <Card.Content>
                            <Button as={Link} to="/do/EmployeeList/Red">
                                <Card.Header textAlign="center" >
                                        <Icon name='thumbs down outline' color='teal' size='big'/>
                                </Card.Header>
                                <hr></hr>
                                <Card.Header >
                                        Uygun Bulunmayanlar
                                </Card.Header>
                            </Button>
                                </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </Container>
        </Segment>
  
        )
    }
}

export default HrinfComponent