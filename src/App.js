import React, { Component } from 'react';
import {
  Home, About, Companies, ProductServices, Customers, Contact, Downloads,
  Login, NewsPage, NewsPageTR, Anasayfa, Hakkımızda, Sirketler, UrunlerHizmetler,
  Musteriler, Iletisim, Covid19DokumanEkle, Haberler, News, Certificates, Sertifikalar, HESKodFormu,
  Covid19Formu, Sustain, EnvironmentSocialGovernance, EmniyetSaglikGuvenlik, Surdurulebilirlik, BasvuruForm,
  SecPolitika, ESGPolicy, ClickShare, isSurekliligi, EnerjiPolitikasi, IklimDegisikligiTr, SorumluTadarikZincirPageTr,
  MusteriGizliligiPageTr, FECKpageTr, InsanHaklarıTr, BrochuresForFairFunc, isSurekliligiEng, EnerjiPolitikasiEng, IklimDegisikligiEng,
  SorumluTadarikZincirPageEng, MusteriGizliligiPageEng, FECKpageENG,InsanHaklarıEng, LatestNews , AquilaProjectSuggest, QualityPolicyWeb,QualityPolicyWebTr
} from './webpage/pages';

import {
  Home as DoHome, NotFound, UserManagement, CustomizePage, NewsEdit,
  CustomerDocument, UserSettings, MediaContent, AddNew, GetReport, CustomerManagement,
  ReportManagement, EditNew, EditNewTR, HesList, MPContactForm, ComplaintsList, HrEmployeeList, EmpList,
  HrEmployeeAssesment, HrEmployeeDiscuss, HrEmployeeHire, HrEmployeeRed, HrEmployeeAll, ApplicationPozitons,AquilaSuggestionsListPage
} from './dashboard/pages';



