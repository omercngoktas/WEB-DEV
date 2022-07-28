import agent from '../../../axios/agent';
import {Popup, Label} from 'semantic-ui-react';
import React from 'react';

const stokGrup1 = [
        { key: 'AB', text: 'AB', value: 'AB' },
        { key: 'ABI', text: 'ABI', value: 'ABI' },
        { key: 'AŞ', text: 'AŞ', value: 'AŞ' },
        { key: 'AN', text: 'AN', value: 'AN' },
        { key: 'AY', text: 'AY', value: 'AY' },
        { key: 'AZ', text: 'AZ', value: 'AZ' },
        { key: 'BFS', text: 'BFS', value: 'BFS' },
        { key: 'BY', text: 'BY', value: 'BY' },
        { key: 'FB', text: 'FB', value: 'FB' },
        { key: 'FL', text: 'FL', value: 'FL' },
        { key: 'Fİ', text: 'Fİ', value: 'Fİ' },
        { key: 'FY', text: 'FY', value: 'FY' },
        { key: 'FV', text: 'FV', value: 'FV' },
        { key: 'HA', text: 'HA', value: 'HA' },
        { key: 'HY', text: 'HY', value: 'HY' },
        { key: 'İ1', text: 'İ1', value: 'İ1' },
        { key: 'MS', text: 'MS', value: 'MS' },
        { key: 'İ2', text: 'İ2', value: 'İ2' },
        { key: 'Aİ', text: 'Aİ', value: 'Aİ' },
        { key: 'P1', text: 'P1', value: 'P1' },
        { key: 'P2', text: 'P2', value: 'P2' },
        { key: 'P3', text: 'P3', value: 'P3' },
        { key: 'P4', text: 'P4', value: 'P4' },
        { key: 'P5', text: 'P5', value: 'P5' },
        { key: 'P6', text: 'P6', value: 'P6' },
        { key: 'HM', text: 'HM', value: 'HM' },
        { key: 'LYA',text: 'LYA', value: 'LYA'},
        { key: 'LYF',text: 'LYF', value: 'LYF'},
        { key: 'LYY',text: 'LYY', value: 'LYY'},
        { key: 'PÜR',text: 'PÜR', value: 'PÜR'},
        { key: 'İL',text: 'İL', value: 'İL'},
        { key: 'İİ',text: 'İİ', value: 'İİ'},
        { key: 'İLA',text: 'İLA', value: 'İLA'},
        { key: 'İLY',text: 'İLY', value: 'İLY'},
        { key: 'IS',text: 'IS', value: 'IS'},
        { key: 'İF',text: 'İF', value: 'İF'},
        { key: 'SBI',text: 'SBI', value: 'SBI'},
        { key: 'SRG',text: 'SRG', value: 'SRG'},
        { key: 'ŞR',text: 'ŞR', value: 'ŞR'},
        { key: 'ŞS',text: 'ŞS', value: 'ŞS'},
        { key: 'RD',text: 'RD', value: 'RD'},
        { key: 'Ş1', text: 'Ş1', value: 'Ş1' },
        { key: 'Ş2', text: 'Ş2', value: 'Ş2' },
        { key: 'Ş3', text: 'Ş3', value: 'Ş3' },
        { key: 'Ş4', text: 'Ş4', value: 'Ş4' },
        { key: 'Ş5', text: 'Ş5', value: 'Ş5' },
        { key: 'YF', text: 'YF', value: 'YF' },
        { key: 'YM', text: 'YM', value: 'YM' },
        { key: 'YŞ', text: 'YŞ', value: 'YŞ' },
        { key: 'YIA', text: 'YIA', value: 'YIA' },
        { key: 'ZZ', text: 'ZZ', value: 'ZZ' },
]

const firmalar = [
        { key: 'Birgi', text: 'Birgi', value: '1' },
        { key: 'Mefar', text: 'Mefar', value: '0' },
        { key: 'Defar', text: 'Defar', value: '2' },
]

const dosyaTipi = [
        { key: 'pdf', text: 'Pdf', value: 'pdf' },
        { key: 'xls ', text: 'Excel ', value: 'xls' }
]

const raporlar = []
agent.Reports.list().then(response => {response.data.map((item) => {
        let name = item.name;
        let number = item.number;
        let popup = <Popup content={name} trigger={<Label>{number+ " "}</Label>} />
        return raporlar.push({'key' : number, 'text': popup, 'value': number})
})})

const tumRaporlar = []
agent.Reports.list().then(response => {response.data.map((item) => {
        let name = item.name;
        let number = item.number;
        let date = item.date;
        let popup = <h6>{name}</h6>;
        return tumRaporlar.push({'key' : number, 'text': popup, 'value': number, 'date':date})
})})

export {stokGrup1, firmalar, raporlar, tumRaporlar, dosyaTipi}