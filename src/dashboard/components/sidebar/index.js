import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

const SideBar = () => {
  const [visible] = useState({ name: 'visible' })
  const userRole = localStorage.getItem('Id').substring(0, 1)
  return (
    <Sidebar
      style={{ height: '100vh' }}
      as={Menu}
      animation='push'
      icon='labeled'
      inverted
      onHide={() => true}
      vertical
      visible={visible}
      width='thin'
    >
      {console.log(userRole)}
      {userRole === 'H' || userRole ==='K' ?
        <Menu.Item as={Link} to="/do" >
          <Icon name='rendact' />
          River
        </Menu.Item>
        : <Menu.Item as={Link} to="/do" >
          <Icon name='digital ocean' />
          Do
        </Menu.Item>
      }

      {userRole === 'A' ?
        <>
          <Menu.Item as={Link} to="/do/user-management" >
            <Icon name='user outline' />
            Kullanıcı Yönetimi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/customer-management" >
            <Icon name='address book outline' />
            Müşteri Yönetimi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/report-management" >
            <Icon name='file alternate outline' />
            Rapor Yönetimi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/page-customization" >
            <Icon name='edit outline' />
            İçerik Yöneticisi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/media-content" >
            <Icon name='images outline' />
            Medya Yönetimi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/news" >
            <Icon name='paper plane outline' />
            Haber Yönetimi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/hes-list" >
            <Icon name='user doctor' />
            HES Yönetimi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/complaint-list" >
            <Icon name='discussions icon' />
            Müşteri Şikayetleri Yönetimi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/contact-form-detail" >
            <Icon name='wpforms' />
            İletişim Formu
          </Menu.Item>
          <Menu.Item as={Link} to="/do/AquilaSuggestions-list" >
            <Icon name='medapps' />
            Aquila Öneri Formu
          </Menu.Item>
          {/* <Menu.Item as={Link} to="/fragile" >
            <Icon name='medapps' />
            Fragile'a Geç
          </Menu.Item> */}
        </> : null
      }
      {userRole === 'M' ?
        <>
          <Menu.Item as={Link} to="/do/customer-document" >
            <Icon name='copy outline' />
            Rapor Servisi
          </Menu.Item>
        </> : null
      }

      {userRole === 'H' ?
        <>
          <Menu.Item as={Link} to="/do/EmployeeList/EmployeeList" >
            <Icon name='hacker news square' color='teal' />
            Yeni Başvuru Listesi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/EmployeeList/Degerlendirme" >
            <Icon name='thumbs down outline' color='teal' size='big' loading />
            Değerlendirme Listesi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/EmployeeList/Gorusulecek" >
            <Icon name='handshake outline' color='teal' />
            Görüşülecekler Listesi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/EmployeeList/Alinacaklar" >
            <Icon name='check' color='teal' />
            İşe Alınacaklar Listesi
          </Menu.Item>
          <Menu.Item as={Link} to="/do/EmployeeList/Red" >
            <Icon name='hotjar' color='teal' />
            Uygun Bulunmayan
          </Menu.Item>
          <Menu.Item as={Link} to="/do/EmployeeList/TumListe" >
            <Icon name='list alternate' color='teal' />
            Tüm Liste
          </Menu.Item>
          <Menu.Item as={Link} to="/do/EmployeeList/BasvuruPozisyonuEkle" >
            <Icon name='search plus' color='teal' />
            Başvuru İçin Pozisyon Ekle
          </Menu.Item>
        </>
        : null}

      {userRole === 'K' ?
        <>
          <Menu.Item as={Link} to="/do/news" >
            <Icon name='paper plane outline' />
            Haber Yönetimi
          </Menu.Item>
        </> : null
      }

      <Menu.Item as={Link} to="/do/user-settings" >
        <Icon name='setting' />
        Kullanıcı Ayarları
      </Menu.Item>
      <Menu.Item as={Link} onClick={() => { localStorage.clear() }} to="/" >
        <Icon name='power off' />
        Çıkış
      </Menu.Item>
    </Sidebar>
  )
}

export default SideBar