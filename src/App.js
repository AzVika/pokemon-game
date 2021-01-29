import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';


const App = () => {
  return (
    <> 
        <Header
            title="This is title"
            descr="This is Description!"
        />
        <Layout
            id="1"
            title="Layout 1"
            descr="Description 1"
            urlBg="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b52e4b6-1d4e-4a16-8859-0147b1f4ec81/bg2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210127T131418Z&X-Amz-Expires=86400&X-Amz-Signature=7e3bac9aa3b5628275331a95aaec40a0e1982de3b9d50c06f78f5d22395967e8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg2.jpg%22"
        />
        <Layout
            id="2"
            title="Layout 2"
            descr="Description 2"
            colorBg="#c0c7d7"
        />
        <Layout
            id="3"
            title="Layout 3"
            descr="Description 3"
            urlBg="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e62948f-bef9-4af8-b2f6-c0a97abc27a7/bg3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210127T123914Z&X-Amz-Expires=86400&X-Amz-Signature=a85b6bdf82b47ade1865a52e3f4c9487f4d7ef710e910e0893b8738795aec37e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg3.jpg%22"
        />
        <Footer />
    </>
    
  );
}

export default App;