import { HomePage as FragileHome, SettingsPage } from './fragile/pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GoogleAnalytics } from './webpage/components/googleAnalytics';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './webpage/App.css';
import './dashboard/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adminisAuthenticated: false,
      customerisAuthenticated: false,
      personalisAuthenticated: false,
      isAuthenticated: false,
      HRJisAuthenticated: false,
      HRSisAuthenticated: false,
      KIUisAuthenticated: false,
    }
    GoogleAnalytics();
  }

  componentWillMount() {
    const user = {
      Email: localStorage.getItem('UserEmail'),
      Token: localStorage.getItem('UserToken'),
      Role: localStorage.getItem('Id')
    }
    if (user.Role) {
      if (user.Role.substring(0, 3) === 'Adm')
        this.setState({
          adminisAuthenticated: true
        })
      if (user.Role.substring(0, 3) === 'Mus')
        this.setState({
          customerisAuthenticated: true
        })
      if (user.Role.substring(0, 3) === 'Per')
        this.setState({
          personalisAuthenticated: true
        })
      if (user.Role.substring(0, 3) === 'HRJ')
        this.setState({
          HRJisAuthenticated: true
        })
      if (user.Role.substring(0, 3) === 'HRS')
        this.setState({
          HRSisAuthenticated: true
        })
      if (user.Role.substring(0, 3) === 'KIU') {
        this.setState({
          KIUisAuthenticated: true
        })
      }
      this.setState({
        isAuthenticated: true
      })

    }
  }

  render() {
    return (
      <Router>
        {/* EN Language */}
        <Route exact path='/' component={Home} />
        <Route exact path='/news' component={News} />
        <Route path='/about' component={About} />
        <Route path='/companies' component={Companies} />
        <Route path='/products-services' component={ProductServices} />
        <Route path='/customers' component={Customers} />
        <Route path='/contact' component={Contact} />
        <Route path='/downloads' component={Downloads} />
        <Route path='/brochures' component={BrochuresForFairFunc} />
        <Route path='/login' component={Login} />
        <Route path="/news/:id" children={<NewsPage />} />
        <Route path='/certificates' component={Certificates} />
        <Route exact path='/SustainabilityPolicy' component={Sustain} />
        <Route exact path='/CorporateGovernancePolicy' component={EnvironmentSocialGovernance} />
        <Route path='/HealthSafetyEnviromentSocialGovernancePolicy' component={ESGPolicy} />
        <Route path='/BusinessContinuityPolicy' component={isSurekliligiEng} />
        <Route path='/EnergyPolicy' component={EnerjiPolitikasiEng} />
        <Route path='/ClimateChangeStatementPolicy' component={IklimDegisikligiEng} />
        <Route path='/ResponsibleSupplyChainPolicy' component={SorumluTadarikZincirPageEng} />
        <Route path='/CustomerPrivacyPolicy' component={MusteriGizliligiPageEng} />
        <Route path='/EqualOpportunityDiversitInclusionPolicy' component={FECKpageENG} />
        <Route path='/HumanRightsPolicy' component={InsanHaklarıEng} />
        <Route path='/AquilarProjectSuggestions' component={AquilaProjectSuggest} />
        <Route path='/QualityPolicy' component={QualityPolicyWeb} />

        {/* TR Language */}
        <Route exact path='/tr' component={Anasayfa} />
        <Route exact path='/tr/haberler' component={Haberler} />
        <Route path='/tr/hakkimizda' component={Hakkımızda} />
        <Route path='/tr/sirketler' component={Sirketler} />
        <Route path='/tr/urunler-hizmetler' component={UrunlerHizmetler} />
        <Route path='/tr/musteriler' component={Musteriler} />
        <Route path='/tr/iletisim' component={Iletisim} />
        <Route path='/login' component={Login} />
        <Route path="/haberler/:id" children={<NewsPageTR />} />
        <Route path='/tr/sertifikalar' component={Sertifikalar} />
        <Route path='/hes-kodu-formu' component={HESKodFormu} />
        <Route path="/covid19-testler" component={Covid19Formu} />
        <Route path="/ekle/covid19-testleri" component={Covid19DokumanEkle} />
        <Route path='/tr/surdurulebilirlik' component={Surdurulebilirlik} />
        <Route path='/tr/cevre-saglik-kurumsal' component={EmniyetSaglikGuvenlik} />
        <Route path='/tr/sec-politikasi' component={SecPolitika} />
        <Route path='/tr/is-surekliligi-politikasi' component={isSurekliligi} />
        <Route path='/tr/enerji-politikasi' component={EnerjiPolitikasi} />
        <Route path='/tr/iklim-degisikligi-beyannamesi' component={IklimDegisikligiTr} />
        <Route path='/tr/sorumlu-tedarik-zinciri-politikası' component={SorumluTadarikZincirPageTr} />
        <Route path='/tr/musteri-gizliligi-politikası' component={MusteriGizliligiPageTr} />
        <Route path='/tr/fırsat-esitiligi-cesitlilik-kapsayıcılık' component={FECKpageTr} />
        <Route path='/tr/insan-hakları-politikası' component={InsanHaklarıTr} />
        <Route path='/tr/BasvuruFormu' component={BasvuruForm} />
        <Route path='/tr/kalite-politikası' component={QualityPolicyWebTr} />
        
        {/* Admin */}
        <Route path="/do" component={this.state.adminisAuthenticated || this.state.customerisAuthenticated || this.state.HRSisAuthenticated || this.state.HRJisAuthenticated || this.state.KIUisAuthenticated ? DoHome : NotFound} />
        <Route path="/do/user-management" component={this.state.adminisAuthenticated ? UserManagement : NotFound} />
        <Route path="/do/customer-management" component={this.state.adminisAuthenticated ? CustomerManagement : NotFound} />
        <Route path="/do/report-management" component={this.state.adminisAuthenticated ? ReportManagement : NotFound} />
        <Route path="/do/page-customization" component={this.state.adminisAuthenticated ? CustomizePage : NotFound} />
        <Route path="/do/media-content" component={this.state.adminisAuthenticated ? MediaContent : NotFound} />
        <Route path="/do/news" component={this.state.adminisAuthenticated || this.state.KIUisAuthenticated ? NewsEdit : NotFound} />
        <Route path="/do/add/new" component={this.state.adminisAuthenticated || this.state.KIUisAuthenticated ? AddNew : NotFound} />
        <Route exact path="/do/edit/new/:id" component={this.state.adminisAuthenticated || this.state.KIUisAuthenticated ? EditNew : NotFound} />
        <Route exact path="/do/edit/new/tr/:id" component={this.state.adminisAuthenticated || this.state.KIUisAuthenticated ? EditNewTR : NotFound} />
        <Route path="/do/get/report" component={this.state.adminisAuthenticated ? GetReport : NotFound} />
        <Route path="/do/hes-list" component={this.state.adminisAuthenticated ? HesList : NotFound} />
        <Route path="/do/contact-form-detail" component={this.state.adminisAuthenticated ? MPContactForm : NotFound} />
        <Route path="/do/complaint-list" component={this.state.adminisAuthenticated ? ComplaintsList : NotFound} />
        <Route path="/do/AquilaSuggestions-list" component={this.state.adminisAuthenticated ? AquilaSuggestionsListPage : NotFound} />

        {/* Admin/Fragile */}
        <Route path="/fragile" component={this.state.adminisAuthenticated ? FragileHome : NotFound} />
        <Route path="/fragile/settings" component={this.state.adminisAuthenticated ? SettingsPage : NotFound} />

        {/* Müşteri */}
        <Route path="/do/customer-document" component={this.state.customerisAuthenticated ? CustomerDocument : NotFound} />
        <Route path="/do/user-settings" component={this.state.customerisAuthenticated || this.state.adminisAuthenticated || this.state.HRSisAuthenticated || this.state.KIUisAuthenticated ? UserSettings : NotFound} />
        {/* Admin/River */}
        <Route exact path="/do/EmployeeList/EmployeeList" component={this.state.HRSisAuthenticated ? HrEmployeeList : NotFound} />
        <Route exact path="/do/HrList/:id" component={this.state.HRSisAuthenticated ? EmpList : NotFound} />
        <Route exact path="/do/EmployeeList/Degerlendirme" component={this.state.HRSisAuthenticated ? HrEmployeeAssesment : NotFound} />
        <Route exact path="/do/EmployeeList/Gorusulecek" component={this.state.HRSisAuthenticated ? HrEmployeeDiscuss : NotFound} />
        <Route exact path="/do/EmployeeList/Alinacaklar" component={this.state.HRSisAuthenticated ? HrEmployeeHire : NotFound} />
        <Route exact path="/do/EmployeeList/Red" component={this.state.HRSisAuthenticated ? HrEmployeeRed : NotFound} />
        <Route exact path="/do/EmployeeList/TumListe" component={this.state.HRSisAuthenticated ? HrEmployeeAll : NotFound} />
        <Route exact path="/do/EmployeeList/BasvuruPozisyonuEkle" component={this.state.HRSisAuthenticated ? ApplicationPozitons : NotFound} />

        {/*QR */}
        <Route path="/qr/clickshare" component={ClickShare} />
        {/* Test Page */}
        <Route path="/latestNews" component={LatestNews} />
      </Router>
    )
  }
}

export default App;