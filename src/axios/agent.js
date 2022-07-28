import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
//https://localhost:5000/api/
//https://mefar.com/api
axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('UserToken');
    if(token) config.headers.Authorization = `Bearer ${token}`;
    return config
}, error => {
    return Promise.reject(error);
})

const responseBody = (response) =>  response;



const requests = {
    get : (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put : (url, body) => axios.put(url, body).then(responseBody),
    delete : (url) => axios.delete(url).then(responseBody)
}

const Activities = {
    list: () => requests.get('/activities', {params: {_limit: 10}}),
    list2: () => requests.get('/activities/two-news'),
    LastNews: () => requests.get('/activities/lastestNews'),
    list12: (id) => requests.get(`/activities/news/${id}`),
    getLink: (link) => requests.get(`/activities/getlink/${link}`),
    details :(id) => requests.get(`/activities/${id}`),
    create : (activity) => requests.post('/activities', activity),
    update : (activity) => requests.put(`/activities/${activity.id}`, activity),
    delete:  (activity) => requests.delete(`/activities/${activity.id}`)
}

const User = {
    list : () => requests.get('user/users'),
    current: () => requests.get('user/'),
    login: (user) => requests.post('/user/login', user),
    register: (user) => requests.post('/user/register', user),
    edit: (user) => requests.put(`/user/${user.id}`, user),
    delete: (id) => requests.delete(`/user/${id}`)
}

const Photos = {
    list : () => requests.get('photos/list'),
    add : (formData, config) => requests.post('photos/', formData, config),
    delete: (id) => requests.delete(`/photos/${id}`)
}

const Pages = {
    list: () => requests.get('/pages'),
    details :(pageId) => requests.get(`/pages/${pageId}`),
    create : (page) => requests.post('/pages', page),
    update : (page) => requests.put(`/pages/${page.pageId}`, page),
    delete:  (page) => requests.delete(`/pages/${page.pageId}`)
}

const Sayfalar = {
    list: () => requests.get('/sayfalar'),
    details :(Id) => requests.get(`/sayfalar/${Id}`),
    create : (page) => requests.post('/sayfalar', page),
    update : (page) => requests.put(`/sayfalar/${page.Id}`, page),
    delete:  (page) => requests.delete(`/sayfalar/${page.Id}`)
}

const Reports = {
    list: () => requests.get('/reports'),
    details :(reportId) => requests.get(`/reports/${reportId}`),
    create : (report) => requests.post('/reports', report),
    update : (report) => requests.put(`/reports/${report.reportId}`, report),
    delete:  (reportId) => requests.delete(`/reports/${reportId}`)
}

const Customers = {
    list: () => requests.get('/customers'),
    create : (customer) => requests.post('/customers', customer),
    update : (customer) => requests.put(`/customers/${customer.customerId}`, customer),
    delete : (customer) => requests.delete(`/customers/${customer.customerId}`)
}

const Visitors = {
    list: () => requests.get('/visitors'),
    details :(Id) => requests.get(`/visitors/${Id}`),
    update : (visitor) => requests.put(`/visitors/${visitor.Id}`, visitor),
}

const ReportClaim = {
    create : (report) => requests.post('/reportclaims', report),
    download : (name) => requests.get(`/reportclaims/download/${name}`, name),
    list: () => requests.get('/reportclaims'),
    delete:  (id) => requests.delete(`/reportclaims/${id}`)
}

const Aktiviteler = {
    list: () => requests.get('/aktiviteler'),
    list2: () => requests.get('/aktiviteler/iki-haber'),
    list12: (id) => requests.get(`/aktiviteler/haberler/${id}`),
    getLink: (link) => requests.get(`/aktiviteler/getlink/${link}`),
    details :(id) => requests.get(`/aktiviteler/${id}`),
    create : (aktivite) => requests.post('/aktiviteler', aktivite),
    update : (aktivite) => requests.put(`/aktiviteler/${aktivite.id}`, aktivite),
    delete:  (aktivite) => requests.delete(`/aktiviteler/${aktivite.id}`)
}

const HESKod = {
    list: () => requests.get('/hes'),
    create : (Person) => requests.post('/hes', Person),
    uploadDoc : (Doc) => requests.post('/hes/upload', Doc)
}

const ContactFormList = {
    list: () => requests.get('/contactform'),
    create : (templateParams) => requests.post('/contactform', templateParams),
}
const ComplaintsForm = {
    list: () => requests.get('/complaints'),
    create: (newForm) => requests.post('/complaints', newForm),
}
const FragileDepartmentAdd = {
    list: () => requests.get('/fragiledepartment'),
    create: (newForm) => requests.post('/fragiledepartment', newForm),
}
const HRApplication = {
    list: () => requests.get('/HRApplication'),
    detail: (id) => requests.get(`/HRApplication/${id}`),
    create: (NewForm) => requests.post('/HRApplication', NewForm),
    update : (UpdateStatus) => requests.put(`/HRApplication/${UpdateStatus.id}`, UpdateStatus)
}
const HrComments = {
    list: () => requests.get('/HrApplicationComments'),
    create: (NewForm) => requests.post('/HrApplicationComments', NewForm),
}
const HrLogs = {
    list: () => requests.get('/HrLogs'),
    create: (NewForm) => requests.post('/HrLogs', NewForm),
}
const HrPozitions = {
    list: () => requests.get('/HrApplicationPozitions'),
    details: (id) => requests.get(`/HrApplicationPozitions/${id}`),
    create: (NewForm) => requests.post('/HrApplicationPozitions', NewForm),
    update : (NewForm) => requests.put(`/HrApplicationPozitions/${NewForm.id}`, NewForm)
}

const ProjectAquila = {
    list: () => requests.get('/Aquila'),
    create: (NewForm) => requests.post('/Aquila', NewForm),
    update: (NewForm) => requests.put(`/Aquila/${NewForm.id}`,NewForm)
}


export default {Activities, User, Photos, Pages, Sayfalar, Reports, Customers,
     Visitors, ReportClaim, Aktiviteler, HESKod, ContactFormList, 
     ComplaintsForm,FragileDepartmentAdd,HRApplication,HrComments,HrLogs,HrPozitions,
     ProjectAquila}