import React, {Component} from 'react';
import {Table, Segment, Dimmer, Loader} from 'semantic-ui-react';

class DataTable extends Component {
    constructor(props){
        super(props)
        this.state={
            data: this.props.filteredData,
            filteredData: null
        }
    }

    componentDidMount(){
        const {data} = this.state
        let _arr = []
        data.map(item => {
            return(item.map(i => {
                return _arr.push(i)
            }))
        })
        this.setState({filteredData: _arr})
    }
    
    render(){
        const {filteredData} = this.state

        let _row = filteredData ? filteredData.map(item => {
            console.log(item)
            return(
                <>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{item.tc}</Table.Cell>
                        <Table.Cell>{item.adSoyad}</Table.Cell>
                        <Table.Cell>{item.sonuç ? item.sonuç: "Test Sonucu daha açıklanmamıştır."}</Table.Cell>
                        <Table.Cell>{item.İşlemTarihi}</Table.Cell>
                    </Table.Row>
                </Table.Body>
                {   
                        item.sonuç === "POZİTİF" ?
                        <Table.Body  style={{color:'red'}}>
                            <Table.Row style={{width:'100%'}}>
                                <Table.Cell colSpan='4 '>
                                    Değerli Çalışma Arkadaşımız,<br/>
                                    Öncelikle geçmiş olsun dileklerimizi ileterek, kısa sürede iyileşerek aramıza dönmenizi dileriz.
                                    İyileşme döneminde yapılması gerekenleri şu şekilde paylaşmak isteriz.
                                    <ol>
                                        <li>Yöneticinize bilgi vererek {item.İşlemTarihi}  tarihinden itibaren 14 gün boyunca evde kalınız ve iş yerine gelmeyiniz.</li>
                                        <li>Aile hekiminiz ile iletişime geçip, T.C. Sağlık Bakanlığı tarafından süreç  takibini yapan filyasyon ekibinin sizinle iletişime geçmesini bekleyiniz</li>
                                        <li>Filyasyon ekibi ve/veya aile hekiminiz tarafından belirlenen süre boyunca evde karantinada kalınız ve her ne şartla olursa olsun evden çıkmayınız</li>
                                        <li>Filyason ekibine işyeriniz için temaslı bildirimi yapmayınız</li>
                                        <li>Karantina süreniz sonlansa bile İşyeri Hekimimiz size işe başlayabileceğiniz onayını iletmeden iş yerine gelmeyiniz, evde kalınız.</li>
                                    </ol> Bu süreçte size her türlü konuda destek olacağımızı iletir, sağlıklı günler dileriz.<br/>
                                    Sevgi ve Saygılarımızla,<br/>
                                    Sağlık Emniyet Ve Çevre Müdürlüğü
                            </Table.Cell>
                            </Table.Row>
                        </Table.Body> : null
                    }
                </>
            )
        }) :null

        return(<>{filteredData ? 
            <>
            <h2 style={{padding:'10px',textAlign:'center'}}>PCR Test Sonuçları</h2>
            <Table celled structured>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>TC</Table.HeaderCell>
                        <Table.HeaderCell>Ad Soyad</Table.HeaderCell>
                        <Table.HeaderCell>Sonuç</Table.HeaderCell>
                        <Table.HeaderCell>Test Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {_row}
            </Table>
            </>
            : 
            <Segment>
              <Dimmer active>
                <Loader>Lütfen Bekleyin</Loader>
              </Dimmer>
            </Segment>}</>)
    }
}

export {DataTable}