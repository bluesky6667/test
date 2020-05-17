import React from "react";
import SimplePage from "../Components/SimplePage";
import ReactTable from "react-table";
import axios from 'axios';
import {makeData} from "../../../../DemoPages/Tables/DataTables/Examples/utils";

class Noti extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notiList: []
        };
    }
    componentDidMount() {
        // const res = this.getNotiList(1);
        // this.setState({notiList: this.getNotiList(1)});
        this.setState({notiList: makeData()});
    }

    async getNotiList(pageNo) {
        // const res = await axios({
        //     method: 'post',
        //     url: 'http://13.125.33.143:8401/notice/list',
        //     data: {
        //         page: pageNo
        //     }
        // });
        // const res = await axios.get('http://13.125.33.143:8401/notice/list', {
        //     params: {
        //         page: pageNo
        //     }
        // });
        // const res = await axios({
        //     method: 'get',
        //     url: 'http://13.125.33.143:8401/notice/list',
        //     data: {}
        // });
        const res = await axios.get('/notice/form', {
            // headers: {
            //     'Access-Control-Allow-Credentials': 'true',
            //     'Access-Control-Allow-Headers': '*',
            //     'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
            //     'Access-Control-Allow-Origin': '*',
            //     'Access-Control-Max-Age': '3600'
            // },
            params: {
                noticeNum: 4
            }
        });

        // return await res.json();
        return res;
    }

    render() {
        const data = this.state.notiList;
        return (
            <SimplePage>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "Name",
                            columns: [
                                {
                                    Header: "First Name",
                                    accessor: "firstName"
                                },
                                {
                                    Header: "Last Name",
                                    id: "lastName",
                                    accessor: d => d.lastName
                                }
                            ]
                        },
                        {
                            Header: "Info",
                            columns: [
                                {
                                    Header: "Age",
                                    accessor: "age"
                                },
                                {
                                    Header: "Status",
                                    accessor: "status"
                                }
                            ]
                        },
                        {
                            Header: 'Stats',
                            columns: [
                                {
                                    Header: "Visits",
                                    accessor: "visits"
                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </SimplePage>
        );
    }
}

export default Noti;