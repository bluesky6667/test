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
        // this.setState({notiList: this.getNotiList(1)});
        this.setState({notiList: makeData()});
    }

    async getNotiList(pageNo) {
        const res = await axios.get('/notice/list', {
            params: {
                pageNo
            }
        });
        return res.data;
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