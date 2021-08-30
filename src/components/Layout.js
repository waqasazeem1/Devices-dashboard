import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import ListModal from './ListModal'
// import './index.css';
import {
  Layout,
  Menu,
  Row,
  Col,
  Button,
  Input,
  Tooltip,
  Dropdown,
  Table,

} from "antd";
import {
  HomeOutlined,
  CalendarOutlined,
  TeamOutlined,
  SearchOutlined,
  DownOutlined,
  DatabaseOutlined,
  ToolOutlined,
  RollbackOutlined
} from "@ant-design/icons";

const data = [
  {
    key: 1,
    name: "zohn Brown",
    age: 72,
    email: "abc@gmail.com",
  },
  {
    key: 2,
    name: "Mim Green",
    age: 28,
    email: "123@gmail.com",
  },
  {
    key: 3,
    name: "Aoe Black",
    age: 32,
    email: "xyz@gmail.com",
  },
];

function Layoutt() {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(data);
  const [showPopup, setShowPopup] = useState(false);


  
   

  const handleChange = (e)=>{
    setSearchTerm(e.target.value)
    // console.log(searchTerm)
  }

  const SortByAge = () =>{
    setSearchResult(()=>{
      const dataToSort = [...data];
      dataToSort.sort((a,b)=> Number(a.age) - Number(b.age));
      return dataToSort;
    });

  }

  const SortByName = () =>{
    setSearchResult(()=>{
      const dataToSort = [...data];
      dataToSort.sort((a,b)=> a.name.localeCompare(b.name));
      return dataToSort;
    })
  }

  const togglePopup =()=>{
    setShowPopup(!showPopup)
    // console.log(showPopup)
  }

   useEffect(()=>{
      const results = data.filter(dat => dat.name.toLowerCase().includes(searchTerm));
      setSearchResult(results)
  }, [searchTerm])

  // const { Search } = Input;
 
  // const [collapsed, setCollapsed] = useState(false);
  // const onSearch = value => console.log(value);

  // const onCollapse = collapsed => {
  //   console.log(collapsed);
  // setCollapsed({collapsed})
  // };

  // dropdownmenu

  const menu = (
    <Menu>
      <Menu.Item>
        <a href>
          Default sorting
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href
          // target="_blank"
          // rel="noopener noreferrer"
          // href="https://www.aliyun.com"
          onClick={SortByName}
        >
          Sort by Name
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href
          onClick={SortByAge}
        >
          Sort by Age
        </a>
      </Menu.Item>
      {/* <Menu.Item danger>a danger item</Menu.Item> */}
    </Menu>
  );

  // Table..

  const columns = [
    {
      title: <b>Full Name</b> ,
      dataIndex: "name",
    },
    {
      title: <b>Age</b> ,
      dataIndex: "age",
    },
    {
      title: <b>Email</b>,
      dataIndex: "email",
    },
   
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  // const [selectionType, setSelectionType] = useState("checkbox");


  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider >
          <div />
          <a href="https://www.google.com"><img
            src="\image\Mobily.PNG"
            alt="Mobily"
            width="35px"
            style={{ margin: "30px 5px 30px 30px" }}
          />
          <span style={{ color: "white", fontFamily: "revert" }}>
            Cisco x Mobily
          </span>
          </a>

          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item  icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item>Features</Menu.Item>
            <Menu.Item icon={<CalendarOutlined />}>Calender</Menu.Item>
            <Menu.Item  icon={<DatabaseOutlined />}>
              Inventory Management
            </Menu.Item>
            <SubMenu  icon={<ToolOutlined />} title="Device Status">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item icon={<RollbackOutlined/>}>Backups</Menu.Item>
            <SubMenu icon={<TeamOutlined />} title="Teams">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

     
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <a href><img src="/image/user.png" width="40" alt="pic" style={{float:"right", margin:'20px 50px 20px 20px', borderRadius:'50%', border:'2px solid pink'}}/></a>
          </Header>

          <Content style={{ margin: "0 16px" }}>
            <div
              className=""
              style={{ padding: 24 }}
            >
              <Row>
                <Col span={8}>
                  <h2>Physical Site detail</h2>
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  {" "}
                  <Button onClick={togglePopup} type="primary" style={{ borderRadius: "5px" }}>
                    Add List
                  </Button>
                </Col>
              </Row>


              <Row>
                <Col span={6} push={18}>
                  <Dropdown overlay={menu}  >
                    <a
                      href
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                      style={{fontWeight:'bold', }}
                
                    >
                      Sort by <DownOutlined style={{fontWeight:'bold'}} />
                    </a>
                  </Dropdown>
                  ,
                </Col>
                <Col span={16} pull={6}>
                  <Input
                    placeholder="Search by device Name"
                    onChange={handleChange}
                    value={searchTerm}
                    style={{ borderRadius: "20px", padding:'7px', paddingLeft:'20px' }}
                    // prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                      <Tooltip title="Extra information">
                        <SearchOutlined style={{ color: "rgba(0,0,0,.45)", fontSize:'20px', paddingRight:'20px' }} />
                      </Tooltip>
                    }
                  />
                </Col>
              </Row>
            </div>
            {/* table */}
            <div>

              {/* <ul>
              {searchResult.map(item =>(
           
                <li>{item}</li>
                 ))}
                </ul> */}

                <Table
                  columns={columns}
                 dataSource ={searchResult}
                  
                  // rowSelection={{
                  //   // type: selectionType,
                  //   ...rowSelection,
                  // }}
                />  
            </div>
          </Content>
          {showPopup ? <ListModal  datas={searchResult} setSearch={setSearchResult} closePopup={togglePopup}/> : null }
          
          <Footer style={{ textAlign: "center" }}>© Copyright - 2021 React Hooks  </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Layoutt;
