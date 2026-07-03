import indexContext from './pages/index_page';

export default (page)=>{
    switch(page){
        case '/index.html':
            return indexContext;
        default:
            return {};
    }
};